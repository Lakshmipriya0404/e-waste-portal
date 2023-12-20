import schemas
from typing import List
from sqlalchemy.orm import Session
from fastapi import Depends, HTTPException, APIRouter, status
from fastapi.encoders import jsonable_encoder
import services
from .authentication import get_current_user
from geopy.geocoders import Nominatim

from models import Producers, Consumers, Products, Transaction, MetalContent

router = APIRouter(
    tags = ["Producers"]
)
    
@router.post("/producer/producer_signup")
async def create_user(
    user: schemas.CreateProducer, db: Session = Depends(services.get_db)
):
    db_user = await services.get_user_by_email(user.email, db)
    
    if db_user:
        raise HTTPException(status_code=400, detail="Email Already Exists")
    
    lat,lon = services.find_lat_lon(user.pincode)
    
    user_obj = Producers(
        email=user.email, pass_hash=services.Hash.encrypt(user.pass_hash),
        pname=user.pname, category=user.category,
        phone=user.phone, address=user.address,
        state=user.state, pincode=user.pincode,
        latitude=lat, longitude=lon, credits=0
    )
    db.add(user_obj)
    db.commit()
    db.refresh(user_obj)
    return user_obj



@router.delete("/producer/delete_account/{id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_user(id, db: Session = Depends(services.get_db), current_user: schemas.ShowProducer = Depends(get_current_user)):
    db.query(Producers).filter(Producers.pid==id).delete(synchronize_session=False)
    db.commit()
    return 'Account with id {id} is deleted'



@router.get("/producer/all_producers", response_model=List[schemas.ShowProducer])
def all(db: Session = Depends(services.get_db)):
    producers = db.query(Producers).all()
    return producers


# @router.get("/producer/profile/view/{id}", response_model=schemas.ShowProducer)
# def get_prod_by_id(id, db: Session = Depends(services.get_db)):
#     prod = db.query(Producers).filter(Producers.pid==id).first()

#     if not prod:
#         raise HTTPException(status_code=404, detail=f"Producer with id {id} is not found.")
#     return prod


@router.get("/producer/profile/view/{email}", response_model=schemas.ShowProducer)
def get_prod_by_email(email, db: Session = Depends(services.get_db), current_user: schemas.ShowProducer = Depends(get_current_user)):
    prod = db.query(Producers).filter(Producers.email==email).first()

    if not prod:
        raise HTTPException(status_code=404, detail=f"Producer with email {email} is not found.")
    return prod


@router.put("/producer/profile/edit/{id}")
def update_profile(id, request: schemas.CreateProducer, db: Session = Depends(services.get_db), current_user: schemas.ShowProducer = Depends(get_current_user)):
    update_item=jsonable_encoder(request)
    producer = db.query(Producers).filter(Producers.pid == id)

    if not producer.first():
        raise HTTPException(status_code=404, detail="Producer not found")
    else:
        producer.update(update_item)

    db.commit()
    return 'updated'


@router.get("/producer/nearby_facilities", response_model=List[schemas.ConsWithDist])
def nearby_facilities(lat:str, long:str, pincode:int, db: Session = Depends(services.get_db)):
    cons = db.query(Consumers).all()
    if pincode!=0:
        lat,long = services.find_lat_lon(pincode)
    consumers_with_distance = [
        schemas.ConsWithDist(
                cid=consumer.cid,
                cname=consumer.cname,
                email=consumer.email,
                phone=consumer.phone,
                category=consumer.category,
                address=consumer.address,
                state=consumer.state,
                pincode=consumer.pincode,
                gmap_link=consumer.gmap_link,
                start_time=consumer.start_time,
                end_time=consumer.end_time,
                doorstep_coll=consumer.doorstep_coll,
                distance= services.haversine_distance(lat, long, consumer.latitude, consumer.longitude)
        )
        for consumer in cons
    ]

    # Sort consumers by distance and return the closest ones
    sorted_consumers = sorted(consumers_with_distance, key=lambda x: x.distance)

    return sorted_consumers[:10] if len(sorted_consumers)>10 else sorted_consumers


@router.post("/producer/addproduct")
async def submit_product_request(
    pid, cid, request: schemas.AddProduct, db: Session = Depends(services.get_db)
):
    product = Products(
        category=request.category, device_type=request.device_type,
        model=request.model, quantity=request.quantity,
        condition=request.condition
    )
    db.add(product)
    db.commit()
    db.refresh(product)

    trans = Transaction(
        pid=pid,cid=cid, 
        did=product.did,
        status="Pending"
    )
    db.add(trans)
    db.commit()
    db.refresh(trans)

    
@router.get("/producer/recent_req", response_model=List[schemas.RecentRequests])
def request_queue(pid, db: Session = Depends(services.get_db)):
    trans = db.query(Transaction).filter(Transaction.pid == pid).all()
    return trans


@router.get("/producer/credit")
def request_queue(pid, db: Session = Depends(services.get_db)):
    person = db.query(Producers).filter(Producers.pid==pid)
    return person.points


import schemas
from typing import List
from sqlalchemy.orm import Session
from fastapi import Depends, HTTPException, APIRouter, status
from fastapi.encoders import jsonable_encoder
import services
import datetime as dt

from models import Consumers, Producers, Transaction, Products, MetalContent

router = APIRouter(
    tags = ["Consumers"]
)

@router.get("/consumer/all_consumers", response_model=List[schemas.ShowConsumerBackend])
def all(db: Session = Depends(services.get_db)):
    consumers = db.query(Consumers).all()
    return consumers


@router.post("/consumer/consumer_signup")
async def create_user(
    request: schemas.CreateConsumer, db: Session = Depends(services.get_db)
):
    db_user = db.query(Consumers).filter(Consumers.email == request.email).first()
    
    if db_user:
        raise HTTPException(status_code=400, detail="Email Already Exists")
    
    lat,lon = services.find_lat_lon(request.pincode)

    user_obj = Consumers(
        email=request.email, pass_hash=services.Hash.encrypt(request.pass_hash),
        cname=request.cname, category=request.category,
        epr_id=request.epr_id, gmap_link=request.gmap_link,
        phone=request.phone, address=request.address,
        state=request.state, pincode=request.pincode,
        start_time=request.start_time, end_time=request.end_time,
        doorstep_coll=request.doorstep_coll,
        latitude=lat, longitude=lon
    )
    db.add(user_obj)
    db.commit()
    db.refresh(user_obj)
    return user_obj


@router.get("/consumer/req_queue", response_model=List[schemas.ProdRequests])
def request_queue(cid, db: Session = Depends(services.get_db)):
    trans = db.query(Transaction).filter(Transaction.cid == cid).all()
    return trans


@router.put("/consumer/response")
def accept_or_reject(id, status, db: Session = Depends(services.get_db)):
    ui=schemas.ConsResponse(
        tid=id,
        status=status,
        date_updated=dt.datetime.utcnow()
    )
    update_item=jsonable_encoder(ui)
    # print(update_item)
    trans = db.query(Transaction).filter(Transaction.tid == id)

    if not trans.first():
        raise HTTPException(status_code=404, detail="Transaction not found")
    else:
        trans.update(update_item)

    db.commit()
    return 'updated'


@router.get("/consumer/order_history", response_model=List[schemas.ProdRequests])
def request_queue(cid, db: Session = Depends(services.get_db)):
    trans = db.query(Transaction).filter(Transaction.cid == cid).all()
    return trans


@router.put("/consumer/assign")
def accept_or_reject(pid, db: Session = Depends(services.get_db)):
    trans = db.query(Transaction).filter(Transaction.pid == pid).first()
    product = db.query(Products).filter(Products.did==trans.did).first()
    metal = db.query(MetalContent).filter(MetalContent.device_type==product.device_type)

    ui=schemas.Credit(
        credit=services.kartavya_points(product.condition,metal.gold,metal.silver,metal.palladium,metal.lead,metal.mercury,metal.cadmium,metal.average_life)
    )
    update_item=jsonable_encoder(ui)
    # print(update_item)
    person = db.query(Producers).filter(Producers.pid==pid)

    if not person.first():
        raise HTTPException(status_code=404, detail="Transaction not found")
    else:
        person.update(update_item)

    db.commit()
    return 'updated'
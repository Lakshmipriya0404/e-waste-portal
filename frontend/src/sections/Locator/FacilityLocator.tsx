import React, { useState } from "react";
import styles from "./FacilityLocator.module.css";
import { GetLocations } from "../../api";
import Popup from "../../components/Popuppage/Popup";

interface FacilityData {
  cname: string;
  address: string;
  email: string;
  phone: string;
  distance: string;
}

const FacilityLocator: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [processedData, setProcessedData] = useState<FacilityData[] | null>(
    null
  );
  const [zipCode, setZipCode] = useState<string>("0");
  const [loading, setLoading] = useState<boolean>(false);

  const handleLiveLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      setError("Geolocation is not supported by this browser.");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };

  const showPosition = (position: GeolocationPosition) => {
    setError(null);
    setLoading(true);

    GetLocations(
      position.coords.latitude.toString(),
      position.coords.longitude.toString(),
      parseInt(zipCode, 10)
    )
      .then((response) => {
        console.log(response.data);
        setProcessedData(response.data as FacilityData[]);
      })
      .catch((error) => {
        setError("Error processing location on the server.");
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const showError = (error: GeolocationPositionError) => {
    setError(error.message);
  };

  const handleZipCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setZipCode(e.target.value);
  };

  const handleSearch = () => {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  };

  return (
    <>
      <div className={styles.locatorwrapper}>
        <div>
          <h2 className={styles.header}>Nearest E-Waste Facilitator</h2>
          <p className={styles.subheader}>
            Find your nearest E-Waste Facilitator location with your current
            location or pincode
          </p>
        </div>
        <div className={styles.locator}>
          <button className={styles.currlocator} onClick={handleLiveLocation}>
            Current Location
          </button>
          <div className={styles.pinlocatordiv}>
            <p className={styles.pinlocatorlbl}>Enter Pincode:</p>
            <input
              className={styles.pinlocatorinp}
              type="text"
              placeholder="Enter Zip Code"
              value={zipCode}
              onChange={handleZipCodeChange}
            />
            <button className={styles.button} onClick={handleSearch}>
              Find
            </button>
          </div>
        </div>
        <div>
          {loading && <Popup />}
          {error && <div className={styles.error}>{error}</div>}
          {processedData && (
            <div>
              <h2 className={styles.nearbyheader}>
                Nearby E-waste Facilitators
              </h2>
              <table className={styles.requests}>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                  </tr>
                </thead>
                <tbody>
                  {processedData.map((item, index) => (
                    <tr key={index}>
                      <a href="">
                        <td>{item.cname}</td>
                      </a>
                      <td>{item.address}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FacilityLocator;

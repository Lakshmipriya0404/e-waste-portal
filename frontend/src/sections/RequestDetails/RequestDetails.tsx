//producer profile
// producer profile
import React from "react";
import styles from "./RequestDetails.module.css";

const RequestDetails = () => {
  const subHeaders = [
    "Id",
    "Device",
    "Brand",
    "Model",
    "Condition",
  ];
  const rowData = [
    {
      id: "RQ01",
      category: "Phone",
      brand: "Samsung",
      model: "A72",
      condition:"Working",
    },
    {
      id: "RQ03",
      category: "Camera",
      brand: "Nikon",
      model: "AD3400",
      condition:"Not Working",
    },
    {
      id: "RQ06",
      category: "Phone",
      brand: "Oppo",
      model: "V7",
      condition:"Working",
    },
  ];

  const subTitle = [
    "Customer Name",
    "Category",
    "Phone number",
    "Email Id",
    "Location",
    "Request Date",
    "Response Date",
  ];
  const subValues = [
    "Disha",
    "Phone",
    "9876543218",
    "disha@gmail.com",
    "mumbai",
    "6.12.2023",
    "18.12.2023"
  ];

  return(
    <div className={styles.centeredContent}>
      <div className={styles.profilewrap}>
      <div className={styles.profile}>
        <div className={styles.header}>Your Request Summary!</div>
        {subTitle.map((header, index) => (
          <div key={index} className={styles.row}>
            <div className={styles.subheader}>{header}</div>
            <div className={styles.subvalue}>{subValues[index]}</div>
          </div>
        ))}
      </div>
    </div>
    <div className={styles.profilewrap}>
      <div className={styles.profile}>
        <div>
          <table className={styles.requests}>
            <thead>
              <tr>
                {subHeaders.map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rowData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {Object.values(row).map((item, columnIndex) => (
                    <td key={columnIndex}>{item}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className={styles.button}>
        <button>Add</button>
        <button>Change</button>
      </div>
    </div>
    </div>
  )
    
};

export default RequestDetails;

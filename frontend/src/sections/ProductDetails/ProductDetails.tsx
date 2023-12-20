//producer profile
// producer profile
import React from "react";
import styles from "./ProductDetails.module.css";

const ProductDetails = () => {
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


  return(
    <div className={styles.centeredContent}>
      <div className={styles.profilewrap}>
      <div className={styles.profile}>
        <div className={styles.header}>Your Product Details!</div>
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
        <button>Add Product</button>
        <button>Submit Request</button>
      </div>
    </div>
    </div>
  )
    
};

export default ProductDetails;

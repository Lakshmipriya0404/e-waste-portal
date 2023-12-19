import React from "react";
import styles from "./ProductDetails.module.css";

const ProductDetails = () => {
  return (
    <div className={styles.detailswrap}>
      <div className={styles.header}>
        <a href="">back icon</a>
        <h2>Product Details</h2>
        <div className={styles.table}>TABLE</div>
        <div className={styles.button}>
          <button>ADD PRODUCT</button>
          <button>SUBMIT REQUEST</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

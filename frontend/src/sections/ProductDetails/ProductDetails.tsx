import React, { useState } from "react";
import styles from "./ProductDetails.module.css";
import AddProductModal from "../../components/AddProductModal/AddProductModal";

const ProductDetails = () => {
  const [isAddProductModalOpen, setAddProductModalOpen] = useState(false);

  const openAddProductModal = () => {
    setAddProductModalOpen(true);
  };

  const closeAddProductModal = () => {
    setAddProductModalOpen(false);
  };

  return (
    <div className={styles.detailswrap}>
      <div className={styles.header}>
        <a href="">back icon</a>
        <h2>Product Details</h2>
        <div className={styles.table}>TABLE</div>
        <div className={styles.button}>
          <button onClick={openAddProductModal}>ADD PRODUCT</button>
          <button>SUBMIT REQUEST</button>
        </div>
      </div>

      {isAddProductModalOpen && (
        <AddProductModal onClose={closeAddProductModal} />
      )}
    </div>
  );
};

export default ProductDetails;

import React, { useState } from "react";
import styles from "./ProductDetails.module.css";
import AddProductModal from "../../components/AddProductModal/AddProductModal";

const ProductDetails = () => {
  const [isAddProductModalOpen, setAddProductModalOpen] = useState(false);
  const [productData, setProductData] = useState(null);
  const openAddProductModal = () => {
    setAddProductModalOpen(true);
  };

  const closeAddProductModal = () => {
    setAddProductModalOpen(false);
  };
  const handleAddProduct = (formData) => {
    // Handle the form data received from AddProductModal
    console.log("Form Data:", formData);

    // Set the product data in the state or perform any other actions
    setProductData(formData);
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
        <AddProductModal
          onClose={closeAddProductModal}
          onAddProduct={handleAddProduct}
        />
      )}
    </div>
  );
};

export default ProductDetails;

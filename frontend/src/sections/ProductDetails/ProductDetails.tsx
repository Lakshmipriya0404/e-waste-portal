import React, { useState } from "react";
import styles from "./ProductDetails.module.css";
import AddProductModal from "../../components/AddProductModal/AddProductModal";

const ProductDetails = () => {
  const [isAddProductModalOpen, setAddProductModalOpen] = useState(false);
  const [productData, setProductData] = useState([]);
  const openAddProductModal = () => {
    setAddProductModalOpen(true);
  };

  const closeAddProductModal = () => {
    setAddProductModalOpen(false);
  };
  const handleAddProduct = (formData) => {
    console.log("Form Data:", formData);
    setProductData((prevData) => [...prevData, formData]);
    console.log(productData);
    closeAddProductModal();
  };
  return (
    <div className={styles.detailswrap}>
      <div className={styles.header}>
        {/* <a href="">back icon</a> */}
        <h2>Product Details</h2>
        <div className={styles.table}>
          <table className={styles.requests}>
            <thead>
              <tr>
                <th>Category</th>
                <th>Device Type</th>
                <th>Model</th>
                <th>Quantity</th>
                <th>Condition</th>
              </tr>
            </thead>
            <tbody>
              {productData.map((product, index) => (
                <tr key={index}>
                  <td>{product.category}</td>
                  <td>{product.device_type}</td>
                  <td>{product.model}</td>
                  <td>{product.quantity}</td>
                  <td>{product.condition}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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

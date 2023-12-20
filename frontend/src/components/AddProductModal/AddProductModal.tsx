import React, { useState } from "react";
import styles from "./AddProduct.module.css";

const AddProductModal = ({ onClose, onAddProduct }) => {
  const handleCloseButtonClick = () => {
    if (onClose) {
      onClose();
    }
  };
  const [formData, setFormData] = useState({
    modelName: "",
    category: "",
    condition: "",
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      image: file,
    }));
  };

  const handleAddProductClick = () => {
    // Call the onAddProduct function with the form data
    if (onAddProduct) {
      onAddProduct(formData);
    }

    // Close the modal
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className={styles.popupcontainer}>
      <div className={styles.popupbody}>
        <div className={styles.popupcontents}>
          <div className={styles.modelname}>
            <label>Model Name</label>
            <input
              type="text"
              id="name"
              className={styles.input_text}
              name="name"
              placeholder="Name"
            />
          </div>
          <div className={styles.category}>
            <label htmlFor="category">Category</label>

            <select name="category" id="category">
              <option value="processor">Centralized Data Processing</option>
              <option value="PC">PC</option>
              <option value="Laptop">Laptop</option>
              <option value="Printer">Printer</option>
              <option value="Typewriters">Typewriters</option>
              <option value="Settopbox">Settop Box</option>
              <option value="Smartphones">Smartphones</option>
              <option value="TV">TV</option>
              <option value="Refridgerator">Refridgerator</option>
              <option value="AC">AC</option>
              <option value="UPS">UPS</option>
              <option value="Routers">Routers</option>
              <option value="Modems">Modems</option>
              <option value="Flashdrives">Flash Drives</option>
              <option value="Hairdryers">Hairdryers</option>
            </select>
          </div>

          <div className={styles.condition}>
            <label htmlFor="condition">Condition</label>
            <select name="condition" id="condition">
              <option value="working">Working</option>
              <option value="notworking">Not Working</option>
              <option value="damaged">Damaged</option>
            </select>
          </div>

          <div className={styles.images}>
            <label htmlFor="imageUpload">Choose an image:</label>
            <input
              type="file"
              id="imageUpload"
              name="image"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
        </div>
        <div>
          <button className={styles.addbutton} onSubmit={handleAddProductClick}>
            Add Product
          </button>
          <button className={styles.addbutton} onClick={handleCloseButtonClick}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;

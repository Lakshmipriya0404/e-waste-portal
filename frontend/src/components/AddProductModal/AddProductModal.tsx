import React, { useState } from "react";
import styles from "./AddProduct.module.css";

const AddProductModal = ({ onClose, onAddProduct }) => {
  const handleCloseButtonClick = () => {
    if (onClose) {
      onClose();
    }
  };
  const [formData, setFormData] = useState({
    model: "",
    category: "",
    condition: "",
    device_type: "",
    quantity: 1,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddProductClick = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

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
        <h1>Add Product</h1>
        <div className={styles.popupcontents}>
          <form onSubmit={handleAddProductClick}>
            <div className={styles.modelname}>
              <label>Model Name</label>
              <input
                type="text"
                id="model"
                className={styles.input_text}
                name="model"
                placeholder="model"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.category}>
              <label htmlFor="Category">Category</label>
              <select name="category" id="category" required>
                <option value="Large houseold Appliances">
                  Large houseold Appliances
                </option>
                <option value="Small Houseold Appliances">
                  Small Houseold Appliances
                </option>
                <option value="IT and Telecommunication">
                  IT and Telecommunication
                </option>
                <option value="Mass Electronics">Mass Electronics</option>
              </select>
            </div>
            <div className={styles.device}>
              <label htmlFor="Device Type">Device Type</label>
              <select name="device_type" id="device_type" required>
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
              <select name="condition" id="condition" required>
                <option value="working">Working</option>
                <option value="notworking">Not Working</option>
                <option value="damaged">Damaged</option>
              </select>
            </div>
            <div className={styles.button}>
              <button className={styles.addbutton} type="submit">
                Add Product
              </button>
              <button
                className={styles.addbutton}
                onClick={handleCloseButtonClick}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;

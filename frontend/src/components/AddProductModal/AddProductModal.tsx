import React from "react";
import styles from "./AddProduct.module.css";
import { useNavigate } from "react-router-dom";

const AddProductModal = () => {
  //   returnlocation = ""

  const navigate = useNavigate();
  const handleCloseButtonClick = () => {
    // Navigate to the Dashboard component when the "Close" button is clicked
    navigate("/producer/dashboard");
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
            <input type="file" id="imageUpload" name="image" accept="image/*" />
          </div>
        </div>
        <button className={styles.addbutton} onClick={handleCloseButtonClick}>
          Add Product
        </button>
      </div>
    </div>
  );
};

export default AddProductModal;
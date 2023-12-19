//producer profile
// producer profile
import React from "react";
import styles from "./OrderHistory.module.css";

const OrderHistory = () => {
  const subHeaders = ["Facilitator", "Id", "Device", "Model", "Status", "Credits"];
  const rowData = [
    { facilitator:"ABC Company", id: "RQ01", device: "Phone", model:"Samsung A72", status: "Pending", credits:"assign"},
    { facilitator: "M&M Company", id: "RQ02", device: "TV", model:"Sony Bravia", status: "Rejected", credits:"reject" },
    { facilitator: "M&M Company", id: "RQ03", device: "Camera", model:"Nikon D3400", status: "Accepted", credits:"assign" },
    { facilitator: "M&M Company", id: "RQ04", device: "Phone", model:"Oppo V7", status: "Accepted", credits:"assign" },
  ];

  return (
    <div className={styles.profilewrap}>
      <div className={styles.profile}>
        <div>
          <div className={styles.header}>Order History</div>
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
    </div>
  );
};

export default OrderHistory;

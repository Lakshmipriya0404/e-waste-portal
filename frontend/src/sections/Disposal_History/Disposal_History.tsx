//producer profile
// producer profile
import React from "react";
import styles from "./Disposal_History.module.css";

const Disposal_History = () => {
  const subHeaders = ["Facilitator","ID", "Device", "Model","Status","Credits"];
  const rowData = [
    { facilitator: "ABC Company", id: "RQ01", device: "Phone", model:"Samsung A72", status: "Pending", credits:"50" },
    { facilitator: "M&M Company", id: "RQ02", device: "TV", model:"Sony Bravia", status: "Rejected", credits:"0" },
    { facilitator: "M&M Company", id: "RQ03", device: "Camera", model:"Nikon D3400", status: "Accepted", credits:"80" },
    { facilitator: "M&M Company", id: "RQ04", device: "Phone", model:"Oppo V7", status: "Accepted", credits:"50" },
  ];

  return (
    <div className={styles.profilewrap}>
      <div className={styles.profile}>
        <div>
          <div className={styles.header}>Your Disposal History!</div>
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

export default Disposal_History;

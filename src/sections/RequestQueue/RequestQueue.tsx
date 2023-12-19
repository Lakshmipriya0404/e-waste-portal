//producer profile
// producer profile
import React from "react";
import styles from "./RequestQueue.module.css";

const RequestQueue = () => {
  const subHeaders = ["ID", "Device", "Status"];
  const rowData = [
    { id: "RQ01", device: "Phone", status: "Pending" },
    { id: "RQ02", device: "TV", status: "Rejected" },
    { id: "RQ03", device: "Camera", status: "Accepted" },
    { id: "RQ04", device: "Phone", status: "Accepted" },
  ];

  return (
    <div className={styles.profilewrap}>
      <div className={styles.profile}>
        <div>
          <div className={styles.header}>Request Queue</div>
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

export default RequestQueue;

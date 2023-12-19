import React from "react";
interface ProgressBarProps {
  scrollPercent: number;
}
const ProgressBar: React.FC<ProgressBarProps> = ({ scrollPercent }) => {
  const progressContainerStyle: React.CSSProperties = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "8px",
    backgroundColor: "transparent",
    zIndex: "1000",
  };

  const progressBarStyle: React.CSSProperties = {
    height: "100%",
    backgroundColor: "rgba(103,148,13)",
    width: `${scrollPercent}%`,
  };

  return (
    <div style={progressContainerStyle}>
      <div style={progressBarStyle}></div>
    </div>
  );
};

export default ProgressBar;

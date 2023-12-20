import React from "react";
import "./Popup.css";
import { useNavigate } from "react-router-dom";
//import Dashboard from '../Dashboardpage/dashboard';

function Popup() {
  const info = [
    "E-waste contains toxins like lead and mercury that cause significant e-waste health issues. Yet, still, over 90% of it is disposed of improperly either by processing using dangerous techniques or dumping into landfills.",

    "Drastic and urgent actions are needed now to stop the flow of waste and stem the tide of   e-waste health issues.",

    "Exposure to the harmful chemicals from e-waste creates severe health hazards that can be fatal. The toxins enter our bodies through inhalation, ingestion of food or water, and skin absorption.",

    "When electronic waste is thrown away in landfills their toxic materials seep into groundwater, affecting both land and sea animals. This can also affect the health of the people in the developing countries where most of the electronic waste in dumped",

    "The hazards to health from electronic waste must not be underestimated. Recycling e-waste in a safe and non-harmful way can be costly, and there isn't enough capacity to cope with the mountains of waste.",
  ];

  const min = 0;
  const max = info.length;

  const i = Math.floor(Math.random() * (max - min) + min);
  const navigate = useNavigate();
  const handleCloseButtonClick = () => {
    // Navigate to the Dashboard component when the "Close" button is clicked
    navigate("/producer/dashboard");
  };
  return (
    <div className="popup-container">
      <div className="popup-body">
        <p
          style={{
            fontSize: 30 + "px",
            padding: 10 + "%",
            fontFamily: "Calibri",
          }}
        >
          {info[i]}
        </p>
        <button onClick={handleCloseButtonClick}>Close</button>
      </div>
    </div>
  );
}

export default Popup;

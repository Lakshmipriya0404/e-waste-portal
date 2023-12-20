import React from "react";
import "./Popup.css";
import { useNavigate } from "react-router-dom";
//import Dashboard from '../Dashboardpage/dashboard';

function Popup( x:string ) {

  const info = {
    "phone": [ "Many smartphones and tablets contain hazardous materials. Drop them off at designated e-waste collection points or recycle them through manufacturer programs."],
    
    "pc": ["Donate or recycle old computers. Many components, like batteries and circuit boards, can harm the environment if not disposed of properly"],
    
    "printer": ["Old printers and scanners often contain toxic materials. Recycle them through local e-waste programs to reduce environmental impact."],
    
    "play stations": ["Gaming consoles can be recycled through manufacturer programs or e-waste facilities. Don't let your old console end up in a landfill! "],
    
    "camera" : ["Dispose of old cameras and camcorders at electronic recycling facilities. Unload your memories responsibly."],
    
  };
  
  const device = "play stations"; //

  const len = info[device].length
  
  const key = Math.floor(Math.random() * (len-1));
  const content = info[device]

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
          {content[key]}
        </p>
        <button onClick={handleCloseButtonClick}>Close</button>
      </div>
    </div>
  );
}

export default Popup;

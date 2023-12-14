import React, {useState } from "react";
import styles from "./Faqs.module.css";
// import more from "../../assets/FAQPage-plus_button-removebg-preview.png";
import { useCollapse, UseCollapseProps, UseCollapseState } from 'react-collapsed';


const Faqs = () => {

  function Collapsible() {
    const [ isExpanded, setExpanded ] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded } as UseCollapseProps<UseCollapseState>);
  function handleOnClick() {
        // Do more stuff with the click event!
        // Or, set isExpanded conditionally 
        setExpanded(!isExpanded);
    }


  return (
    <div>
      <div className={styles.main_container}>
      <div>
          <h1 className={styles.title_ecoprints}>FAQ's</h1>
        </div>

        <div className="collapsible">
            <div className="header" {...getToggleProps({onClick: handleOnClick})}>
                {isExpanded ? 'Collapse' : 'Expand'}
            </div>
            <div {...getCollapseProps()}>
                <div className="content">
                    Now you can see the hidden content. <br/><br/>
                    Click again to hide...
                </div>
            </div>
        </div>
        
      </div>
    </div>
  );
}
}

export default Faqs;

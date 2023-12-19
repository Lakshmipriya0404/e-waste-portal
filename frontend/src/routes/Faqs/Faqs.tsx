import React from "react";
import styles from "./Faqs.module.css";
import more from "../../assets/FAQPage-plus_button-removebg-preview.png";

const Faqs = () => {
  return (
    <div className={styles.main}>
      <div>
        <h1 className={styles.title_ecoprints}>FAQ's</h1>
      </div>

      <div className={styles.ques_block}>
        <details className={styles.details_tab}>
          <summary className={styles.ques_tab}>
            {" "}
            <img src={more} /> &ensp;What is an e-waste facility locator, and
            how can it help me?
          </summary>
          <p className={styles.answer_tab}>
            The e-waste facility locator is a tool designed to help you find
            nearby facilities that responsibly handle electronic waste. It
            enables you to locate drop-off points or recycling centers for
            proper disposal of your electronic devices.
          </p>
        </details>
      </div>

      {/* Qusetion 2 */}
      <div className={styles.ques_block}>
        <details className={styles.details_tab}>
          <summary className={styles.ques_tab}>
            {" "}
            <img src={more} /> &ensp;What types of electronic waste can I
            dispose of using the e-waste facility locator?
          </summary>
          <p className={styles.answer_tab}>
            The locator covers a wide range of electronic devices, including old
            computers, laptops, smartphones, printers, and other electronic
            gadgets. It provides information on where to responsibly dispose of
            these items to promote environmentally friendly practices.
          </p>
        </details>
      </div>

      {/* Question 3 */}
      <div className={styles.ques_block}>
        <details className={styles.details_tab}>
          <summary className={styles.ques_tab}>
            {" "}
            <img src={more} /> &ensp;Is the information on the e-waste facility
            locator up to date?
          </summary>
          <p className={styles.answer_tab}>
            Yes, we strive to keep the information on the e-waste facility
            locator current. However, we recommend contacting the facilities
            directly or checking their websites for the latest details on
            operating hours and accepted items.
          </p>
        </details>
      </div>

      {/* Question 4 */}
      <div className={styles.ques_block}>
        <details className={styles.details_tab}>
          <summary className={styles.ques_tab}>
            {" "}
            <img src={more} /> &ensp;How do I use the e-waste facility locator
            to find a nearby facility?
          </summary>
          <p className={styles.answer_tab}>
            Using the locator is easy! Simply enter your pincode or allow the
            website to access your location, and it will display a list of
            nearby e-waste facilities. You can then select a facility to view
            more details, such as address, contact information, and accepted
            items.
          </p>
        </details>
      </div>

      {/* Question 5 */}
      <div className={styles.ques_block}>
        <details className={styles.details_tab}>
          <summary className={styles.ques_tab}>
            {" "}
            <img src={more} /> &ensp;Are there any costs associated with using
            e-waste facilities listed on the locator?
          </summary>
          <p className={styles.answer_tab}>
            Costs can vary by facility. Some offer free e-waste disposal, while
            others may charge a fee for certain items. The locator provides
            information on any associated costs, ensuring transparency in the
            disposal process.
          </p>
        </details>
      </div>

      {/* Question 6 */}
      <div className={styles.ques_block}>
        <details className={styles.details_tab}>
          <summary className={styles.ques_tab}>
            {" "}
            <img src={more} /> &ensp;Can businesses use the e-waste facility
            locator for bulk electronic waste disposal?
          </summary>
          <p className={styles.answer_tab}>
            Yes, the e-waste facility locator is a valuable resource for both
            individuals and businesses. It provides information on facilities
            equipped to handle bulk electronic waste disposal. For larger
            quantities, we recommend contacting the facilities in advance.
          </p>
        </details>
      </div>

      {/* Question 7 */}
      <div className={styles.ques_block}>
        <details className={styles.details_tab}>
          <summary className={styles.ques_tab}>
            {" "}
            <img src={more} /> &ensp;What should I do to prepare my electronic
            devices for disposal at an e-waste facility?
          </summary>
          <p className={styles.answer_tab}>
            It's advisable to erase personal data from devices and remove any
            batteries if possible. The locator may provide specific guidelines
            for preparation, so be sure to check the details for each facility.
          </p>
        </details>
      </div>

      {/* Question 8 */}
      <div className={styles.ques_block}>
        <details className={styles.details_tab}>
          <summary className={styles.ques_tab}>
            {" "}
            <img src={more} /> &ensp;Do e-waste facilities listed on the locator
            follow environmentally friendly practices?
          </summary>
          <p className={styles.answer_tab}>
            Yes, the facilities listed on the e-waste facility locator are
            selected based on their commitment to environmentally responsible
            practices. They adhere to regulations and standards for safe and
            sustainable disposal of electronic waste.
          </p>
        </details>
      </div>

      {/* Question 9 */}
      <div className={styles.ques_block}>
        <details className={styles.details_tab}>
          <summary className={styles.ques_tab}>
            {" "}
            <img src={more} /> &ensp;Can I schedule a pickup for my electronic
            waste through the e-waste facility locator?
          </summary>
          <p className={styles.answer_tab}>
            Pickup services may vary by facility. Some e-waste facilities offer
            pickup services for certain items, while others may require
            drop-off. Check the details for each facility on the locator or
            contact them directly for specific information on pickup services.
          </p>
        </details>
      </div>

      {/* Question 10 */}
      <div className={styles.ques_block}>
        <details className={styles.details_tab}>
          <summary className={styles.ques_tab}>
            {" "}
            <img src={more} /> &ensp;How can I contribute to promoting
            responsible e-waste disposal in my community?
          </summary>
          <p className={styles.answer_tab}>
            You can help by spreading awareness about the e-waste facility
            locator, encouraging others to use responsible disposal methods, and
            participating in community e-waste collection events. Additionally,
            consider educating others on the importance of recycling electronic
            devices to reduce environmental impact.
          </p>
        </details>
      </div>

      {/* Question 11 */}
      <div className={styles.ques_block}>
        <details className={styles.details_tab}>
          <summary className={styles.ques_tab}>
            {" "}
            <img src={more} /> &ensp;How do I earn credit points for the
            precious metal content in my e-waste?
          </summary>
          <p className={styles.answer_tab}>
            You can earn credit points by responsibly disposing of your
            electronic waste through our platform. The credit points are awarded
            based on the precious metal content in the items you recycle.
          </p>
        </details>
      </div>

      {/* Question 12 */}
      <div className={styles.ques_block}>
        <details className={styles.details_tab}>
          <summary className={styles.ques_tab}>
            {" "}
            <img src={more} /> &ensp;Can I redeem my credit points for cash or
            other rewards?
          </summary>
          <p className={styles.answer_tab}>
            Typically, credit points earned through the precious metal content
            feature are redeemable for specific rewards or discounts offered by
            our platform. Check the redemption options available on the website
            for more details.
          </p>
        </details>
      </div>

      <div className={styles.text_container}>
          <div className={styles.text}>
            <p className={styles.know_more}>Want to know more?</p>
          </div>
          <div >
            <button className={styles.knowmore_button}>Contact Us</button>
          </div>
        </div>



    </div>
  );
};

export default Faqs;

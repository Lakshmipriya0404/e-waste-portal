import React from "react";
import styles from "./Signup.module.css";

const Signup = () => {
  return (
    <div className={styles.cardswrap}>
      <div className={styles.signupwrap}>
        <div className={styles.signupheader}>
          SIGN UP <br />
          TELL US WHO YOU ARE
        </div>
        <div className={styles.cardcontainer}>
          <div className={styles.cardproducer}>
            <img src="" alt="" />
            <div className={styles.text}>PRODUCER</div>
          </div>
          <div className={styles.cardconsumer}>
            <img src="" alt="" />
            <div className={styles.text}>CONSUMER</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

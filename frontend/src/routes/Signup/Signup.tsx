import React from "react";
import styles from "./Signup.module.css";
import prod from "../../assets/SignUpPage-Producer_Logo.png";

const Signup = () => {
  return (
    <div className={styles.cardswrap}>
      <div className={styles.signupwrap}>
        <div className={styles.signupheader}>
          SIGN UP <br />
          TELL US WHO YOU ARE
        </div>
        <div className={styles.cardcontainer}>
          <a className={styles.cardproducer} href="/producer/signup">
            <img src={prod} />
            <div className={styles.text}>PRODUCER</div>
          </a>
          <a className={styles.cardconsumer} href="/consumer/signup">
            <img src={prod} />
            <div className={styles.text}>CONSUMER</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;

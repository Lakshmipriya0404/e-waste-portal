import React from "react";
import styles from "./Producer_Signup.module.css";

const Producer_Signup = () => {
  return (
    <section className={styles.home}>
      <div className={styles.logincontainer}>
        <div className={styles.loginwrap}>
          <div className={styles.loginheader}>PRODUCER &nbsp; SIGN &nbsp; UP</div>
          <div className={styles.formwrap}>
            <form action="" className={styles.login_form}>
              <div className={styles.radiobtn}>
                <label className={styles.radiolabel}>Category:</label>
                <div className={styles.input_fields}>
                  <input type="radio" id="producer" name="userType" />
                  <label className={styles.radiolabel} htmlFor="induvidual">Induvidual</label>
                </div>
                <div className={styles.input_fields}>
                  <input type="radio" id="consumer" name="userType" />
                  <label className={styles.radiolabel} htmlFor="organization">Organization</label>
                </div>
              </div>
              <div className={styles.input_fields}>
              <label>Name</label>
                <input
                  type="text"
                  id="name"
                  className={styles.input_text}
                  name="name"
                  placeholder="Name"
                />
              </div>
              <div className={styles.input_fields}>
                <label>E-Mail</label>
                <input
                  type="text"
                  id="email"
                  className={styles.input_text}
                  name="email"
                  placeholder="E-mail"
                />
              </div>

              <div className={styles.input_fields}>
              <label>Phone Number</label>
                <input
                  type="number"
                  id="phno"
                  className={styles.input_text}
                  name="phno"
                  placeholder="Mobile Number"
                />
              </div>

              <div className={styles.input_fields}>
              <label>Address</label>
                <input
                  type="text"
                  id="addr"
                  className={styles.input_text}
                  name="addr"
                  placeholder="Address"
                />
              </div>

              <div className={styles.input_fields}>
              <label>Password</label>
                <input
                  type="password"
                  className={styles.input_text}
                  id="password"
                  name="password"
                  placeholder="Password"
                />
              </div>

              <div className={styles.input_fields}>
              <label>Confirm Password</label>
                <input
                  type="password"
                  className={styles.input_text}
                  id="password"
                  name="password"
                  placeholder="Confirm Password"
                />
              </div>

            <div className={styles.signup_button}>
              <button type="submit">Signup</button>
            </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Producer_Signup;

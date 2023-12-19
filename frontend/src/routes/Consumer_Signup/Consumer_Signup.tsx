import React from "react";
import styles from "./Consumer_Signup.module.css";

const Consumer_Signup = () => {
  return (
    <section className={styles.home}>
      <div className={styles.logincontainer}>
        <div className={styles.loginwrap}>
          <div className={styles.loginheader}>CONSUMER  &nbsp; SIGN &nbsp; UP</div>
          <div className={styles.formwrap}>
            <form action="" className={styles.login_form}>
              <div className={styles.radiobtn}>
                <label className={styles.radiolabel}>Category:</label>
                <div className={styles.radio_input_fields}>
                  <input type="radio" id="producer" name="userType" />
                  <label className={styles.radiolabel} htmlFor="recycler">Recycler</label>
                </div>
                <div className={styles.radio_input_fields}>
                  <input type="radio" id="consumer" name="userType" />
                  <label className={styles.radiolabel} htmlFor="collector">Collector</label>
                </div>
                <div className={styles.radio_input_fields}>
                  <input type="radio" id="consumer" name="userType" />
                  <label className={styles.radiolabel} htmlFor="induvidual">Induvidual</label>
                </div>
              </div>
              <div className={styles.input_fields}>
              <label>Company Name</label>
                <input
                  type="text"
                  id="name"
                  className={styles.input_text}
                  name="name"
                  placeholder="Name"
                />
              </div>
              <div className={styles.input_fields}>
                <label>EPR Id</label>
                <input
                  type="text"
                  id="eprid"
                  className={styles.input_text}
                  name="eprid"
                  placeholder="EPR Id"
                />
              </div>

              <div className={styles.input_fields}>
              <label>Contact Number</label>
                <input
                  type="number"
                  id="phno"
                  className={styles.input_text}
                  name="phno"
                  placeholder="Contact Number"
                />
              </div>

              <div className={styles.input_fields}>
                <label>E-Mail Id</label>
                <input
                  type="email"
                  id="email"
                  className={styles.input_text}
                  name="email"
                  placeholder="E-mail"
                />
              </div>

              <div className={styles.input_fields}>
              <label>Location</label>
                <input
                  type="text"
                  id="addr"
                  className={styles.input_text}
                  name="addr"
                  placeholder="Address"
                />
              </div>

              <div className={styles.input_fields}>
              <label>G-Map Link</label>
                <input
                  type="text"
                  id="link"
                  className={styles.input_text}
                  name="link"
                  placeholder="Google Map Link"
                />
              </div>

              <div className={styles.input_fields}>
              <label className={styles.ophours}>Operating Hours</label>
                <input
                  type="text"
                  id="from"
                  className={styles.input_text}
                  name="from"
                  placeholder="from"
                />
                <label> to </label>
                <input
                  type="text"
                  id="to"
                  className={styles.input_text}
                  name="to"
                  placeholder="to"
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

              <div className={styles.input_fields}>
              <label>Website</label>
                <input
                  type="text"
                  id="web"
                  className={styles.input_text}
                  name="web"
                  placeholder="Website Link"
                />
              </div>

              <div className={styles.radiobtn}>
                <label className={styles.radiolabel_doorstep}>Doorstep Collection? </label>
                <div className={styles.radio_input_fields}>
                  <input type="radio" id="producer" name="userType" />
                  <label className={styles.radiolabel} htmlFor="yes">Yes</label>
                </div>
                <div className={styles.radio_input_fields}>
                  <input type="radio" id="consumer" name="userType" />
                  <label className={styles.radiolabel} htmlFor="no">No</label>
                </div>
              </div>

            <div className={styles.signup_button}>
              <button type="submit">Sign Up</button>
            </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consumer_Signup;

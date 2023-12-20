import React, { useState } from "react";
import styles from "./Producer_Signup.module.css";
import { ProducerSignUp } from "../../api";
export interface FormDataProps {
  pname: string;
  category: string;
  email: string;
  pass_hash: string;
  phone: string;
  address: string;
  state: string;
  pincode: string;
}
const Producer_Signup = () => {
  const [formData, setFormData] = useState({
    pname: "",
    category: "",
    email: "",
    pass_hash: "",
    phone: "",
    address: "",
    state: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    ProducerSignUp(formData);
  };

  return (
    <section className={styles.home}>
      <div className={styles.logincontainer}>
        <div className={styles.loginwrap}>
          <div className={styles.loginheader}>
            PRODUCER &nbsp; SIGN &nbsp; UP
          </div>
          <div className={styles.formwrap}>
            <form onSubmit={handleSubmit} className={styles.login_form}>
              <div className={styles.radiobtn}>
                <label className={styles.radiolabel}>Category:</label>
                <div className={styles.input_fields}>
                  <input
                    type="radio"
                    id="producer"
                    name="category"
                    value="Individual"
                    onChange={handleChange}
                  />
                  <label className={styles.radiolabel} htmlFor="individual">
                    Individual
                  </label>
                </div>
                <div className={styles.input_fields}>
                  <input
                    type="radio"
                    id="consumer"
                    name="category"
                    value="Organization"
                    onChange={handleChange}
                  />
                  <label className={styles.radiolabel} htmlFor="organization">
                    Organization
                  </label>
                </div>
              </div>
              <div className={styles.input_fields}>
                <label>Name</label>
                <input
                  type="text"
                  id="pname"
                  className={styles.input_text}
                  name="pname"
                  placeholder="Name"
                  onChange={handleChange}
                  required
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
                  required
                  onChange={handleChange}
                />
              </div>

              <div className={styles.input_fields}>
                <label>Phone Number</label>
                <input
                  type="number"
                  id="phone"
                  className={styles.input_text}
                  name="phone"
                  placeholder="Mobile Number"
                  required
                  onChange={handleChange}
                />
              </div>

              <div className={styles.input_fields}>
                <label>Address</label>
                <input
                  type="text"
                  id="address"
                  className={styles.input_text}
                  name="address"
                  placeholder="Address"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className={styles.input_fields}>
                <label>State</label>
                <input
                  type="text"
                  id="state"
                  className={styles.input_text}
                  name="state"
                  placeholder="State"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className={styles.input_fields}>
                <label>Pincode</label>
                <input
                  type="text"
                  id="pincode"
                  className={styles.input_text}
                  name="pincode"
                  placeholder="Pincode"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className={styles.input_fields}>
                <label>Password</label>
                <input
                  type="password"
                  className={styles.input_text}
                  id="pass_hash"
                  name="pass_hash"
                  placeholder="Password"
                  required
                  onChange={handleChange}
                />
              </div>

              <div className={styles.input_fields}>
                <label>Confirm Password</label>
                <input
                  type="password"
                  className={styles.input_text}
                  id="pass_hash"
                  name="pass_hash"
                  placeholder="Confirm Password"
                  required
                  onChange={handleChange}
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

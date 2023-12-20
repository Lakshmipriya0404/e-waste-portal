import React from "react";
import styles from "./Login.module.css";
const Login = () => {
  return (
    <section className={styles.home}>
      <div className={styles.logincontainer}>
        <div className={styles.loginwrap}>
          <div className={styles.loginheader}>LOGIN</div>
          <div className={styles.formwrap}>
            <form action="" className={styles.login_form}>
              <div className={styles.radiobtn}>
                <div className={styles.input_fields}>
                  <input type="radio" id="producer" name="userType" />
                  <label htmlFor="producer">Producer</label>
                </div>
              </div>
              <div className={styles.input_fields}>
                <input type="radio" id="consumer" name="userType" />
                <label htmlFor="consumer">Consumer</label>
              </div>
              <div className={styles.input_fields}>
                <input
                  type="text"
                  id="email"
                  className={styles.input_text}
                  name="email"
                  placeholder="E-mail/ Mobile Number"
                />
              </div>
              <div className={styles.input_fields}>
                <input
                  type="password"
                  className={styles.input_text}
                  id="password"
                  name="password"
                  placeholder="Password"
                />
              </div>
              <div className={styles.input_fields} id="rememberMe">
                <input
                  className={styles.input_rememberMe}
                  type="checkbox"
                  id="remember"
                  name="remember"
                />
                <label htmlFor="remember">Remember me?</label>
              </div>
              <button type="submit">Login</button>
              <a href="">Forgot Password?</a>
              <a href="">New to our portal? Sign Up</a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

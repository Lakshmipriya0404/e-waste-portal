import React from "react";
import styles from "./Login.module.css";
const Login = () => {
  return (
    <div className={styles.logincontainer}>
      <div className={styles.loginwrap}>
        <div className={styles.loginheader}>LOGIN</div>
        <div className={styles.formwrap}>
          <form action="">
            <div className={styles.radiobtn}>
              <div>
                <input type="radio" id="producer" name="userType" />
                <label htmlFor="producer">Producer</label>
              </div>
              <div>
                <input type="radio" id="consumer" name="userType" />
                <label htmlFor="consumer">Consumer</label>
              </div>
            </div>
            <div>
              <label htmlFor="email">E-mail/ Mobile Number</label>
              <input type="text" id="email" name="email" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" />
            </div>
            <div>
              <input type="checkbox" id="remember" name="remember" />
              <label htmlFor="remember">Remember me?</label>
            </div>
            <button type="submit">Login</button>
            <a href="">Forgot Password?</a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

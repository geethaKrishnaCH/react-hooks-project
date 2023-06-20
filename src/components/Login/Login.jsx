import { useState } from "react";
import Card from "../UI/Card/Card";
import styles from "./Login.module.css";
import Button from "../UI/Button/Button";
function Login({ onLogin }) {
  const [user, setUser] = useState({ email: "", password: "" });
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState();
  const [passwordIsValid, setPasswordIsValid] = useState();

  function validateEmail(email) {
    const emailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return emailFormat.test(email);
  }

  function handleEmailChange(event) {
    setUser((prev) => {
      return { ...prev, email: event.target.value };
    });
    // validateEmailHandler();
    setFormIsValid(
      validateEmail(event.target.value) && user.password.trim().length > 6
    );
  }

  function handlePasswordChange(event) {
    setUser((prev) => {
      return { ...prev, password: event.target.value };
    });
    // validatePasswordHandler();
    setFormIsValid(
      event.target.value.trim().length > 6 && validateEmail(user.email)
    );
  }

  const validateEmailHandler = () => {
    setEmailIsValid(validateEmail(user.email));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(user.password.trim().length > 6);
  };

  return (
    <Card cssClasses={styles["form-container"]}>
      <form className={styles["form-control"]}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          className={emailIsValid === false ? styles.invalid : ""}
          onChange={handleEmailChange}
          value={user.email}
          onBlur={validateEmailHandler}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          className={passwordIsValid === false ? styles.invalid : ""}
          onChange={handlePasswordChange}
          value={user.password}
          onBlur={validatePasswordHandler}
        />
        <Button onClick={onLogin} disabled={!formIsValid}>
          Login
        </Button>
      </form>
    </Card>
  );
}

export default Login;

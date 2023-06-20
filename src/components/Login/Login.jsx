import { useState } from "react";
import Card from "../UI/Card/Card";
import styles from "./Login.module.css";
import Button from "../UI/Button/Button";
function Login({ onLogin }) {
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const [user, setUser] = useState({ email: "", password: "" });
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState();
  const [passwordIsValid, setPasswordIsValid] = useState();

  function handleEmailChange(event) {
    setUser({ ...user, email: event.target.value });
    setFormIsValid(
      event.target.value.match(mailformat) && user.password.trim().length > 6
    );
  }

  function handlePasswordChange(event) {
    setUser({ ...user, password: event.target.value });
    setFormIsValid(
      event.target.value.trim().length > 6 && user.email.match(mailformat)
    );
  }

  const validateEmailHandler = () => {
    setEmailIsValid(user.email.match(mailformat));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(user.password.trim().length > 6);
  };

  console.log(emailIsValid === false, passwordIsValid);

  return (
    <Card cssClasses={styles["form-container"]}>
      <form className={styles["form-control"]}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          className={emailIsValid === true ? "" : styles.invalid}
          onChange={handleEmailChange}
          value={user.email}
          onBlur={validateEmailHandler}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          className={passwordIsValid === true ? "" : styles.invalid}
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

import { useState } from "react";
import Card from "../UI/Card/Card";
import styles from "./Login.module.css";
import Button from "../UI/Button/Button";
function Login({ onLogin }) {
  const [user, setUser] = useState({ email: "", password: "" });
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);


  function handleEmailChange(event) {
    setUser({ ...user, email: event.target.value });
    setFormIsValid(
      event.target.value.includes('@') && enteredPassword.trim().length > 6
    );
  }

  function handlePasswordChange(event) {
    setUser({ ...user, password: event.target.value });
    setFormIsValid(
      event.target.value.trim().length > 6 && enteredEmail.includes('@')
    );
  }

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  return (
    <Card cssClasses={styles["form-container"]}>
      <form className={styles["form-control"]}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          onChange={handleEmailChange}
          value={user.email}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          onChange={handlePasswordChange}
          value={user.password}
        />
        <Button onClick={onLogin} disabled={!formIsValid}>
          Login
        </Button>
      </form>
    </Card>
  );
}

export default Login;

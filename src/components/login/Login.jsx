import { useEffect, useReducer, useState } from "react";
import Card from "../ui/card/Card";
import styles from "./Login.module.css";
import Button from "../ui/button/Button";

function emailReducer(prevState, action) {
  switch (action.type) {
    case "INPUT":
      return { value: action.value, isValid: validateEmail(action.value) };
    case "VALIDATION":
      return { ...prevState, isValid: validateEmail(prevState.value) };

    default:
      return prevState;
  }
}

function passwordReducer(prevState, action) {
  switch (action.type) {
    case "INPUT":
      return { value: action.value, isValid: action.value.trim().length > 6 };
    case "VALIDATION":
      return { ...prevState, isValid: prevState.value.trim().length > 6 };

    default:
      return prevState;
  }
}

function validateEmail(email) {
  const emailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*\.\w{2,3}$/;
  return emailFormat.test(email);
}

function Login({ onLogin }) {
  const [emailState, emailDispatcher] = useReducer(emailReducer, {
    value: "",
    isValid: undefined,
  });
  const [passwordState, passwordDispatcher] = useReducer(passwordReducer, {
    value: "",
    isValid: undefined,
  });
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("inside useEffect");
      setFormIsValid(emailState.isValid && passwordState.isValid);
    }, 200);
    return () => {
      console.log("timeout cleared");
      clearTimeout(timeout);
    };
  }, [emailState.isValid, passwordState.isValid]);

  function handleEmailChange(event) {
    emailDispatcher({ type: "INPUT", value: event.target.value });
  }

  function handlePasswordChange(event) {
    passwordDispatcher({ type: "INPUT", value: event.target.value });
  }

  const validateEmailHandler = () => {
    emailDispatcher({ type: "VALIDATION" });
  };

  const validatePasswordHandler = () => {
    passwordDispatcher({ type: "VALIDATION" });
  };

  return (
    <Card cssClasses={styles["form-container"]}>
      <form className={styles["form-control"]}>
        <h4 className="text-center">Plese Login!</h4>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          placeholder="email"
          className={emailState.isValid === false ? styles.invalid : ""}
          onChange={handleEmailChange}
          value={emailState.value}
          onBlur={validateEmailHandler}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="password"
          className={passwordState.isValid === false ? styles.invalid : ""}
          onChange={handlePasswordChange}
          value={passwordState.value}
          onBlur={validatePasswordHandler}
        />
        <Button onClick={onLogin} disabled={!formIsValid} block={true}>
          Login
        </Button>
      </form>
    </Card>
  );
}

export default Login;

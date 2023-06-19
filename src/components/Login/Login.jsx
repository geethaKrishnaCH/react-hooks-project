import { useState } from "react";
import Card from "../UI/Card/Card";
import styles from "./Login.module.css";
import Button from "../UI/Button/Button";
function Login(props) {
  const [user, setUser] = useState({ email: "", password: "" });
  function handleEmailChange(event) {
    setUser({ ...user, email: event.target.value });
  }

  function handlePasswordChange(event) {
    setUser({ ...user, password: event.target.value });
  }
  return (
    <Card>
      <form>
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
        <Button>Login</Button>
      </form>
    </Card>
  );
}

export default Login;

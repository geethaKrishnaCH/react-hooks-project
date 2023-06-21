import { Fragment } from "react";
import styles from "./MainContent.module.css";
import Login from "../login/Login";
import Home from "../home/Home";
function MainContent({ isLoggedIn, onLogin }) {
  return (
    <Fragment>
      {!isLoggedIn && <Login onLogin={onLogin} />}
      {isLoggedIn && <Home />}
    </Fragment>
  );
}

export default MainContent;

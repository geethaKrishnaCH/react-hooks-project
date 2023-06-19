import { Fragment } from "react";
import styles from "./MainContent.module.css";
import Login from "../Login/Login";
import Home from "../Home/Home";
function MainContent({ isLoggedIn, onLogin }) {
  return (
    <Fragment>
      {!isLoggedIn && <Login onLogin={onLogin} />}
      {isLoggedIn && <Home />}
    </Fragment>
  );
}

export default MainContent;

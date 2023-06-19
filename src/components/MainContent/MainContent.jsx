import { Fragment } from "react";
import styles from "./MainContent.module.css";
import Login from "../Login/Login";
import Home from "../Home/Home";
function MainContent({ isLoggedIn }) {
  return (
    <Fragment>
      {!isLoggedIn && <Login />}
      {isLoggedIn && <Home />}
    </Fragment>
  );
}

export default MainContent;

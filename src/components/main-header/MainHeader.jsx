import styles from "./MainHeader.module.css";
import Navigation from "./Navigation";

function MainHeader(props) {
  return (
    <div className={styles.header}>
      <h2>A Typical Page</h2>
      <Navigation isLoggedIn={props.isLoggedIn} onLogout={props.onLogout} />
    </div>
  );
}

export default MainHeader;

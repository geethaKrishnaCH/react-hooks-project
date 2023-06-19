import Button from "../UI/Button/Button";
import styles from "./Navigation.module.css";

function Navigation({ isLoggedIn, onLogout }) {
  if (!isLoggedIn) {
    return;
  }
  return (
    <div>
      <ul>
        <li>Users</li>
        <li>Admin</li>
        <li>
          <Button onClick={onLogout}>Logout</Button>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;

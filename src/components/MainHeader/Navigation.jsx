import Button from "../UI/Button/Button";
import styles from "./Navigation.module.css";

function Navigation({ isLoggedIn, onLogout }) {
  return (
    <div>
      <ul>
        {isLoggedIn && <li>Users</li>}
        {isLoggedIn && <li>Admin</li>}
        {isLoggedIn && (
          <li>
            <Button onClick={onLogout}>Logout</Button>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Navigation;

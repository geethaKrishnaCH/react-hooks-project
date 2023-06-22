import Nav from "react-bootstrap/Nav";
import Button from "../ui/button/Button";

function Navigation({ isLoggedIn, onLogout }) {
  if (!isLoggedIn) {
    return;
  }
  return (
    <>
      <Nav className="me-auto">
        <Nav.Link>Home</Nav.Link>
        <Nav.Link>Admin</Nav.Link>
      </Nav>
      <Button color="primary" size={"lg"} onClick={onLogout}>
        Logout
      </Button>
    </>
  );
}

export default Navigation;

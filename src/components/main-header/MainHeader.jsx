import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Navigation from "./Navigation";

function MainHeader(props) {
  return (
    <Navbar expand="lg" sticky="top" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand>A Typical Page</Navbar.Brand>
        {props.isLoggedIn && <Navbar.Toggle aria-controls="navbar-nav" />}
        <Navbar.Collapse id="navbar-nav">
          <Navigation isLoggedIn={props.isLoggedIn} onLogout={props.onLogout} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainHeader;

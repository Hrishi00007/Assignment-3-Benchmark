import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigator = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogOut = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isAuthenticated");
    navigator("/logout");
  };
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className="navbar">
        <Container>
          <Navbar.Brand href="/"></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/login">
              Login
            </Nav.Link>
          </Nav>
          {isLoggedIn && <Button onClick={handleLogOut}>LogOut</Button>}
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;

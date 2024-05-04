import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar.jsx";

const Login = () => {
  const navigator = useNavigate();
  const [authData, setAuthData] = useState({ email: "", password: "" });
  const [isChanged, setIsChanged] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAuthData((prevAuthData) => ({
      ...prevAuthData,
      [name]: value,
    }));
    setIsChanged(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");
    if (
      storedEmail === authData.email &&
      storedPassword === authData.password
    ) {
      localStorage.setItem("isAuthenticated", "authenticated");
      navigator("/users");
      setIsLoggedIn(true);
    } else {
      navigator("/register");
    }
  };

  return (
    <>
      <NavBar onClick={handleLogOut} isLoggedIn={isLoggedIn} />
      <Form>
        <Form.Group className="mb-3 --bs-black" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={authData.email}
            onChange={(e) => handleInputChange(e)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={authData.password}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </>
  );
};
export default Login;

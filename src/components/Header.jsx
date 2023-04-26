import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <div>
      <Navbar>
        <Container>
          <Link to="/">
            <Navbar.Brand
              className={
                location.pathname === "/"
                  ? "btn btn-success"
                  : "btn btn-dark text-light"
              }
            >
              Home
            </Navbar.Brand>
          </Link>
          <Link to="/AddBlog">
            <Navbar.Brand
              className={
                location.pathname === "/AddBlog"
                  ? "btn btn-success"
                  : "btn btn-dark text-light"
              }
            >
              Add Blog
            </Navbar.Brand>
          </Link>
          <Link to="/CardBlog">
            <Navbar.Brand
              className={
                location.pathname === "/CardBlog"
                  ? "btn btn-success"
                  : "btn btn-dark text-light"
              }
            >
              CardBlog
            </Navbar.Brand>
          </Link>
          <Link to="/Contact">
            <Navbar.Brand
              className={
                location.pathname === "/Contact"
                  ? "btn btn-success"
                  : "btn btn-dark text-light"
              }
            >
              Contact
            </Navbar.Brand>
          </Link>
          <Link to="/Favorites">
            <Navbar.Brand
              className={
                location.pathname === "/Favorites"
                  ? "btn btn-success"
                  : "btn btn-dark text-light"
              }
            >
              Favorites
            </Navbar.Brand>
          </Link>
          <Link to="/AboutUs">
            <Navbar.Brand
              className={
                location.pathname === "/AboutUs"
                  ? "btn btn-success"
                  : "btn btn-dark text-light"
              }
            >
              AboutUs
            </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logoApp from "../accsets/logo.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [fix, setFix] = useState(false);

  const setFixed = () => {
    if (window.scrollY >= 100) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  window.addEventListener("scroll", setFixed);

  const animatedScroll = (targetID) => {
    const target = document.querySelector(targetID);
    if (target) {
      const headerOffset = 50; // Adjust this value to account for any fixed headers or navigation bars
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition - headerOffset;
      const startPosition = window.scrollY;
      const duration = 1000; // Animation duration in milliseconds
      const startTime = performance.now();

      const scroll = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const ease = easeOutCubic(progress);
        window.scrollTo(0, startPosition + offsetPosition * ease);
        if (elapsedTime < duration) {
          requestAnimationFrame(scroll);
        }
      };

      const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

      requestAnimationFrame(scroll);
    }
  };

  return (
    <>
      <Navbar
        expand="lg"
        className={fix ? "bg-body-tertiary fixed-scroll" : "bg-body-tertiary"}
        fixed="top"
      >
        <Container className="container_header">
          <Navbar.Brand>
            <NavLink to="/" className="nav-link logo_app">
              <img
                src={logoApp}
                className="d-inline-block align-top"
                alt="Sai Gon Credit Logo"
              />
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink
                to="#home"
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  animatedScroll("#home");
                }}
              >
                Home
              </NavLink>
              <NavLink
                to="#phi-rut-tien"
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  animatedScroll("#phi-rut-tien");
                }}
              >
                Phí rút tiền
              </NavLink>
              <NavLink
                to="#quyen-loi"
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  animatedScroll("#quyen-loi");
                }}
              >
                Quyền lợi
              </NavLink>
              <NavLink
                to="#bao-mat"
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  animatedScroll("#bao-mat");
                }}
              >
                Bảo mật
              </NavLink>
              <NavLink
                to="#chi-nhanh"
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  animatedScroll("#chi-nhanh");
                }}
              >
                Mạng lưới chi nhánh
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;

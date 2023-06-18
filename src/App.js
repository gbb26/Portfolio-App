import React, { Fragment, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import { Container, Nav, Navbar } from "react-bootstrap";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import Loader from "./components/loader/Loader";
import user from "./components/Logos/logoIcon.png";

const App = () => {
  const [expanded, setExpanded] = useState(false);
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setFlag(true);
    }, 2000);
  }, []);
  return (
    <Fragment>
      {!flag ? (
        <Loader />
      ) : (
        <Fragment>
          <Navbar className="navbar" expand="lg">
            <Container fluid>
              <Navbar.Brand href="#home">
                <img
                  src={user}
                  width="40"
                  height="40"
                  className="d-inline-block align-top"
                  alt="logo"
                />
              </Navbar.Brand>
              <Navbar.Toggle
                className="toggle"
                aria-controls="basic-navbar-nav"
                onClick={() => {
                  setExpanded(!expanded);
                }}
              >
                {!expanded ? (
                  <HiOutlineMenuAlt3 size={50} color="#fff" />
                ) : (
                  <RxCross1 size={50} color="#fff" />
                )}
              </Navbar.Toggle>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-auto">
                  <Nav.Link className="nav-link" href="#home">
                    Home
                  </Nav.Link>
                  <Nav.Link className="nav-link" href="#about">
                    About
                  </Nav.Link>
                  <Nav.Link className="nav-link" href="#skills">
                    Skills
                  </Nav.Link>
                  <Nav.Link className="nav-link" href="#projects">
                    Projects
                  </Nav.Link>
                  <Nav.Link className="nav-link" href="#contact">
                    Contact Us
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <header id="home" className="animate__animated animate__backInUp">
            <Header />
          </header>
          <article id="about" className="animate__animated animate__backInUp">
            <About />
          </article>
          <section id="skills" className="animate__animated animate__backInUp">
            <Skills />
          </section>
          <section
            id="projects"
            className="animate__animated animate__backInUp"
          >
            <Projects />
          </section>
          <footer id="contact" className="animate__animated animate__backInUp">
            <Contact />
          </footer>
        </Fragment>
      )}
    </Fragment>
  );
};

export default App;

import { Navbar, Nav, Container } from "react-bootstrap";
import classes from "./TheHeader.module.scss";

const TheHeader: React.FC = () => {
  return (
    <Navbar expand="md" className={classes.TheHeader}>
      <Container className={classes.TheHeader__container}>
        <Navbar.Brand className={classes.titlelink} href="#home">
          Welcome to the our web-site
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className={classes.collapse}
        >
          <Nav>
            <Nav.Link className={classes.navlink} href="#home">
              Home
            </Nav.Link>
            <Nav.Link className={classes.navlink} href="#aboutus">
              About Us
            </Nav.Link>
            <Nav.Link className={classes.navlink} href="#contactus">
              Contact Us
            </Nav.Link>
            <Nav.Link className={classes.navlink} href="#signin">
              Sign In
            </Nav.Link>
            <Nav.Link className={classes.navlink} href="#signup">
              Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default TheHeader;

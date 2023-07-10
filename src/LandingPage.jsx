import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-scroll";

function LandingPage() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"  style={{width:"80em",display:"flex", justifyContent:"center"}}>
            <Nav.Link href="#home">
              <Link to="Home" smooth={true} duration={500} offset={-30}>
              Home
               
               </Link>
              </Nav.Link>
            <Nav.Link>
              <Link to="About" smooth={true} duration={500} offset={-30}>
               About
               </Link>
             </Nav.Link>
             <Nav.Link>
             <Link to="Resume" smooth={true} duration={500} offset={-2}>
               Resume
             </Link>
           </Nav.Link>
           <Nav.Link>
             <Link to="Portfolio" smooth={true} duration={500} offset={30}>
               Portfolio
             </Link>
          </Nav.Link>
           <Nav.Link>
             <Link to="Contact" smooth={true} duration={500} offset={930}>
               Contact
            </Link>
         </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default LandingPage;



import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {

    return (
      <Navbar bg="info" variant="light" style={{ height: "40px" }}>
        <Container>
          <Navbar.Brand href="/home" style={{ margin: "-40px" }}>
            <strong>Gamer Reviewer</strong>
          </Navbar.Brand>
        </Container>
      </Navbar>
    );
};

export default NavBar;

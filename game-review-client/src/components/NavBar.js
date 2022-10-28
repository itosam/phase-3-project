
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useHistory } from "react-router-dom";

const NavBar = ({ handleLogout }) => {
  const navigate = useHistory();

  return (
    <Navbar bg="info" variant="light" style={{ height: "40px" }}>
      <Container>
        {/* <Navbar.Brand href="/home" style={{ margin: "" }}>
          <strong>Gamer Reviewer</strong>
        </Navbar.Brand> */}
        <label onClick={() => navigate.push('/home')}>Home</label>
        <label onClick={() => navigate.push('/accountInfo')}>Account</label>
        <label onClick={handleLogout}>Log out</label>
      </Container>
    </Navbar>
  );
};

export default NavBar;

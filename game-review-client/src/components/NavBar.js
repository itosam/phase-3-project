
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useHistory } from "react-router-dom";
import { GiConsoleController } from "react-icons/gi";

const NavBar = ({ handleLogout }) => {
  const navigate = useHistory();

  return (
    <Navbar bg="info" variant="light" style={{ height: "40px" }}>
      <Container>
        {/* <Navbar.Brand href="/home" style={{ margin: "" }}>
          <strong>Gamer Reviewer</strong>
        </Navbar.Brand> */}
        <label onClick={() => navigate.push("/home")}>
          <GiConsoleController />
          <strong>Home</strong>
        </label>
        <label onClick={() => navigate.push("/accountInfo")}><strong>Account</strong></label>
        <label onClick={handleLogout}><strong>Log out</strong></label>
      </Container>
    </Navbar>
  );
};

export default NavBar;

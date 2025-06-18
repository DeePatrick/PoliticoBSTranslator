import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useDictionary } from "../../hooks/DictionaryHook";
import { useCurrentUser } from "../../hooks/CurrentUserHook";
import AscomLogo from "../../assets/ascom-logo.svg";

function NavBar(): JSX.Element {
  const currentUser = useCurrentUser(),
    getDictionaryKey = useDictionary();

  return (
    <Navbar className="ascom-bg-primary padding-0" data-bs-theme="light">
      <Container fluid className="header-project">
        <Navbar.Brand as={Link} to="/">
          <b className="project-title">{getDictionaryKey("navbar_title")}</b>
        </Navbar.Brand>
        <div className="divider-vertical"></div>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <img src={AscomLogo} alt="Ascom" height={14} />
          </Navbar.Text>
          <div className="divider-vertical"></div>
          <Navbar.Text>
            {currentUser && (
              <span className="text-black">{currentUser.fullName}</span>
            )}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

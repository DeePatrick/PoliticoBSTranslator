import { LinkContainer } from "react-router-bootstrap";
import "./nav-title.css";
import { useAppSelector } from "../../hooks/ReduxHooks";
import IconDashboard from "./img/icon-dashboard.png";

interface NavTitleProps {
  isDashboard?: boolean;
}

function NavTitle(props: NavTitleProps) {
  const isDashboard = props.isDashboard || false;

  const { fileContent } = useAppSelector((state) => state.fileInput);

  const title = fileContent?.Project.Name;

  return (
    <div>
      <nav className="navbar title-navbar padding-5">
        <div className="container-fluid">
          {!isDashboard ? (
            <LinkContainer to="/dashboard">
              <button className="btn icon-dashboard" title="Dashboard">
                <img src={IconDashboard} />
              </button>
            </LinkContainer>
          ) : (
            "\u00A0"
          )}
          <div
            id="navbarNav"
            className={
              !isDashboard ? `title-container` : `title-container-icon`
            }
          >
            <span className="title">{title}</span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavTitle;

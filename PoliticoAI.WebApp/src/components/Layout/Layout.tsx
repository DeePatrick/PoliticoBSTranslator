import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";
import Notifications from "../Notifications";

const Layout: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="flex-shrink-0">
        <Outlet />
      </div>
      <Notifications />
    </>
  );
};

export default Layout;

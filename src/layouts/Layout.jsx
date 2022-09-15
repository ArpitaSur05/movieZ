import { Outlet } from "react-router-dom";
import "../styles/Nav.css";
const Layout = () => {
  return (
    <>
      <nav>
        <div className="nav-logo">Movies-Catalog</div>{" "}
        <button className="button-add">Add</button>
      </nav>
      <Outlet />
    </>
  );
};
export default Layout;

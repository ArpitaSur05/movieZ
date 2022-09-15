import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import "../styles/Nav.css";
const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};
export default Layout;

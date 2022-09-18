import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="nav-logo">Movies-Catalog</div>
      <NavLink className="button-add" to="/add">
        Add
      </NavLink>
    </nav>
  );
};
export default Nav;

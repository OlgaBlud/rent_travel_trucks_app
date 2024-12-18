import { NavLink } from "react-router";
import css from "./Navigation.module.css";
import clsx from "clsx";
function Header() {
  const linkClass = ({ isActive }) => {
    return clsx(css.navLink, isActive && css.navLinkActive);
  };
  return (
    <nav className={css.navigation}>
      <NavLink className={linkClass} to="/">
        Home
      </NavLink>
      <NavLink className={linkClass} to="/catalog">
        Catalog
      </NavLink>
    </nav>
  );
}

export default Header;

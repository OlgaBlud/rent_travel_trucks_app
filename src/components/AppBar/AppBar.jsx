// import { Outlet } from "react-router";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import css from "./AppBar.module.css";
function AppBar() {
  return (
    <>
      <header className={css.header}>
        <Logo />
        <Navigation />
      </header>
      {/* <main>
        <Outlet />
      </main> */}
    </>
  );
}

export default AppBar;

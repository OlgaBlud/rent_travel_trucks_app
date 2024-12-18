import { Link } from "react-router";
import css from "./Logo.module.css";
import icons from "../../assets/sprite.svg";
function Logo() {
  return (
    <Link className={css.logoLink} to="/">
      <svg width="136" height="16">
        <use href={`${icons}#logo`} />
      </svg>
    </Link>
  );
}

export default Logo;

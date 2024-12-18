import { NavLink } from "react-router";
import css from "./HomePage.module.css";
function HomePage() {
  return (
    <main>
      <section className={css.heroSection}>
        <div className={css.heroWrap}>
          <h1 className={css.heroTitle}>Campers of your dreams</h1>
          <p className={css.heroText}>
            You can find everything you want in our catalog
          </p>
          <NavLink className={css.heroLink} to="/catalog">
            View Now
          </NavLink>
        </div>
      </section>
    </main>
  );
}

export default HomePage;

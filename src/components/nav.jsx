import { NavLink } from "react-router";
import styles from "../styles/nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
      >
        Home
      </NavLink>
      <NavLink
        to="/list"
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
      >
        List
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
      >
        Contact
      </NavLink>
    </nav>
  );
}

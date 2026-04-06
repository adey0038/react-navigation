import styles from "../styles/header.module.css";
import { useTheme } from "../context/themeProvider.jsx";

export default function Header() {
  const { updateTheme, themeList } = useTheme();

  return (
    <header className={styles.header}>
      <h1>Color Theme App</h1>
      {themeList.map((theme) => (
        <button key={theme} onClick={() => updateTheme(theme)}>
          {theme.charAt(0).toUpperCase() + theme.slice(1)}
        </button>
      ))}
    </header>
  );
}

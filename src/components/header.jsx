import styles from "../styles/header.module.css";
import { useTheme } from "../context/themeProvider.jsx";

export default function Header() {
  const { updateTheme, themeList, theme } = useTheme();

  return (
    <header className={styles.header}>
      <div>
        <h1>Color Theme App</h1>
        {!theme ? (
          <>
            <p className={styles.noTheme}>With No Theme</p>
            <p className={styles.comment}>Please pick a theme to continue</p>
          </>
        ) : (
          <p className={styles.currentTheme}>
            With {theme.charAt(0).toUpperCase() + theme.slice(1)} Theme
          </p>
        )}
      </div>

      <div className={styles.buttons}>
        {themeList.map((t) => (
          <button
            className={`${styles[t]} ${theme === t ? styles.active : styles.button}`}
            key={t}
            onClick={() => updateTheme(t)}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>
    </header>
  );
}

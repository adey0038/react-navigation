import { useContext, useState, createContext, useEffect } from "react";

const ThemeContext = createContext();

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState("forest");
  const [themeList] = useState(["forest", "ocean", "desert"]);

  const updateTheme = (newTheme) => {
    setTheme(newTheme);
    sessionStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    let saved = sessionStorage.getItem("theme");
    if (saved) {
      setTheme(saved);
    }
  }, []);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    import(`../themes/${theme}.css`);
  }, [theme]);

  return (
    <ThemeContext.Provider
      {...props}
      value={{ theme, updateTheme, themeList }}
    />
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export { ThemeProvider, useTheme };

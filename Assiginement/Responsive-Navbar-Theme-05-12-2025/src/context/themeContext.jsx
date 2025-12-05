import { createContext, useContext, useEffect, useState } from "react";

const themeContext = createContext();
const themeKey = "THEMEKEY";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [initialized, setInitialized] = useState(false);

  // 1️⃣ Load theme from localStorage once (PERSIST)
  useEffect(() => {
    const saved = localStorage.getItem(themeKey);
    if (saved) {
      setTheme(saved); // load saved theme
    }
    setInitialized(true); // mark ready AFTER loading
  }, []);

  // 2️⃣ Save theme to localStorage every time it changes
  useEffect(() => {
    if (initialized) {
      document.querySelector("html").setAttribute("data-theme", theme);
      localStorage.setItem(themeKey, theme);
    }
  }, [theme, initialized]);

  // 3️⃣ Toggle theme
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <themeContext.Provider value={{ theme, toggleTheme, initialized }}>
      {children}
    </themeContext.Provider>
  );
};

export const useTheme = () => useContext(themeContext);

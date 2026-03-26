"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useSyncExternalStore,
} from "react";

const ThemeContext = createContext({
  theme: "light",
  mounted: false,
  toggleTheme: () => {},
});

const STORAGE_KEY = "theme-preference";

function getInitialTheme() {
  if (typeof document === "undefined") {
    return "light";
  }

  const domTheme = document.documentElement.dataset.theme;
  return domTheme === "dark" ? "dark" : "light";
}

function subscribe() {
  return () => {};
}

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemThemeChange = (event) => {
      const storedTheme = window.localStorage.getItem(STORAGE_KEY);

      if (storedTheme) {
        return;
      }

      const nextTheme = event.matches ? "dark" : "light";
      setTheme(nextTheme);
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, mounted, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

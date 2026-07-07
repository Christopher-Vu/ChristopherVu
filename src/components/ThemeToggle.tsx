"use client";

import { useEffect, useState } from "react";
import styles from "./ThemeToggle.module.css";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    // Reads theme set by the pre-hydration inline script (ThemeScript), an
    // external system outside React's render — must run post-mount so SSR
    // output stays deterministic and avoids a hydration mismatch.
    const current = document.documentElement.getAttribute("data-theme");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(current === "dark" ? "dark" : "light");
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className={styles.toggle}
      aria-label={
        theme === null
          ? "Toggle theme"
          : theme === "dark"
            ? "Switch to light theme"
            : "Switch to dark theme"
      }
    >
      {theme === null ? "" : theme === "dark" ? "☀" : "☾"}
    </button>
  );
}

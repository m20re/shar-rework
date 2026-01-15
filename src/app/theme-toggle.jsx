"use client";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";

export default function ThemeToggle({ buttonFormat }) {
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    console.log("Current theme:", theme);
    const newTheme = theme === "light" ? "dark" : "light";
    console.log("Setting theme to:", newTheme);
    setTheme(newTheme);
  };

  return (
    <button className={buttonFormat} onClick={handleClick}>
      <FontAwesomeIcon icon={faSun} style={{ color: "#808080" }} />
    </button>
  );
}

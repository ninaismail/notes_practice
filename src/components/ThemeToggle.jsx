import { useState, useEffect } from "react";
import LightOn from "../components/icons/LightOn";
import LightOff from "../components/icons/LightOff";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);
  console.log('darkMode', darkMode)
  
  localStorage.getItem("theme");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  
  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }
  return (
    <button
      title={darkMode ? "Dark Mode" : "Light Mode"}
      aria-label={`Click for ${darkMode ? "Dark Mode" : "Light Mode"}`}
      className="fixed inset-0 z-1 w-12 h-12 p-3 text-center rounded-br-lg shadow-md bg-green-100/95 ring-1 ring-white"
      onClick={toggleTheme}
    >
      {darkMode ? <LightOn /> : <LightOff />}
    </button>
  );
};

export default ThemeToggle;

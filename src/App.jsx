import React, { useLayoutEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Ngo from "./Components/Ngo";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") return false;
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) return storedTheme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useLayoutEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", darkMode);
      localStorage.setItem("theme", darkMode ? "dark" : "light");
    }
  }, [darkMode]);

  return (
    <div className="bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 min-h-screen transition-colors duration-300">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Home />
      <About />
      <Ngo />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

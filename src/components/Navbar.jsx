import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

const navItems = [
  "Home",
  "About",
  "Services",
  "Projects",
  "Contact",
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [isOpen]);

  useEffect(() => {
    const closeOnEscape = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <>
      <header className="navbar">
        <a href="/" className="navbar__brand" aria-label="Homepage">
          <img src={logo} alt="Bernard Portfolio Logo" />
          <span>Portfolio</span>
        </a>
        

        <nav
          className={`navbar__menu ${isOpen ? "open" : ""}`}
          aria-label="Primary Navigation"
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>

        <button
          className={`navbar__toggle ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      {isOpen && (
        <button
          className="navbar__overlay"
          aria-label="Close menu"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
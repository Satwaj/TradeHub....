import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './navbar.scss';

import Button from "../components/Button";
import { Menu } from "lucide-react";
import { X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* LOGO */}
        <div className="logo">
          <img src="/logo.png" alt="TradeHub" />
          <h1>
            Trade<span>Hub</span>
          </h1>
        </div>

        {/* DESKTOP LINKS */}
        <ul className="nav-links">
          <li className={isActive("/") ? "active" : ""}>
            <Link to="/">Home</Link>
          </li>
          <li className={isActive("/coursess") ? "active" : ""}>
            <Link to="/coursess">Courses</Link>
          </li>
          <li className={isActive("/about") ? "active" : ""}>
            <Link to="/about">About</Link>
          </li>
          <li className={isActive("/contact") ? "active" : ""}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* DESKTOP CTA */}
        <div className="nav-cta">
          <Link to="/coursess">
            <Button>Get Started</Button>
          </Link>
        </div>

        {/* MOBILE MENU ICONS */}
        <section className="menu">
          {!menuOpen && <Menu size={28} onClick={() => setMenuOpen(true)} />}

          {menuOpen && <X size={28} onClick={() => setMenuOpen(false)} />}
        </section>

        {/* OVERLAY */}
        <div
          className={`overlay ${menuOpen ? "show" : ""}`}
          onClick={() => setMenuOpen(false)}
        />

        {/* MOBILE MENU */}
        <div ref={menuRef} className={`mobile-menu ${menuOpen ? "show" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/coursess" onClick={() => setMenuOpen(false)}>
            Courses
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>

          <Link to="/coursess" onClick={() => setMenuOpen(false)}>
            <Button>Get Started</Button>
          </Link>
        </div>

        
      </div>
    </nav>
  );
};

export default Navbar;

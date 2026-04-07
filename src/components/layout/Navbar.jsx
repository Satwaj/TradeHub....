import { useRef, useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, LogOut, User, ChevronDown } from 'lucide-react';
import { useMobileMenu } from '../../hooks/useAnimations';
import { NAV_LINKS } from '../../constants/siteData';
import { useAuth } from '../../context/AuthContext';
import Button from '../ui/Button';
import './Navbar.css';

// User avatar dropdown
const UserMenu = ({ user, logout }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);

  return (
    <div className="user-menu" ref={ref}>
      <button
        className="user-menu__trigger"
        onClick={() => setOpen((p) => !p)}
        aria-label="User menu"
        aria-expanded={open}
      >
        <span className="user-menu__avatar">{user.avatar}</span>
        <span className="user-menu__name">{user.name.split(' ')[0]}</span>
        <ChevronDown size={14} className={`user-menu__chevron ${open ? 'open' : ''}`} />
      </button>

      {open && (
        <div className="user-menu__dropdown">
          <div className="user-menu__dropdown-header">
            <span className="user-menu__dropdown-avatar">{user.avatar}</span>
            <div>
              <strong>{user.name}</strong>
              <p>{user.email}</p>
            </div>
          </div>
          <hr className="user-menu__divider" />
          <Link to="/profile" className="user-menu__item" onClick={() => setOpen(false)}>
            <User size={14} /> My Profile
          </Link>
          <button
            className="user-menu__item user-menu__item--logout"
            onClick={() => { logout(); setOpen(false); }}
          >
            <LogOut size={14} /> Log Out
          </button>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const { isOpen, close, toggle, menuRef } = useMobileMenu();
  const { user, logout } = useAuth();

  return (
    <nav className="navbar" id="navbar">
      <div className="navbar__container">
        {/* Logo */}
        <Link to="/" className="navbar__logo" onClick={close}>
          <img src="/logo.png" alt="TradeHub Logo" />
          <h1>Trade<span>Hub</span></h1>
        </Link>

        {/* Desktop Links */}
        <div className="navbar__links">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.path} to={link.path} end={link.path === '/'} className="navbar__link">
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Desktop Auth */}
        <div className="navbar__cta">
          {user ? (
            <UserMenu user={user} logout={logout} />
          ) : (
            <div className="navbar__auth-btns">
              <Link to="/login">
                <Button variant="ghost" size="sm">Log In</Button>
              </Link>
              <Link to="/register">
                <Button variant="primary" size="sm">Sign Up</Button>
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Toggle */}
        <button className="navbar__toggle" onClick={toggle} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Overlay */}
        <div className={`navbar__overlay ${isOpen ? 'active' : ''}`} onClick={close} />

        {/* Mobile Menu */}
        <div ref={menuRef} className={`navbar__mobile ${isOpen ? 'active' : ''}`}>
          {/* Mobile user info */}
          {user && (
            <div className="navbar__mobile-user">
              <span className="navbar__mobile-avatar">{user.avatar}</span>
              <div>
                <strong>{user.name}</strong>
                <p>{user.email}</p>
              </div>
            </div>
          )}

          {NAV_LINKS.map((link) => (
            <Link key={link.path} to={link.path} className="navbar__mobile-link" onClick={close}>
              {link.label}
            </Link>
          ))}

          <hr className="navbar__mobile-divider" />

          {user ? (
            <button
              className="navbar__mobile-logout"
              onClick={() => { logout(); close(); }}
            >
              <LogOut size={16} /> Log Out
            </button>
          ) : (
            <div className="navbar__mobile-auth">
              <Link to="/login" onClick={close}>
                <Button variant="secondary" size="md" className="navbar__mobile-cta">Log In</Button>
              </Link>
              <Link to="/register" onClick={close}>
                <Button variant="primary" size="md" className="navbar__mobile-cta">Sign Up Free</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

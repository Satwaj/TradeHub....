import { Link } from 'react-router-dom';
import { Mail, Instagram, MapPin, Phone } from 'lucide-react';
import { SITE_CONFIG, NAV_LINKS } from '../../constants/siteData';
import Button from '../ui/Button';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      {/* CTA Section */}
      <div className="footer__cta">
        <div className="footer__cta-glow bg-glow bg-glow--primary" />
        <div className="footer__cta-content">
          <h2>Join Nashik's Most Trusted Trading Institute</h2>
          <p>Learn Trading Professionally — Not Randomly. Start Your Trading Journey Today.</p>
          <div className="footer__cta-actions">
            <Link to="/courses">
              <Button variant="primary" size="lg">Start Your Journey →</Button>
            </Link>
            <Link to="/about">
              <Button variant="secondary" size="lg">Learn More →</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer__main">
        <div className="footer__brand">
          <div className="footer__logo">
            <img src="/logo.png" alt="TradeHub" />
            <h2>Trade<span>Hub</span></h2>
          </div>
          <p>{SITE_CONFIG.description}</p>
          <div className="footer__contact-info">
            <div className="footer__contact-item">
              <MapPin size={16} />
              <span>{SITE_CONFIG.contact.location}</span>
            </div>
            <div className="footer__contact-item">
              <Phone size={16} />
              <span>{SITE_CONFIG.contact.phone}</span>
            </div>
            <div className="footer__contact-item">
              <Mail size={16} />
              <span>{SITE_CONFIG.contact.email}</span>
            </div>
          </div>
        </div>

        <div className="footer__nav">
          <h3>Quick Links</h3>
          {NAV_LINKS.map((link) => (
            <Link key={link.path} to={link.path} className="footer__nav-link">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="footer__social-col">
          <h3>Follow Us</h3>
          <div className="footer__social-icons">
            <a href="#" aria-label="Instagram" className="footer__social-icon">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="Email" className="footer__social-icon">
              <Mail size={20} />
            </a>
          </div>
          <p className="footer__social-text">Online & Offline Classes Available</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer__bottom">
        <div className="footer__bottom-links">
          <Link to="#">Terms & Conditions</Link>
          <Link to="#">Privacy Policy</Link>
          <Link to="#">Cancellation & Refund</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        <p>© 2026 TradeHub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

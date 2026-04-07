import { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2 } from 'lucide-react';
import { useInView } from '../hooks/useAnimations';
import { SITE_CONFIG } from '../constants/siteData';
import { cn } from '../utils/helpers';
import PageHero from '../components/ui/PageHero';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Footer from '../components/layout/Footer';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [ref, isInView] = useInView();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <>
      <PageHero
        badge="Contact Us"
        badgeColor="accent"
        title="Let's Talk About Your"
        highlight="Trading Journey"
        description="Have questions about our courses? Our team is here to help you choose the right program."
      />

      {/* Content */}
      <section className="contact-page">
        <div className="container section-padding">
          <div ref={ref} className={cn('contact-page__wrapper', isInView && 'visible')}>
            {/* Info */}
            <div className="contact-page__info">
              <h2>Get in Touch</h2>
              <p>Reach out to us through any of the channels below. We're available for both online and offline consultations.</p>

              <div className="contact-page__info-cards">
                <Card variant="glass" className="contact-page__info-card">
                  <MapPin size={20} className="contact-page__info-icon" />
                  <div>
                    <h4>Location</h4>
                    <p>{SITE_CONFIG.contact.location}</p>
                  </div>
                </Card>
                <Card variant="glass" className="contact-page__info-card">
                  <Phone size={20} className="contact-page__info-icon" />
                  <div>
                    <h4>Call / WhatsApp</h4>
                    <p>{SITE_CONFIG.contact.phone}</p>
                  </div>
                </Card>
                <Card variant="glass" className="contact-page__info-card">
                  <Mail size={20} className="contact-page__info-icon" />
                  <div>
                    <h4>Email</h4>
                    <p>{SITE_CONFIG.contact.email}</p>
                  </div>
                </Card>
              </div>

              <div className="contact-page__availability">
                <div className="contact-page__avail-dot" />
                <span>Online & Offline Classes Available in Nashik</span>
              </div>
            </div>

            {/* Form */}
            <Card variant="glass" className="contact-page__form-card">
              <h3>Send Us a Message</h3>
              {submitted && (
                <div className="contact-page__success">
                  <CheckCircle2 size={16} strokeWidth={2} /> Thank you! We'll reach out to you soon.
                </div>
              )}
              <form className="contact-page__form" onSubmit={handleSubmit}>
                <div className="contact-page__field">
                  <label htmlFor="contact-name">Full Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="contact-page__field">
                  <label htmlFor="contact-email">Email Address</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="contact-page__field">
                  <label htmlFor="contact-phone">Phone / WhatsApp</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div className="contact-page__field">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your trading goals..."
                    required
                  />
                </div>
                <Button variant="accent" size="lg" type="submit" className="contact-page__submit">
                  <Send size={16} /> Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactPage;

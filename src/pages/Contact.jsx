import Button from "../components/Button";
import Footer from "./Footer";
import './contact.scss'
const Contact = () => {
  return (
    <section className="contact">
      {/* Header */}
      <div className="contact-header">
        <span className="badge">Contact Us</span>
        <h1>
          Let’s Talk About Your <span>Trading Journey</span>
        </h1>
        <p>
          Have questions about our courses or need guidance choosing the right
          program? Our team is here to help you.
        </p>
      </div>

      {/* Content */}
      <div className="contact-wrapper">
        {/* Left info */}
        <div className="contact-info">
          <div className="info-card">
            <h3>Email</h3>
            <p>support@tradehub.com</p>
          </div>

          <div className="info-card">
            <h3>Phone</h3>
            <p>+91 98765 43210</p>
          </div>

          <div className="info-card">
            <h3>Location</h3>
            <p>Nashik, India</p>
          </div>
        </div>

        {/* Right form */}
        <form className="contact-form">
          <div className="field">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>

          <div className="field">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="field">
            <label>Message</label>
            <textarea rows="4" placeholder="Write your message"></textarea>
          </div>

          <Button variant="primary">Send Message</Button>
        </form>
      </div>
      <Footer/>
    </section>
  );
};

export default Contact;

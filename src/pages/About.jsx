import './about.scss'
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Reviews from "../components/Reviews";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <section className="about">
        {/* Left content */}
        <div className="about-content">
          <span className="badge">About Us</span>

          <h1>
            Building Confident <span>Traders</span>, Not Just Profits
          </h1>

          <p>
            We are a professional trading education platform focused on
            practical, structured, and result-driven learning. Our goal is to
            help traders understand markets deeply, manage risk confidently, and
            grow with discipline.
          </p>

          <p>
            With live mentorship, real market exposure, and a strong learning
            community, we guide students from beginner level to professional
            trading mindset.
          </p>

          <div className="about-actions">
            <Link to="/coursess">
              <Button variant="primary">Explore Courses</Button>
            </Link>
            <Link to="/contact">
              <Button variant="primary">Contact Us</Button>
            </Link>
          </div>
        </div>

        {/* Right stats */}
        <div className="about-stats">
          <div className="stat-card">
            <h2>2.5K+</h2>
            <span>Successful Students</span>
          </div>

          <div className="stat-card">
            <h2>92%</h2>
            <span>Success Rate</span>
          </div>

          <div className="stat-card">
            <h2>5+</h2>
            <span>Years Experience</span>
          </div>
        </div>
      </section>
      <Reviews/>
      <Footer/>
    </>
  );
};

export default About;

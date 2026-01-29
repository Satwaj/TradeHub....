import React from "react";
import './home.scss'
import Button from "../components/Button";
import Masterclass from "./Masterclass";
import Curriculum from "./Curriculum";
import Reviews from "../components/Reviews";
import Footer from "./Footer";


const Home = () => {
  return (
    <>
      <div className="home">
        <div className="section1">
          <div className="header">
            <Button variant="pill">India's #1 Trading Academy</Button>
          </div>

          <div className="intro">
            <h1>India's #1 Stock</h1>
            <h1>Trading Community</h1>
          </div>

          <div className="text">
            <p>Join thousands of successful traders with our</p>
            <p>
              comprehensive program, live mentorship, and proven strategies.
            </p>
          </div>
        </div>

        <div className="section2">
          <div className="card-section">
            <div className="cards">
              <div className="card1">
                <h2>Masterclass</h2>
                <p>50+ comprehensive modules with live sessions</p>
                <button>2.5K+ graduate</button>
              </div>

              <div className="card2">
                <h2>Elite Community</h2>
                <p>Connect with 10,000+ active traders</p>
                <button>30K+ trained</button>
              </div>

              <div className="card3">
                <h2>Live Mentorship</h2>
                <p>1-on-1 guidance from expert traders</p>
                <button>24/7 support</button>
              </div>
            </div>

            <div className="buttons">
              <Button variant="primary">Get Pricing & Register</Button>
              <Button variant="primary">Get Community</Button>
            </div>
          </div>

          <div className="brochure">
            <div className="logo"></div>

            <div className="info">
              <h1>Download Program Brochure</h1>
              <p>
                Explore our complete curriculum, mentor profiles, and success
                stories
              </p>
            </div>

            <div className="buttons">
              <Button variant="primary">Get Brochure</Button>
            </div>
          </div>
        </div>

        <div className="section3">
          <div className="sec3">
            <div className="info-button">
              <button>Masterclass in Strategic Trading and Investment</button>
            </div>

            <div className="info">
              <h1 className="first">Choose Your Learning</h1>
              <h1 className="sec">Experience</h1>
            </div>
            {/* 
          <div className="programs">
            <div className="recorded">
              <button>Recorded Lectures</button>
            </div>
            <div className="online">
              <button>Live + Recorded</button>
            </div>
            <div className="offline">
              <button>Offline</button>
            </div>
          </div> */}
          </div>
        </div>
      </div>

      <Masterclass />
      <Curriculum />
      <Reviews />
      <Footer />
    </>
  );
};

export default Home;

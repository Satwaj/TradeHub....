
import { useState } from "react";
import Button from "../components/Button";
import Footer from "./Footer";
import './masterclass.scss'


const data = [
  {
    title: "Live Online Masterclass",
    desc: "Learn from anywhere with real-time interaction",
    price: "₹20,000",
    badge: "Next: 15th Feb 2026",
    duration: "4 weeks",
    students: "50+ students per batch",
  },
  {
    title: "Live + Recorded Masterclass",
    desc: "Attend live + lifetime access to recordings",
    price: "₹25,000",
    badge: "Next: 20th Jan 2026",
    duration: "4 weeks",
    students: "70+ students per batch",
  },
  {
    title: "Offline Masterclass",
    desc: "In-person learning with classroom experience",
    price: "₹25,000",
    badge: "Next: Feb 2026",
    duration: "4 weeks",
    students: "30 students per batch",
  },
];

const Courses = () => {
 const [active, setActive] = useState(0); // 
 
   const current = data[active];
 
   return (
     <>
       <section className="masterclass">
         {/* Toggle */}
         <div className="toggle">
           <button
             className={active === 0 ? "active" : ""}
             onClick={() => setActive(0)}
           >
             Live Course
           </button>

           <button
             className={active === 1 ? "active" : ""}
             onClick={() => setActive(1)}
           >
             Live + Recorded
           </button>

           <button
             className={active === 2 ? "active" : ""}
             onClick={() => setActive(2)}
           >
             Offline
           </button>
         </div>

         {/* Card */}
         <div className="program-card">
           <div className="top">
             <div className="left">
               <h2>{current.title}</h2>
               <p>{current.desc}</p>

               <div className="meta">
                 <span>⭐ 4.9 (1247 reviews)</span>
                 <span className="badge">{current.badge}</span>
               </div>
             </div>

             <div className="right">
               <h3>{current.price}</h3>
               <span>One-time payment</span>
             </div>
           </div>

           <div className="info">
             <div>⏱ {current.duration}</div>
             <div>👥 {current.students}</div>
           </div>

           <button className="cta">Get Pricing & Register →</button>
         </div>
       </section>
       <section className="included-section">
         <div className="included-card">
           <h3>✔ What's Included</h3>

           <div className="included-grid">
             <p>✔ Live interactive sessions with Q&A</p>
             <p>✔ Screen sharing and real-time charts</p>
             <p>✔ Recorded sessions for replay</p>
             <p>✔ Digital resources and PDFs</p>
             <p>✔ Online community access</p>
             <p>✔ 1-on-1 doubt clearing sessions</p>
           </div>
         </div>

         <div className="stats">
           <div className="stat green">
             <h2>2.5K+</h2>
             <span>Graduates</span>
           </div>

           <div className="stat blue">
             <h2>92%</h2>
             <span>Success Rate</span>
           </div>
         </div>
       </section>

       <section className="benefits">
         <h3> Key Benefits</h3>

         <div className="benefits-grid">
           <div className="benefit"> Join from anywhere</div>
           <div className="benefit"> HD live streaming</div>
           <div className="benefit"> Interactive Q&A</div>
           <div className="benefit"> Screen sharing</div>
         </div>
       </section>

       <section className="comparison">
         <h2 className="title">Quick Comparison</h2>

         <div className="comparison-grid">
           {/* LIVE */}
           <div className="compare-card live">
             <h3>Live Masterclass</h3>

             <ul>
               <li>Learn from anywhere</li>
               <li>Fixed live schedule</li>
               <li>Real-time interaction</li>
               <li>₹46,000</li>
             </ul>

             <Button variant="primary">Register Now</Button>
           </div>

           {/* LIVE + RECORDED */}
           <div className="compare-card hybrid">
             <h3>Live + Recorded</h3>

             <ul>
               <li>Live + lifetime recordings</li>
               <li>Flexible learning</li>
               <li>Revision anytime</li>
               <li>₹52,000</li>
             </ul>

             <Button variant="primary">Register Now</Button>
           </div>

           {/* OFFLINE */}
           <div className="compare-card offline">
             <h3>Offline Masterclass</h3>

             <ul>
               <li>Face-to-face learning</li>
               <li>Hands-on practice</li>
               <li>Networking opportunities</li>
               <li>₹64,000</li>
             </ul>

             <Button variant="primary">Register Now</Button>
           </div>
         </div>
       </section>
       <Footer/>
     </>
   );
};

export default Courses;

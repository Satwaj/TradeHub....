import { useState } from "react";
import './curriculum.scss'

const syllabusData = [
  {
    week: "Week 1",
    days: "Days 1-7",
    title: "Foundation & Market Basics",
    color: "blue",
    syllabus: [
      "Market introduction & structure",
      "Types of markets (Equity, F&O)",
      "Candlestick psychology",
      "Support & Resistance",
      "Trend & range identification",
      "Risk management basics",
      "Live chart practice + Q&A",
    ],
  },
  {
    week: "Week 2",
    days: "Days 8-14",
    title: "Advanced Trading & Market Structure",
    color: "purple",
    syllabus: [
      "Market structure (BOS & CHoCH)",
      "Liquidity & stop hunts",
      "Order blocks",
      "Fair Value Gaps (FVG)",
      "Multi-timeframe analysis",
      "Entry & exit models",
      "Live trading review",
    ],
  },
  {
    week: "Week 3",
    days: "Days 15-21",
    title: "Professional Trading & Funding",
    color: "green",
    syllabus: [
      "Professional trading plans",
      "Advanced risk management",
      "Trading psychology",
      "Journaling & metrics",
      "Prop firm rules",
      "Funded account strategy",
      "Performance review",
    ],
  },
  {
    week: "Week 4",
    days: "Days 22-28",
    title: "Advanced Psychology & Live Capital Deployment",
    color: "orange",
    syllabus: [
      "Advanced trader psychology",
      "News & volatility trading",
      "Scaling strategies",
      "Live capital deployment",
      "Career roadmap",
      "Full live trading",
      "Final assessment & certification",
    ],
  },
];

const Curriculum = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="curriculum">
      <div className="badge">Complete Curriculum</div>

      <h1 className="title">4-Week Comprehensive Program</h1>
      <p className="subtitle">
        Structured journey from market basics to professional trading
      </p>

      <div className="curriculum-list">
        {syllabusData.map((item, index) => (
          <div
            key={index}
            className={`curriculum-card ${item.color}`}
            onClick={() => toggle(index)}
          >
            <div className="meta">
              <span className="month">{item.week}</span>
              <span className="weeks">{item.days}</span>
            </div>

            <h2>{item.title}</h2>
            <span className="arrow">{openIndex === index ? "−" : "›"}</span>

            {/* EXPANDED CONTENT */}
            {openIndex === index && (
              <div className="syllabus">
                <ul>
                  {item.syllabus.map((topic, i) => (
                    <li key={i}>✔ {topic}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Curriculum;

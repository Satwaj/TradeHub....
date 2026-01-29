import { useState } from "react";
import './reviews.scss'

const reviewsData = [
  {
    name: "Rahul Sharma",
    role: "Software Engineer → Full-time Trader",
    city: "Mumbai",
    rating: 5,
    text: "Before joining, I was randomly entering trades without a plan. The live sessions and community discussions completely changed my mindset. I now focus more on risk and consistency rather than quick profits.",
    highlights: [
      "Structured learning",
      "Strong community",
      "Practical guidance",
    ],
  },
  {
    name: "Ankit Verma",
    role: "Final Year Engineering Student",
    city: "Pune",
    rating: 5,
    text: "The recorded + live format worked really well for me because of college. I revisited the recordings multiple times and slowly understood market structure. This course gave me clarity.",
    highlights: [
      "Flexible learning",
      "Clear explanations",
      "Beginner friendly",
    ],
  },
  {
    name: "Neha Patel",
    role: "Chartered Accountant",
    city: "Ahmedabad",
    rating: 5,
    text: "As someone from a finance background, I appreciated the discipline and risk management approach. This is not a tips-based course. It focuses on thinking like a trader.",
    highlights: ["Risk management", "Professional mindset", "Mentor support"],
  },
  {
    name: "Saurabh Mishra",
    role: "Small Business Owner",
    city: "Indore",
    rating: 5,
    text: "Offline sessions helped me a lot. Face-to-face interaction and practical examples made concepts easier to understand. The mentors were very approachable.",
    highlights: ["Offline experience", "Hands-on learning", "Good mentors"],
  },
];

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const review = reviewsData[index];

  const next = () => setIndex((prev) => (prev + 1) % reviewsData.length);
  const prev = () =>
    setIndex((prev) => (prev === 0 ? reviewsData.length - 1 : prev - 1));

  return (
    <section className="reviews">
      <h1>
        Real Reviews from <span>Real Students</span>
      </h1>

      <p className="subtitle">
        Discover what our students say about their learning journey and trading
        experience.
      </p>

      <div className="review-card">
        <div className="profile">
          <div className="avatar">
            {review.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>

          <div>
            <h3>{review.name}</h3>
            <p>{review.role}</p>
            <span className="city">{review.city}</span>
          </div>

          <div className="stars">{"★".repeat(review.rating)}</div>
        </div>

        <blockquote>“{review.text}”</blockquote>

        <div className="highlights">
          {review.highlights.map((item, i) => (
            <span key={i}>✔ {item}</span>
          ))}
        </div>

        <div className="controls">
          <button onClick={prev}>← Previous</button>
          <button onClick={next}>Next →</button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

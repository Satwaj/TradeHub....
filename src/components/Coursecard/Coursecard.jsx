import Button from "../Button";

const CourseCard = ({ title, desc, price, badge, duration, students }) => {
  return (
    <div className="program-card">
      <div className="top">
        <div className="left">
          <h2>{title}</h2>
          <p>{desc}</p>

          <div className="meta">
            <span>⭐ 4.9 (1247 reviews)</span>
            <span className="badge">{badge}</span>
          </div>
        </div>

        <div className="right">
          <h3>{price}</h3>
          <span>One-time payment</span>
        </div>
      </div>

      <div className="info">
        <div>⏱ {duration}</div>
        <div>👥 {students}</div>
      </div>

      <Button variant="primary">Get Pricing & Register →</Button>
    </div>
  );
};

export default CourseCard;

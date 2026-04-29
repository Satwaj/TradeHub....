import { useState, useEffect } from "react";
import Card from "../ui/Card";
import Button from "../ui/Button";

const DatabaseCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/courses")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch courses:", err);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        Loading courses from database...
      </div>
    );
  if (!courses.length) return null;

  return (
    <section className="courses-sec" style={{ paddingBottom: "4rem" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
            Live Courses from Database
          </h2>
          <p style={{ color: "var(--text-muted)" }}>
            These courses are dynamically fetched from our MongoDB backend.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {courses.map((course) => (
            <Card
              key={course._id}
              variant="glass"
              glow="accent"
              style={{
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <h3 style={{ fontSize: "1.5rem", margin: 0 }}>{course.title}</h3>
              <p style={{ color: "var(--text-muted)" }}>{course.description}</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "auto",
                }}
              >
                <span style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
                  ${course.price}
                </span>
                <span
                  style={{
                    fontSize: "0.875rem",
                    background: "var(--bg-glass-heavy)",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "1rem",
                  }}
                >
                  {course.duration}
                </span>
              </div>
              <Button
                variant="accent"
                style={{ width: "100%", marginTop: "1rem" }}
              >
                Enroll Now
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DatabaseCourses;

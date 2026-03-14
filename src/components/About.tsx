import { Brain, Target, Users, Code } from "lucide-react";

const highlights = [
  { icon: <Brain size={20} />, title: "AI & Machine Learning", desc: "Advanced expertise in ML algorithms, deep learning, and neural networks" },
  { icon: <Target size={20} />, title: "Data-Driven Solutions", desc: "End-to-end ML projects that solve real-world problems with measurable impact" },
  { icon: <Users size={20} />, title: "Team Collaboration", desc: "Strong communicator with experience in collaborative research environments" },
  { icon: <Code size={20} />, title: "Technical Excellence", desc: "Proficient in Python, SQL, and modern frameworks for robust ML pipelines" },
];

const About = () => (
  <section id="about" style={{ padding: "7rem 1.5rem", background: "hsl(220,25%,5.5%)" }}>
    <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
      {/* Header */}
      <div className="animate-fade-up text-center mb-16">
        <span className="label-tag">About Me</span>
        <h2
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(1.6rem, 4vw, 2.75rem)",
            marginTop: "1.25rem",
            color: "#f0f4f8",
          }}
        >
          Passionate About{" "}
          <span className="text-shimmer">Machine Learning & Data Science</span>
        </h2>
        <div style={{ width: "40px", height: "2px", background: "#00D4FF", margin: "1rem auto 0" }} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start", marginBottom: "4rem" }}
        className="animate-slide-in grid-cols-1 lg:grid-cols-2"
      >
        {/* Story */}
        <div className="animate-slide-right" style={{ animationDelay: "0.1s" }}>
          <h3
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "1.5rem",
              color: "#e8edf2",
              marginBottom: "1.5rem",
            }}
          >
            My Journey
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              "My passion for data science began during my studies at Vignan Institute of Technology, where I discovered machine learning's power to transform raw data into actionable insights.",
              "With hands-on experience in projects ranging from cardiovascular disease detection using deep learning to solar radiation forecasting, I've applied cutting-edge algorithms to real-world challenges.",
              "My goal is to leverage technical skills and an innovative mindset to contribute to meaningful projects that drive data-backed decision making and organizational growth.",
            ].map((p, i) => (
              <p
                key={i}
                style={{
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "0.97rem",
                  lineHeight: 1.8,
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div
          className="animate-fade-up"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
            animationDelay: "0.25s",
          }}
        >
          {highlights.map((item, i) => (
            <div
              key={i}
              className="card-glass"
              style={{ padding: "1.4rem", animationDelay: `${0.1 * i}s` }}
            >
              <div
                style={{
                  width: "40px", height: "40px",
                  borderRadius: "8px",
                  background: "rgba(0,212,255,0.1)",
                  border: "1px solid rgba(0,212,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#00D4FF",
                  marginBottom: "0.85rem",
                }}
              >
                {item.icon}
              </div>
              <h4
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  color: "#e8edf2",
                  marginBottom: "0.4rem",
                }}
              >
                {item.title}
              </h4>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8rem", lineHeight: 1.6 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Objective */}
      <div
        className="animate-fade-up card-glass"
        style={{ padding: "2.5rem", textAlign: "center", animationDelay: "0.4s" }}
      >
        <span className="label-tag" style={{ marginBottom: "1rem", display: "inline-block" }}>
          Professional Objective
        </span>
        <p
          style={{
            color: "rgba(255,255,255,0.55)",
            fontSize: "1rem",
            lineHeight: 1.85,
            maxWidth: "760px",
            margin: "1rem auto 0",
            fontFamily: "'Outfit', sans-serif",
          }}
        >
          Seeking a Data Analyst or ML Intern role to apply Python, SQL, and visualization skills
          to solve real-world problems and drive data-backed decisions. Looking for a creative and
          challenging position that offers opportunities for self-improvement while contributing to
          organizational growth through technical innovation and logical problem-solving.
        </p>
      </div>
    </div>
  </section>
);

export default About;

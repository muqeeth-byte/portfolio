import { Code, Database, Globe, Users, Brain, BarChart2 } from "lucide-react";

const categories = [
  {
    icon: <Code size={18} />,
    title: "Languages",
    skills: ["Python", "SQL", "C", "Java"],
  },
  {
    icon: <Brain size={18} />,
    title: "Machine Learning",
    skills: ["Statistical Modeling", "Deep Learning", "CNN", "Neural Networks", "Regression"],
  },
  {
    icon: <Globe size={18} />,
    title: "Frontend",
    skills: ["HTML5", "CSS3", "Responsive Design"],
  },
  {
    icon: <Database size={18} />,
    title: "Data & Analytics",
    skills: ["SQL Querying", "Data Visualization", "Dashboard Dev", "Statistical Analysis"],
  },
  {
    icon: <BarChart2 size={18} />,
    title: "Tools & Frameworks",
    skills: ["TensorFlow", "Scikit-learn", "GitHub", "Jupyter", "SqueezeNet", "Xception"],
  },
  {
    icon: <Users size={18} />,
    title: "Soft Skills",
    skills: ["Critical Thinking", "Communication", "Team Collaboration", "Problem Solving"],
  },
];

const exploring = ["Advanced Deep Learning", "Computer Vision", "NLP", "MLOps", "Cloud Platforms"];

const Skills = () => (
  <section id="skills" style={{ padding: "7rem 1.5rem", background: "hsl(220,30%,4%)" }}>
    <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
      {/* Header */}
      <div className="animate-fade-up text-center mb-16">
        <span className="label-tag">Technical Expertise</span>
        <h2
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(2rem, 5vw, 3.25rem)",
            marginTop: "1.25rem",
            color: "#f0f4f8",
          }}
        >
          Skills &{" "}
          <span className="text-shimmer">Technologies</span>
        </h2>
        <div style={{ width: "40px", height: "2px", background: "#00D4FF", margin: "1rem auto 0" }} />
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1.25rem",
          marginBottom: "4rem",
        }}
      >
        {categories.map((cat, i) => (
          <div
            key={i}
            className="card-glass animate-scale-in"
            style={{ padding: "1.75rem", animationDelay: `${i * 0.07}s` }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
              <div
                style={{
                  width: "36px", height: "36px",
                  borderRadius: "8px",
                  background: "rgba(0,212,255,0.1)",
                  border: "1px solid rgba(0,212,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#00D4FF",
                  flexShrink: 0,
                }}
              >
                {cat.icon}
              </div>
              <span
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  color: "#e8edf2",
                }}
              >
                {cat.title}
              </span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {cat.skills.map((s) => (
                <span key={s} className="skill-pill">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Currently exploring */}
      <div className="animate-fade-up text-center" style={{ animationDelay: "0.5s" }}>
        <div
          style={{
            display: "inline-block",
            borderTop: "1px solid rgba(255,255,255,0.07)",
            paddingTop: "2.5rem",
            width: "100%",
          }}
        >
          <span className="label-tag" style={{ marginBottom: "1.25rem", display: "inline-block" }}>
            Currently Exploring
          </span>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.65rem", marginTop: "0.75rem" }}>
            {exploring.map((item) => (
              <span
                key={item}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.75rem",
                  padding: "0.4rem 1rem",
                  borderRadius: "3px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.55)",
                  letterSpacing: "0.05em",
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;

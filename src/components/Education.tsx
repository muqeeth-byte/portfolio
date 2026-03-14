import { GraduationCap, Calendar } from "lucide-react";

const educationData = [
  {
    id: 1,
    institution: "Vignan Institute of Technology and Science",
    degree: "B.Tech — Artificial Intelligence & Data Science",
    duration: "Nov 2021 – Jul 2025",
    status: "Completed",
    description: "Specialized program focusing on AI, machine learning, data science, and advanced analytics.",
    highlights: ["Machine Learning", "Deep Learning", "Data Analytics", "Statistical Modeling"],
    icon: "",
  },
  {
    id: 2,
    institution: "Sri Chaitanya Junior College",
    degree: "Board of Intermediate — Class XII",
    duration: "Jul 2019 – May 2021",
    status: "Completed",
    description: "Higher secondary education with focus on mathematics and science.",
    highlights: ["Mathematics", "Physics", "Chemistry", "Computer Science"],
    icon: "",
  },
  {
    id: 3,
    institution: "Sri Chaitanya School",
    degree: "Secondary School Certificate — Class X",
    duration: "Jun 2018 – May 2019",
    status: "Completed",
    description: "Secondary education with a strong foundation in core subjects.",
    highlights: ["Academic Excellence", "STEM Foundation", "Leadership"],
    icon: "",
  },
];

const Education = () => (
  <section id="education" style={{ padding: "7rem 1.5rem", background: "hsl(220,30%,4%)" }}>
    <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
      {/* Header */}
      <div className="animate-fade-up text-center mb-16">
        <span className="label-tag">Academic Journey</span>
        <h2
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(2rem, 5vw, 3.25rem)",
            marginTop: "1.25rem",
            color: "#f0f4f8",
          }}
        >
          Educational{" "}
          <span className="text-shimmer">Background</span>
        </h2>
        <div style={{ width: "40px", height: "2px", background: "#00D4FF", margin: "1rem auto 0" }} />
      </div>

      {/* Timeline */}
      <div style={{ position: "relative", paddingLeft: "2rem" }}>
        {/* Vertical line */}
        <div
          style={{
            position: "absolute",
            left: "0",
            top: "10px",
            bottom: "10px",
            width: "1px",
            background: "linear-gradient(to bottom, rgba(0,212,255,0.5), rgba(0,212,255,0.1), transparent)",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {educationData.map((edu, i) => (
            <div
              key={edu.id}
              className="animate-slide-right"
              style={{ position: "relative", animationDelay: `${i * 0.15}s` }}
            >
              {/* Dot */}
              <div
                className="timeline-dot"
                style={{
                  position: "absolute",
                  left: "-2.35rem",
                  top: "1.6rem",
                }}
              />

              <div
                className="card-glass"
                style={{ padding: "2rem" }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1.25rem", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "2rem", flexShrink: 0 }}>{edu.icon}</span>
                  <div style={{ flex: 1, minWidth: "220px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.5rem" }}>
                      <div>
                        <h3
                          style={{
                            fontFamily: "'Outfit', sans-serif",
                            fontWeight: 700,
                            fontSize: "1.05rem",
                            color: "#e8edf2",
                            marginBottom: "0.25rem",
                          }}
                        >
                          {edu.institution}
                        </h3>
                        <p
                          style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: "0.72rem",
                            color: "#00D4FF",
                            letterSpacing: "0.05em",
                          }}
                        >
                          {edu.degree}
                        </p>
                      </div>
                      <span
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: "0.65rem",
                          color: "rgba(0,212,255,0.7)",
                          background: "rgba(0,212,255,0.07)",
                          border: "1px solid rgba(0,212,255,0.2)",
                          padding: "0.2rem 0.6rem",
                          borderRadius: "2px",
                          letterSpacing: "0.1em",
                          flexShrink: 0,
                        }}
                      >
                        {edu.status.toUpperCase()}
                      </span>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        marginBottom: "0.85rem",
                        color: "rgba(255,255,255,0.35)",
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.7rem",
                      }}
                    >
                      <Calendar size={12} />
                      {edu.duration}
                    </div>

                    <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.88rem", lineHeight: 1.65, marginBottom: "1rem" }}>
                      {edu.description}
                    </p>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
                      {edu.highlights.map((h) => (
                        <span key={h} className="skill-pill">{h}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Academic goals */}
      <div
        className="animate-fade-up card-glass text-center"
        style={{ padding: "2.5rem", marginTop: "3rem", animationDelay: "0.5s" }}
      >
        <GraduationCap size={32} style={{ color: "#00D4FF", margin: "0 auto 1rem" }} />
        <h3
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "1.4rem",
            color: "#e8edf2",
            marginBottom: "0.85rem",
          }}
        >
          Academic Goals
        </h3>
        <p
          style={{
            color: "rgba(255,255,255,0.45)",
            fontSize: "0.95rem",
            lineHeight: 1.8,
            maxWidth: "680px",
            margin: "0 auto",
          }}
        >
          Pursuing excellence in artificial intelligence and data science through hands-on
          projects, research opportunities, and continuous learning — bridging theoretical
          knowledge with practical real-world applications.
        </p>
      </div>
    </div>
  </section>
);

export default Education;

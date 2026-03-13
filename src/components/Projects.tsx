import { Heart, Sun, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    num: "01",
    title: "Cardiovascular Disease Detection",
    subtitle: "ML & Deep Learning · Healthcare",
    description:
      "Advanced analysis of ECG images using machine learning and deep learning techniques, ensuring improved accuracy, cost-effectiveness, and non-invasive diagnostics for early cardiovascular disease detection.",
    icon: <Heart size={22} />,
    iconColor: "#ff6b8a",
    technologies: ["Python", "CNN", "SqueezeNet", "Xception", "Deep Learning", "Medical Imaging"],
    features: [
      "ECG image analysis using advanced neural networks",
      "CNN, SqueezeNet, and Xception model comparison",
      "High accuracy disease detection pipeline",
      "Non-invasive, cost-effective diagnostic tool",
    ],
    impact: "Improved early detection accuracy for cardiovascular diseases",
    publication: "https://sciencexcel.com/article/detection-of-cardiovascular-diseases-in-ecg-images-using-machine-learning-and-deep-learning-methods",
    accentColor: "rgba(255,107,138,0.1)",
    borderColor: "rgba(255,107,138,0.2)",
  },
  {
    id: 2,
    num: "02",
    title: "Solar Radiation Forecasting",
    subtitle: "AI-Powered · Renewable Energy",
    description:
      "AI-powered system that predicts solar radiation levels using historical weather data, enabling efficient solar energy planning, storage, and utilization for sustainable power generation.",
    icon: <Sun size={22} />,
    iconColor: "#ffd166",
    technologies: ["Machine Learning", "Logistic Regression", "Decision Tree", "KNN", "SVM", "Python"],
    features: [
      "Historical weather data integration",
      "Multi-algorithm comparison & selection",
      "Meteorological parameter analysis",
      "Accurate solar irradiance forecasting",
    ],
    impact: "Enhanced solar energy planning for sustainable power generation",
    publication: null,
    accentColor: "rgba(255,209,102,0.08)",
    borderColor: "rgba(255,209,102,0.2)",
  },
];

const Projects = () => (
  <section id="projects" style={{ padding: "7rem 1.5rem", background: "hsl(220,25%,5.5%)" }}>
    <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
      {/* Header */}
      <div className="animate-fade-up text-center mb-16">
        <span className="label-tag">Featured Work</span>
        <h2
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(2rem, 5vw, 3.25rem)",
            marginTop: "1.25rem",
            color: "#f0f4f8",
          }}
        >
          Notable{" "}
          <span className="text-shimmer">Projects</span>
        </h2>
        <div style={{ width: "40px", height: "2px", background: "#00D4FF", margin: "1rem auto 0" }} />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        {projects.map((p, i) => (
          <div
            key={p.id}
            className="card-glass animate-scale-in"
            style={{
              padding: "2.5rem",
              background: p.accentColor,
              borderColor: p.borderColor,
              animationDelay: `${i * 0.15}s`,
            }}
          >
            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
              {/* Left: number + icon */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem", flexShrink: 0 }}>
                <span
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: "2.5rem",
                    color: "rgba(255,255,255,0.07)",
                    lineHeight: 1,
                  }}
                >
                  {p.num}
                </span>
                <div
                  style={{
                    width: "48px", height: "48px",
                    borderRadius: "10px",
                    background: `${p.iconColor}20`,
                    border: `1px solid ${p.iconColor}40`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: p.iconColor,
                  }}
                >
                  {p.icon}
                </div>
              </div>

              {/* Content */}
              <div style={{ flex: 1, minWidth: "260px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem", flexWrap: "wrap", gap: "0.5rem" }}>
                  <div>
                    <h3
                      style={{
                        fontFamily: "'DM Serif Display', serif",
                        fontSize: "1.6rem",
                        color: "#f0f4f8",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {p.title}
                    </h3>
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.7rem",
                        letterSpacing: "0.1em",
                        color: "#00D4FF",
                        textTransform: "uppercase",
                      }}
                    >
                      {p.subtitle}
                    </span>
                  </div>
                  {p.publication && (
                    <a
                      href={p.publication}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.68rem",
                        letterSpacing: "0.08em",
                        color: "#00D4FF",
                        background: "rgba(0,212,255,0.07)",
                        border: "1px solid rgba(0,212,255,0.25)",
                        padding: "0.35rem 0.85rem",
                        borderRadius: "3px",
                        textDecoration: "none",
                        transition: "background 0.2s",
                        flexShrink: 0,
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(0,212,255,0.14)")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(0,212,255,0.07)")}
                    >
                      <ExternalLink size={11} />
                      PUBLICATION
                    </a>
                  )}
                </div>

                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.95rem", lineHeight: 1.75, margin: "1rem 0 1.5rem" }}>
                  {p.description}
                </p>

                {/* Tech stack */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem", marginBottom: "1.5rem" }}>
                  {p.technologies.map((t) => (
                    <span key={t} className="skill-pill">{t}</span>
                  ))}
                </div>

                {/* Features */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                    gap: "0.5rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  {p.features.map((f, fi) => (
                    <div
                      key={fi}
                      style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}
                    >
                      <span
                        style={{
                          width: "5px", height: "5px",
                          borderRadius: "50%",
                          background: "#00D4FF",
                          flexShrink: 0,
                          marginTop: "0.45rem",
                        }}
                      />
                      <span style={{ fontSize: "0.84rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>
                        {f}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Impact */}
                <div
                  style={{
                    padding: "0.85rem 1.2rem",
                    borderRadius: "6px",
                    background: "rgba(0,212,255,0.05)",
                    border: "1px solid rgba(0,212,255,0.15)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.65rem",
                      letterSpacing: "0.14em",
                      color: "#00D4FF",
                      textTransform: "uppercase",
                      display: "block",
                      marginBottom: "0.3rem",
                    }}
                  >
                    Impact
                  </span>
                  <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.5)" }}>{p.impact}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* GitHub CTA */}
      <div className="animate-fade-up text-center mt-12" style={{ animationDelay: "0.4s" }}>
        <p style={{ color: "rgba(255,255,255,0.3)", marginBottom: "1rem", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", letterSpacing: "0.1em" }}>
          MORE PROJECTS AVAILABLE ON GITHUB
        </p>
        <a
          href="https://github.com/muqeeth-byte"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.75rem",
            letterSpacing: "0.1em",
            color: "rgba(255,255,255,0.6)",
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.12)",
            padding: "0.7rem 1.5rem",
            borderRadius: "4px",
            textDecoration: "none",
            transition: "border-color 0.2s, color 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.28)";
            (e.currentTarget as HTMLElement).style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)";
            (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)";
          }}
        >
          <Github size={15} />
          VIEW GITHUB PORTFOLIO
        </a>
      </div>
    </div>
  </section>
);

export default Projects;

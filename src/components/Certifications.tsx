
```tsx
import { Award, ExternalLink, Star } from "lucide-react";

const certifications = [
  {
    id: 1,
    title: "Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    category: "Cloud Computing",
    description: "Certified in cloud concepts, Azure services, and solutions architecture fundamentals.",
    level: "Fundamental",
    skills: ["Azure Services", "Cloud Computing", "Microsoft Cloud"],
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    featured: true,
    accent: "#0078D4",
  },
  {
    id: 2,
    title: "Cloud Computing",
    issuer: "NPTEL",
    category: "Cloud Technologies",
    description: "ELITE-level certification covering advanced cloud computing concepts and distributed systems.",
    level: "Elite",
    skills: ["Cloud Architecture", "Distributed Systems", "Scalability"],
    logo: "https://upload.wikimedia.org/wikipedia/en/b/b9/NPTEL_logo.png",
    featured: true,
    accent: "#2ecc71",
  },
  {
    id: 3,
    title: "Python for Data Science",
    issuer: "NPTEL",
    category: "Data Science",
    description: "Comprehensive Python programming for data science applications and scientific computing.",
    level: "Intermediate",
    skills: ["Python", "Data Analysis", "Scientific Computing"],
    logo: "https://upload.wikimedia.org/wikipedia/en/b/b9/NPTEL_logo.png",
    featured: true,
    accent: "#f39c12",
  },
  {
    id: 4,
    title: "Introduction to Machine Learning",
    issuer: "Infosys Springboard",
    category: "Machine Learning",
    description: "Foundational ML algorithms, supervised learning, and model training concepts.",
    level: "Beginner",
    skills: ["ML Algorithms", "Supervised Learning", "Model Training"],
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
    featured: false,
    accent: "#9b59b6",
  },
  {
    id: 5,
    title: "Basics of Python",
    issuer: "Infosys Springboard",
    category: "Programming",
    description: "Python programming fundamentals, data structures, and best practices.",
    level: "Beginner",
    skills: ["Python Syntax", "Data Structures", "OOP"],
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
    featured: false,
    accent: "#3498db",
  },
  {
    id: 6,
    title: "Python (Basic)",
    issuer: "HackerRank",
    category: "Programming",
    description: "Validated Python skills through practical coding challenges.",
    level: "Basic",
    skills: ["Problem Solving", "Python Fundamentals", "Algorithms"],
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
    featured: false,
    accent: "#2ecc71",
  },
  {
    id: 7,
    title: "Java (Basic)",
    issuer: "HackerRank",
    category: "Programming",
    description: "Basic Java proficiency through coding assessments.",
    level: "Basic",
    skills: ["Java Syntax", "OOP Concepts", "Problem Solving"],
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
    featured: false,
    accent: "#e74c3c",
  },
  {
    id: 8,
    title: "SQL (Basic)",
    issuer: "HackerRank",
    category: "Database",
    description: "SQL fundamentals and database querying skills validation.",
    level: "Basic",
    skills: ["SQL Queries", "Database Design", "Data Manipulation"],
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
    featured: false,
    accent: "#00D4FF",
  },
];

const featured = certifications.filter((c) => c.featured);
const others = certifications.filter((c) => !c.featured);

const Certifications = () => (
  <section id="certifications" style={{ padding: "7rem 1.5rem", background: "hsl(220,25%,5.5%)" }}>
    <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
      <div className="animate-fade-up text-center mb-16">
        <span className="label-tag">Professional Credentials</span>
        <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(2rem, 5vw, 3.25rem)", marginTop: "1.25rem", color: "#f0f4f8" }}>
          Certifications & <span className="text-shimmer">Achievements</span>
        </h2>
        <div style={{ width: "40px", height: "2px", background: "#00D4FF", margin: "1rem auto 0" }} />
      </div>

      {/* Featured */}
      <div style={{ marginBottom: "3.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1.5rem" }}>
          <Star size={16} style={{ color: "#00D4FF" }} />
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", letterSpacing: "0.14em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>
            Featured Certifications
          </span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.25rem" }}>
          {featured.map((cert, i) => (
            <div key={cert.id} className="card-glass animate-scale-in" style={{ padding: "1.75rem", animationDelay: `${i * 0.1}s`, borderTop: `2px solid ${cert.accent}50` }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <img
                    src={cert.logo}
                    alt={cert.issuer}
                    style={{ width: "36px", height: "36px", objectFit: "contain", filter: "brightness(0) invert(1)", flexShrink: 0 }}
                  />
                  <div>
                    <h4 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: "0.95rem", color: "#e8edf2", marginBottom: "0.15rem" }}>
                      {cert.title}
                    </h4>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.68rem", color: cert.accent, letterSpacing: "0.05em" }}>
                      {cert.issuer}
                    </span>
                  </div>
                </div>
                <ExternalLink size={14} style={{ color: "rgba(255,255,255,0.2)", flexShrink: 0, cursor: "pointer" }} />
              </div>
              <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.85rem" }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.12em", textTransform: "uppercase", color: cert.accent, background: `${cert.accent}15`, border: `1px solid ${cert.accent}35`, padding: "0.2rem 0.6rem", borderRadius: "2px" }}>
                  {cert.level}
                </span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", padding: "0.2rem 0.6rem", borderRadius: "2px" }}>
                  {cert.category}
                </span>
              </div>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.82rem", lineHeight: 1.65, marginBottom: "1rem" }}>
                {cert.description}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {cert.skills.map((s) => (
                  <span key={s} className="skill-pill">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Others */}
      <div className="animate-fade-up" style={{ animationDelay: "0.35s" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1.5rem" }}>
          <Award size={16} style={{ color: "rgba(255,255,255,0.4)" }} />
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", letterSpacing: "0.14em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>
            Additional Certifications
          </span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "0.85rem" }}>
          {others.map((cert) => (
            <div key={cert.id} className="card-glass" style={{ padding: "1.25rem", display: "flex", alignItems: "center", gap: "1rem" }}>
              <img
                src={cert.logo}
                alt={cert.issuer}
                style={{ width: "28px", height: "28px", objectFit: "contain", filter: "brightness(0) invert(1)", flexShrink: 0 }}
              />
              <div style={{ flex: 1, minWidth: 0 }}>
                <h5 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: "0.88rem", color: "#e8edf2", marginBottom: "0.15rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {cert.title}
                </h5>
                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: cert.accent, letterSpacing: "0.05em" }}>
                  {cert.issuer}
                </p>
              </div>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.58rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", padding: "0.18rem 0.5rem", borderRadius: "2px", flexShrink: 0 }}>
                {cert.level}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="animate-fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem", marginTop: "3.5rem", animationDelay: "0.55s" }}>
        {[
          { val: "8", label: "Certifications" },
          { val: "4", label: "Tech Areas" },
          { val: "3", label: "Featured" },
          { val: "2025", label: "Latest Year" },
        ].map((stat, i) => (
          <div key={i} className="card-glass text-center" style={{ padding: "1.5rem 1rem" }}>
            <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: "2rem", color: "#00D4FF", lineHeight: 1, marginBottom: "0.5rem" }}>
              {stat.val}
            </div>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.1em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase" }}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
```


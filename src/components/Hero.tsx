import { useState, useEffect } from "react";
import { Download, Mail, Linkedin, MapPin, ArrowDown } from "lucide-react";

const ROLES = ["Data Scientist", "ML Engineer", "AI Researcher", "Problem Solver"];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = ROLES[roleIndex];
    let i = typing ? displayed.length : displayed.length;
    if (typing) {
      if (displayed.length < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 80);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ paddingTop: "80px" }}
    >
      {/* Orbs */}
      <div
        className="orb"
        style={{
          width: "500px", height: "500px",
          background: "rgba(0,212,255,0.06)",
          top: "10%", left: "60%",
          animationDelay: "0s",
        }}
      />
      <div
        className="orb"
        style={{
          width: "350px", height: "350px",
          background: "rgba(0,150,200,0.05)",
          top: "50%", left: "5%",
          animationDelay: "7s",
        }}
      />

      <div className="max-w-5xl mx-auto px-6 py-20 text-center relative z-10">
        {/* Label */}
        <div className="animate-fade-up" style={{ animationDelay: "0.05s" }}>
          <span className="label-tag">Available for opportunities</span>
        </div>

        {/* Name */}
        <h1
          className="animate-fade-up"
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(2.8rem, 8vw, 6rem)",
            lineHeight: 1.05,
            marginTop: "2rem",
            marginBottom: "1.25rem",
            color: "#f0f4f8",
            animationDelay: "0.15s",
          }}
        >
          Mohammad Abdul
          <br />
          <span className="text-shimmer">Muqeeth</span>
        </h1>

        {/* Typewriter */}
        <div
          className="animate-fade-up"
          style={{
            animationDelay: "0.25s",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "clamp(1rem, 2.5vw, 1.35rem)",
            color: "#00D4FF",
            marginBottom: "1.75rem",
            minHeight: "2rem",
            letterSpacing: "0.04em",
          }}
        >
          {displayed}
          <span className="cursor-blink" />
        </div>

        {/* Bio */}
        <p
          className="animate-fade-up"
          style={{
            animationDelay: "0.35s",
            maxWidth: "640px",
            margin: "0 auto 2.5rem",
            color: "rgba(255,255,255,0.5)",
            fontSize: "1.05rem",
            lineHeight: 1.75,
            fontFamily: "'Outfit', sans-serif",
          }}
        >
          Results-driven data enthusiast with hands-on experience in machine
          learning, statistical modeling, and dashboard development. Passionate
          about transforming raw data into real-world solutions.
        </p>

        {/* Contact chips */}
        <div
          className="animate-fade-up flex flex-wrap justify-center gap-5 mb-10"
          style={{ animationDelay: "0.45s" }}
        >
          {[
            { icon: <MapPin size={13} />, text: "Hyderabad, India" },
            { icon: <Mail size={13} />, text: "abdulmuqeeth04@gmail.com" },
          ].map((item, i) => (
            <span
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.72rem",
                color: "rgba(255,255,255,0.4)",
                letterSpacing: "0.05em",
              }}
            >
              <span style={{ color: "#00D4FF" }}>{item.icon}</span>
              {item.text}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div
          className="animate-fade-up flex flex-wrap justify-center gap-4 mb-14"
          style={{ animationDelay: "0.55s" }}
        >
          <button
            href="https://drive.google.com/uc?export=download&id=1C1S37nVidsrVXfFG3U4dc126ZQ2yK1WL"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              color: "hsl(220,30%,4%)",
              background: "#00D4FF",
              border: "none",
              padding: "0.75rem 1.75rem",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: "8px",
              textDecoration: "none",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px -4px rgba(0,212,255,0.45)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            <Download size={14} />
            DOWNLOAD CV
          </button>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=abdulmuqeeth04@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              color: "#00D4FF",
              background: "transparent",
              border: "1px solid rgba(0,212,255,0.4)",
              padding: "0.75rem 1.75rem",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: "8px",
              transition: "background 0.2s, transform 0.2s",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(0,212,255,0.08)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            <Mail size={14} />
            GET IN TOUCH
          </a>

          <a
            href="http://www.linkedin.com/in/mohd-abdul-muqeeth"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              color: "rgba(255,255,255,0.55)",
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.12)",
              padding: "0.75rem 1.75rem",
              borderRadius: "4px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              transition: "border-color 0.2s, color 0.2s",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.3)";
              (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.9)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)";
              (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)";
            }}
          >
            <Linkedin size={14} />
            LINKEDIN
          </a>
        </div>

        {/* Tech stack */}
        <div
          className="animate-fade-up flex flex-wrap justify-center gap-2"
          style={{ animationDelay: "0.65s" }}
        >
          {["Python", "TensorFlow", "SQL", "Machine Learning", "Deep Learning", "Data Viz"].map((t) => (
            <span key={t} className="skill-pill">{t}</span>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "rgba(255,255,255,0.2)" }}
      >
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.2em" }}>
          SCROLL
        </span>
        <ArrowDown size={14} className="animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;

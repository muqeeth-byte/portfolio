import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const contactInfo = [
  { icon: <Mail size={18} />, label: "Email", value: "abdulmuqeeth04@gmail.com", href: "https://mail.google.com/mail/?view=cm&fs=1&to=abdulmuqeeth04@gmail.com", primary: true },
  { icon: <Phone size={18} />, label: "Phone", value: "+91 9948094778", href: "tel:+919948094778", primary: false },
  { icon: <MapPin size={18} />, label: "Location", value: "Hyderabad, Telangana, India", href: null, primary: false },
  { icon: <Linkedin size={18} />, label: "LinkedIn", value: "mohd-abdul-muqeeth", href: "http://www.linkedin.com/in/mohd-abdul-muqeeth", primary: true },
];

const availability = [
  { role: "Data Science Roles", desc: "Junior Data Scientist, ML Engineer" },
  { role: "Collaboration", desc: "Open Source, Research Projects" },
  { role: "Consulting", desc: "ML Solutions, Data Analysis" },
];

const Contact = () => (
  <section id="contact" style={{ padding: "7rem 1.5rem", background: "hsl(220,30%,4%)" }}>
    <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
      {/* Header */}
      <div className="animate-fade-up text-center mb-16">
        <span className="label-tag">Get In Touch</span>
        <h2
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(2rem, 5vw, 3.25rem)",
            marginTop: "1.25rem",
            color: "#f0f4f8",
          }}
        >
          Let's{" "}
          <span className="text-shimmer">Connect</span>
        </h2>
        <div style={{ width: "40px", height: "2px", background: "#00D4FF", margin: "1rem auto 0" }} />
        <p style={{ color: "rgba(255,255,255,0.4)", marginTop: "1.25rem", fontSize: "1rem", maxWidth: "500px", margin: "1.25rem auto 0" }}>
          Open to discussing data science opportunities, collaborative projects, and innovative solutions.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}
        className="grid-cols-1 lg:grid-cols-2"
      >
        {/* Left */}
       {/* Left */}
        <div className="animate-slide-right" style={{ animationDelay: "0.1s" }}>
          <h3
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.72rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)",
              marginBottom: "1.25rem",
            }}
          >
            Contact Information
          </h3>
          

          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2.5rem" }}>
            {contactInfo.map((item, i) => (
              <div
                key={i}
                className="card-glass"
                style={{
                  padding: "1.1rem 1.4rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  borderLeft: item.primary ? "2px solid rgba(0,212,255,0.4)" : "2px solid transparent",
                }}
              >
                <span style={{ color: item.primary ? "#00D4FF" : "rgba(255,255,255,0.3)", flexShrink: 0 }}>
                  {item.icon}
                </span>
                <div>
                  <p
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.62rem",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.3)",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.label === "LinkedIn" ? "_blank" : undefined}
                      rel={item.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                      style={{
                        color: item.primary ? "#e8edf2" : "rgba(255,255,255,0.65)",
                        fontSize: "0.9rem",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#00D4FF")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = item.primary ? "#e8edf2" : "rgba(255,255,255,0.65)")}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem" }}>{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Availability */}
          <h3
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.72rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.35)",
              marginBottom: "1rem",
            }}
          >
            Open To
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {availability.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "0.75rem 1.1rem",
                  background: "rgba(0,212,255,0.04)",
                  border: "1px solid rgba(0,212,255,0.1)",
                  borderRadius: "6px",
                }}
              >
                <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: "0.88rem", color: "#e8edf2" }}>
                  {item.role}
                </span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.68rem", color: "rgba(255,255,255,0.35)" }}>
                  {item.desc}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: CTA card */}
        <div className="animate-scale-in" style={{ animationDelay: "0.2s" }}>
          <div
            className="card-glass"
            style={{ padding: "3rem 2.5rem", textAlign: "center" }}
          >
            <div
              style={{
                width: "64px", height: "64px",
                borderRadius: "50%",
                background: "rgba(0,212,255,0.08)",
                border: "1px solid rgba(0,212,255,0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1.5rem",
                color: "#00D4FF",
              }}
            >
              <Mail size={26} />
            </div>

            <h3
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "1.6rem",
                color: "#e8edf2",
                marginBottom: "0.85rem",
              }}
            >
              Ready to Collaborate?
            </h3>
            <p
              style={{
                color: "rgba(255,255,255,0.4)",
                fontSize: "0.92rem",
                lineHeight: 1.75,
                marginBottom: "2rem",
              }}
            >
              Always excited to discuss new opportunities, innovative projects, or any data science
              challenges you're working on.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=abdulmuqeeth04@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  color: "hsl(220,30%,4%)",
                  background: "#00D4FF",
                  padding: "0.85rem",
                  borderRadius: "4px",
                  textDecoration: "none",
                  fontWeight: 700,
                  transition: "opacity 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = "0.88";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = "1";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                <Mail size={14} />
                SEND EMAIL
              </a>

              <a
                href="http://www.linkedin.com/in/mohd-abdul-muqeeth"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  color: "#00D4FF",
                  background: "transparent",
                  border: "1px solid rgba(0,212,255,0.35)",
                  padding: "0.85rem",
                  borderRadius: "4px",
                  textDecoration: "none",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(0,212,255,0.07)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "transparent")}
              >
                <Linkedin size={14} />
                CONNECT ON LINKEDIN
              </a>

              <a
                href="https://github.com/muqeeth-byte"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  color: "rgba(255,255,255,0.4)",
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.09)",
                  padding: "0.85rem",
                  borderRadius: "4px",
                  textDecoration: "none",
                  transition: "color 0.2s, border-color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.75)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.4)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.09)";
                }}
              >
                <Github size={14} />
                GITHUB PROFILE
              </a>
            </div>

            <p
              style={{
                marginTop: "1.5rem",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.08em",
                color: "rgba(255,255,255,0.25)",
              }}
            >
              ⚡ Response time: Usually within 24 hours
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;

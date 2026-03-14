import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Certs", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: isScrolled ? "rgba(10,13,20,0.88)" : "transparent",
        backdropFilter: isScrolled ? "blur(16px)" : "none",
        borderBottom: isScrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.75rem",
                color: "#00D4FF",
                letterSpacing: "0.15em",
              }}
            >
              MAM
            </span>
            <span
              style={{
                width: "1px",
                height: "14px",
                background: "rgba(0,212,255,0.35)",
              }}
            />
            <span
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.85rem",
                fontWeight: 500,
                color: "rgba(255,255,255,0.7)",
                letterSpacing: "0.02em",
              }}
              className="group-hover:text-white transition-colors"
            >
              Turning Data into Decisions
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.72rem",
                  letterSpacing: "0.1em",
                  color: "rgba(255,255,255,0.5)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  transition: "color 0.2s",
                  textTransform: "uppercase",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#00D4FF")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              className="btn-outline-cyan"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.7rem",
                letterSpacing: "0.08em",
                color: "#00D4FF",
                border: "1px solid rgba(0,212,255,0.35)",
                background: "transparent",
                padding: "0.4rem 1rem",
                borderRadius: "3px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                transition: "background 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(0,212,255,0.08)";
                e.currentTarget.style.borderColor = "rgba(0,212,255,0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "rgba(0,212,255,0.35)";
              }}
            >
              <Download size={12} />
              RESUME
            </button>
            <button
              onClick={() => scrollToSection("#contact")}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.7rem",
                letterSpacing: "0.08em",
                color: "hsl(220,30%,4%)",
                background: "#00D4FF",
                border: "none",
                padding: "0.4rem 1rem",
                borderRadius: "3px",
                cursor: "pointer",
                fontWeight: 600,
                transition: "opacity 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.85";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              CONTACT
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden"
            style={{ color: "rgba(255,255,255,0.7)", background: "none", border: "none", cursor: "pointer" }}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div
            style={{
              background: "rgba(10,13,20,0.97)",
              borderTop: "1px solid rgba(255,255,255,0.06)",
              padding: "1rem 0 1.5rem",
            }}
          >
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  padding: "0.6rem 0",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.75rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.6)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

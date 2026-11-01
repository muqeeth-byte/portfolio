import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { Menu, X, Download } from "lucide-react";

const CV_URL = "https://drive.google.com/uc?export=download&id=1C1S37nVidsrVXfFG3U4dc126ZQ2yK1WL";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Education", id: "education" },
  { label: "Certs", id: "certifications" },
  { label: "Contact", id: "contact" },
];

const Navigation = () => {
  const [active, setActive] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoHover, setLogoHover] = useState(false);
  const [pill, setPill] = useState({ left: 0, width: 0, opacity: 0 });
  const btnRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const wrapRef = useRef<HTMLDivElement>(null);

  // Track scroll position: which section is active + navbar background
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
      const probe = window.scrollY + window.innerHeight * 0.35;
      let current = "home";
      for (const item of navItems) {
        if (item.id === "home") continue;
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top + window.scrollY <= probe) {
          current = item.id;
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Slide the pill under the active item
  useLayoutEffect(() => {
    const update = () => {
      const btn = btnRefs.current[active];
      const wrap = wrapRef.current;
      if (!btn || !wrap) return;
      const b = btn.getBoundingClientRect();
      const w = wrap.getBoundingClientRect();
      setPill({ left: b.left - w.left, width: b.width, opacity: 1 });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [active]);

  const go = (id: string) => {
    setMenuOpen(false);
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const logoBase: React.CSSProperties = {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "0.75rem",
    letterSpacing: "0.15em",
    whiteSpace: "nowrap",
    display: "block",
    transition: "transform 0.4s ease, opacity 0.4s ease",
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: isScrolled ? "rgba(10,13,20,0.88)" : "transparent",
        backdropFilter: isScrolled ? "blur(16px)" : "none",
        borderBottom: isScrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        transition: "background 0.3s, border-color 0.3s",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo: hover flips ABDUL MUQEETH to DEVELOPER */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); go("home"); }}
            style={{ textDecoration: "none", flexShrink: 0 }}
          >
            <span
              onMouseEnter={() => setLogoHover(true)}
              onMouseLeave={() => setLogoHover(false)}
              style={{
                position: "relative",
                display: "inline-block",
                height: "1.3em",
                minWidth: "11.5rem",
                perspective: "400px",
                cursor: "default",
              }}
            >
              <span
                style={{
                  ...logoBase,
                  color: "#00D4FF",
                  transform: logoHover ? "rotateX(90deg)" : "rotateX(0deg)",
                  opacity: logoHover ? 0 : 1,
                }}
              >
                ABDUL MUQEETH
              </span>
              <span
                style={{
                  ...logoBase,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  color: "#ffffff",
                  transform: logoHover ? "rotateX(0deg)" : "rotateX(-90deg)",
                  opacity: logoHover ? 1 : 0,
                }}
              >
                DEVELOPER
              </span>
            </span>
          </a>

          {/* Floating pill nav (desktop) */}
          <div
            ref={wrapRef}
            className="hidden md:flex items-center relative"
            style={{
              background: "rgba(18,20,30,0.75)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "999px",
              padding: "6px",
            }}
          >
            {/* Sliding indicator */}
            <span
              aria-hidden
              style={{
                position: "absolute",
                top: "6px",
                bottom: "6px",
                left: `${pill.left}px`,
                width: `${pill.width}px`,
                opacity: pill.opacity,
                borderRadius: "999px",
                background: "rgba(139,92,246,0.22)",
                border: "1px solid rgba(139,92,246,0.55)",
                boxShadow: "0 0 18px rgba(139,92,246,0.25)",
                transition: "left 0.45s cubic-bezier(0.22,1,0.36,1), width 0.45s cubic-bezier(0.22,1,0.36,1)",
                pointerEvents: "none",
              }}
            />
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <button
                  key={item.id}
                  ref={(el) => { btnRefs.current[item.id] = el; }}
                  onClick={() => go(item.id)}
                  style={{
                    position: "relative",
                    zIndex: 1,
                    padding: "0.45rem 1rem",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.72rem",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: isActive ? "#ffffff" : "rgba(255,255,255,0.5)",
                    background: "none",
                    border: "none",
                    borderRadius: "999px",
                    cursor: "pointer",
                    transition: "color 0.3s",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = "rgba(255,255,255,0.85)"; }}
                  onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Right: resume (desktop) */}
          <a
            href={CV_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.7rem",
              letterSpacing: "0.08em",
              color: "#00D4FF",
              border: "1px solid rgba(0,212,255,0.35)",
              padding: "0.4rem 1rem",
              borderRadius: "999px",
              textDecoration: "none",
              flexShrink: 0,
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
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
            style={{ color: "rgba(255,255,255,0.8)", background: "none", border: "none", cursor: "pointer" }}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            style={{
              background: "rgba(10,13,20,0.97)",
              borderTop: "1px solid rgba(255,255,255,0.06)",
              padding: "1rem 0 1.5rem",
              borderRadius: "0 0 16px 16px",
            }}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  padding: "0.6rem 0.5rem",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.75rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: active === item.id ? "#ffffff" : "rgba(255,255,255,0.6)",
                  background: active === item.id ? "rgba(139,92,246,0.18)" : "none",
                  border: "none",
                  borderRadius: "8px",
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

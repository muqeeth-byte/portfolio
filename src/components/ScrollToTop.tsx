import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        width: "44px",
        height: "44px",
        borderRadius: "50%",
        background: "#00D4FF",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "hsl(220,30%,4%)",
        boxShadow: "0 4px 24px rgba(0,212,255,0.4)",
        transition: "opacity 0.3s, transform 0.3s",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        pointerEvents: visible ? "auto" : "none",
        zIndex: 100,
      }}
    >
      <ArrowUp size={18} />
    </button>
  );
};

export default ScrollToTop;

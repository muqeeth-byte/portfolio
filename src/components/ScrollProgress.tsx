import { useState, useEffect } from "react";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress((scrollTop / docHeight) * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: `${progress}%`,
        height: "2px",
        background: "linear-gradient(90deg, #00D4FF, #7DF9FF)",
        zIndex: 9999,
        transition: "width 0.1s ease",
        boxShadow: "0 0 8px rgba(0,212,255,0.6)",
      }}
    />
  );
};

export default ScrollProgress;

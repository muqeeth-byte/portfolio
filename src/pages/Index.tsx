import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollProgress from "@/components/ScrollProgress";
const Footer = () => (
  <footer
    style={{
      padding: "2.5rem 1.5rem",
      borderTop: "1px solid rgba(255,255,255,0.05)",
      background: "hsl(220,30%,3.5%)",
      textAlign: "center",
    }}
  >
    <p
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "0.65rem",
        letterSpacing: "0.14em",
        color: "rgba(255,255,255,0.2)",
        textTransform: "uppercase",
      }}
    >
      © 2025 Mohammad Abdul Muqeeth · Built with React & TypeScript
    </p>
  </footer>
);

const Index = () => (
  <div style={{ minHeight: "100vh", background: "hsl(220,30%,4%)" }}>
    <Navigation />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Education />
    <Certifications />
    <Contact />
    <Footer />
    <ScrollToTop />
    <ScrollProgress />
  </div>
);

export default Index;

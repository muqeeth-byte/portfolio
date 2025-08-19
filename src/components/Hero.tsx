import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Mail, Linkedin, Phone, MapPin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(59, 130, 246, 0.95), rgba(16, 185, 129, 0.95)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-glow"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-primary-glow/20 rounded-full blur-xl animate-glow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent-glow/30 rounded-full blur-lg animate-glow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        <div className="text-center animate-fade-in">
            <Badge variant="skill" className="mb-4 text-base px-4 py-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"">
              Data Scientist & ML Engineer
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {" "}
              <span className="bg-gradient-to-r from-accent-glow to-white bg-clip-text text-transparent">
               Mohammad Abdul Muqeeth
              </span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              Results-driven data enthusiast with hands-on experience in machine learning, 
              statistical modeling, and dashboard development. Passionate about solving 
              real-world problems through data-driven insights.
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-4 mb-8 text-white/80">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Hyderabad, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>abdulmuqeeth04@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91-9948094778</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Button variant="hero" size="lg" className="group">
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download CV
              </Button>
              <Button variant="accent" size="lg" className="group">
                <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Get In Touch
              </Button>
              <Button 
                variant="hero" 
                size="lg" 
                className="border-white/30 text-white hover:bg-white/10 group"
                asChild
              >
                <a href="http://www.linkedin.com/in/mohd-abdul-muqeeth" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  LinkedIn
                </a>
              </Button>
            </div>

            {/* Tech Stack Preview */}
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="tech">Python</Badge>
              <Badge variant="tech">Machine Learning</Badge>
              <Badge variant="tech">SQL</Badge>
              <Badge variant="tech">TensorFlow</Badge>
              <Badge variant="tech">Data Visualization</Badge>
            </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-white/30 rounded-full">
          <div className="w-1 h-8 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

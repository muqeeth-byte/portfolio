import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Mail, Linkedin, Phone, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/5 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto px-6 py-24 text-center">

        <Badge className="mb-6 bg-muted text-muted-foreground px-4 py-2">
          Data Scientist • ML Engineer
        </Badge>

        {/* Name */}
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6">
          Mohammad Abdul Muqeeth
        </h1>

        {/* Description */}
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
          Results-driven data enthusiast with hands-on experience in machine
          learning, statistical modeling, and dashboard development.
          Passionate about solving real-world problems through
          data-driven insights.
        </p>

        {/* Contact */}
        <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm text-muted-foreground">

          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Hyderabad, India
          </div>

          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            abdulmuqeeth04@gmail.com
          </div>

          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            +91-9948094778
          </div>

        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">

          <Button className="bg-white text-black hover:scale-105 transition">
            <Download className="w-5 h-5 mr-2" />
            Download CV
          </Button>

          <Button
            variant="outline"
            asChild
            className="hover:bg-muted"
          >
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=abdulmuqeeth04@gmail.com"
              target="_blank"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </a>
          </Button>

          <Button
            variant="outline"
            asChild
            className="hover:bg-muted"
          >
            <a
              href="http://www.linkedin.com/in/mohd-abdul-muqeeth"
              target="_blank"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
          </Button>

        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap justify-center gap-2">

          <Badge variant="secondary">Python</Badge>
          <Badge variant="secondary">Machine Learning</Badge>
          <Badge variant="secondary">SQL</Badge>
          <Badge variant="secondary">TensorFlow</Badge>
          <Badge variant="secondary">Data Visualization</Badge>

        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">

        <div className="w-[2px] h-14 bg-border relative overflow-hidden">
          <div className="absolute w-full h-6 bg-white animate-bounce" />
        </div>

      </div>

    </section>
  );
};

export default Hero;

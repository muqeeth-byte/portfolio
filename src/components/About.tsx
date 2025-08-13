import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Target, Users, Code } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI & Machine Learning",
      description: "Advanced expertise in ML algorithms, deep learning, and neural networks"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Data-Driven Solutions",
      description: "Building end-to-end projects that solve real-world problems with data"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "Strong communication skills and experience working in collaborative environments"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Technical Excellence",
      description: "Proficient in Python, SQL, and modern ML frameworks for robust solutions"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="skill" className="mb-4 text-base px-4 py-2">
            About Me
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            Passionate About{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Data Science
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a dedicated data science professional currently pursuing my Bachelor's in 
            Artificial Intelligence and Data Science at Vignan Institute of Technology and Science.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in">
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                My passion for data science began during my studies, where I discovered the power 
                of machine learning to transform raw data into actionable insights. I've since 
                developed expertise in statistical modeling, dashboard development, and building 
                end-to-end ML solutions.
              </p>
              <p>
                With hands-on experience in projects ranging from cardiovascular disease detection 
                using deep learning to solar radiation forecasting, I've learned to apply cutting-edge 
                algorithms to solve real-world challenges.
              </p>
              <p>
                My goal is to leverage my technical skills and innovative mindset to contribute to 
                meaningful projects that drive data-backed decision making and organizational growth.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {highlights.map((item, index) => (
              <Card key={index} className="hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 text-accent-foreground">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Professional Objective */}
        <Card className="bg-gradient-card border-0 animate-scale-in" style={{ animationDelay: '0.5s' }}>
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">Professional Objective</h3>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              Seeking a Data Analyst or ML Intern role to apply Python, SQL, and visualization 
              skills to solve real-world problems and drive data-backed decisions. Looking for 
              a creative and challenging position that offers opportunities for self-improvement 
              while contributing to organizational growth through technical innovation and 
              logical problem-solving.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
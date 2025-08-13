import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Users, Brain, ChartBar } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Programming Languages",
      skills: ["Python", "C", "Java (Basic)", "SQL"],
      color: "primary"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Machine Learning",
      skills: ["Statistical Modeling", "Deep Learning", "CNN", "Neural Networks", "Regression Models"],
      color: "accent"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Frontend Technologies",
      skills: ["HTML5", "CSS3", "Responsive Design"],
      color: "primary"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data & Analytics",
      skills: ["SQL", "Data Visualization", "Dashboard Development", "Statistical Analysis"],
      color: "accent"
    },
    {
      icon: <ChartBar className="w-6 h-6" />,
      title: "Tools & Frameworks",
      skills: ["TensorFlow", "Scikit-learn", "GitHub", "Jupyter Notebooks", "SqueezeNet", "Xception"],
      color: "primary"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Soft Skills",
      skills: ["Critical Thinking", "Communication", "Team Collaboration", "Problem Solving"],
      color: "accent"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="skill" className="mb-4 text-base px-4 py-2">
            Technical Expertise
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            Skills &{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for modern data science and machine learning challenges
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="hover:scale-105 transition-all duration-300 animate-scale-in border-0 bg-gradient-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    category.color === 'primary' ? 'bg-gradient-hero' : 'bg-gradient-accent'
                  } text-white`}>
                    {category.icon}
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant={category.color === 'primary' ? 'tech' : 'skill'}
                      className="text-sm hover:scale-105 transition-transform cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Highlighted Technologies */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <h3 className="text-2xl font-semibold mb-6">Currently Exploring</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="skill" className="text-base px-4 py-2 hover:scale-105 transition-transform">
              Advanced Deep Learning
            </Badge>
            <Badge variant="tech" className="text-base px-4 py-2 hover:scale-105 transition-transform">
              Computer Vision
            </Badge>
            <Badge variant="skill" className="text-base px-4 py-2 hover:scale-105 transition-transform">
              Natural Language Processing
            </Badge>
            <Badge variant="tech" className="text-base px-4 py-2 hover:scale-105 transition-transform">
              MLOps
            </Badge>
            <Badge variant="skill" className="text-base px-4 py-2 hover:scale-105 transition-transform">
              Cloud Platforms
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
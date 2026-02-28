import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Sun, Github, ExternalLink, TrendingUp } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Cardiovascular Disease Detection",
      subtitle: "ML & Deep Learning for Healthcare",
      description: "Advanced analysis of ECG images using machine learning and deep learning techniques, ensuring improved accuracy, cost-effectiveness, and non-invasive diagnostics for early cardiovascular disease detection.",
      icon: <Heart className="w-8 h-8" />,
      technologies: ["Python", "CNN", "SqueezeNet", "Xception", "Deep Learning", "Medical Imaging"],
      publication: "https://sciencexcel.com/article/detection-of-cardiovascular-diseases-in-ecg-images-using-machine-learning-and-deep-learning-methods",
      features: [
        "ECG image analysis using advanced neural networks",
        "CNN, SqueezeNet, and Xception model implementation",
        "High accuracy disease detection algorithms",
        "Cost-effective and non-invasive diagnostic solution"
      ],
      impact: "Improved early detection accuracy for cardiovascular diseases",
      gradientClass: "from-red-500/20 to-pink-500/20",
      iconBg: "from-red-500 to-pink-500"
    },
    {
      id: 2,
      title: "Solar Radiation Forecasting",
      subtitle: "AI-Powered Renewable Energy Optimization",
      description: "AI-powered system that predicts solar radiation levels using historical weather data, enabling efficient solar energy planning, storage, and utilization for sustainable power generation.",
      icon: <Sun className="w-8 h-8" />,
      technologies: ["Machine Learning", "Logistic Regression", "Decision Tree", "KNN", "SVM", "Python"],
      features: [
        "Historical weather data analysis",
        "Multiple ML algorithms (Logistic Regression, Decision Tree, KNN, SVM)",
        "Meteorological parameter integration (temperature, humidity, wind speed)",
        "Accurate solar irradiance forecasting"
      ],
      impact: "Enhanced solar energy planning and sustainable power generation",
      gradientClass: "from-yellow-500/20 to-orange-500/20",
      iconBg: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="skill" className="mb-4 text-base px-4 py-2">
            Featured Work
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            Notable{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world applications of machine learning and data science to solve complex problems
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className={`overflow-hidden border-0 bg-gradient-to-br ${project.gradientClass} backdrop-blur-sm animate-scale-in hover:scale-[1.02] transition-all duration-500`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-card/80 backdrop-blur-sm">
                <CardHeader className="pb-6">
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${project.iconBg} flex items-center justify-center text-white shadow-lg`}>
                      {project.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                          <p className="text-lg text-accent font-medium mb-3">{project.subtitle}</p>
                          <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                        </div>
                        <div className="flex gap-2 ml-4">

  {/* Publication Button */}
  {project.publication && (
    <Button
      variant="ghost"
      size="icon"
      className="hover:bg-primary/10"
      onClick={() => window.open(project.publication, "_blank")}
    >
      <ExternalLink className="w-5 h-5" />
    </Button>
  )}

</div>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="tech"
                          className="hover:scale-105 transition-transform"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold mb-3">Key Features</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm text-muted-foreground">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Impact */}
                  <div className="bg-accent/5 rounded-lg p-4 border border-accent/20">
                    <h4 className="font-semibold mb-2 text-accent">Project Impact</h4>
                    <p className="text-sm text-muted-foreground">{project.impact}</p>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* View More Projects CTA */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <p className="text-muted-foreground mb-4">
            More projects available on my GitHub profile
          </p>
          <Button variant="outline" size="lg" className="group">
            <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            View GitHub Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

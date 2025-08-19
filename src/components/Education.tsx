import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      id: 1,
      institution: "Vignan Institute of Technology and Science",
      degree: "Bachelor of Technology",
      field: "Artificial Intelligence and Data Science",
      duration: "Nov 2021 - July 2025",
      status: "Completed",
      description: "Specialized program focusing on AI, machine learning, data science, and advanced analytics",
      highlights: ["Machine Learning", "Deep Learning", "Data Analytics", "Statistical Modeling"],
      icon: "🎓",
      isCurrentlyStudying: false
    },
    {
      id: 2,
      institution: "Sri Chaitanya Junior College",
      degree: "Board of Intermediate Education",
      field: "Class XII",
      duration: "July 2019 - May 2021",
      status: "Completed",
      description: "Higher secondary education with focus on mathematics and science",
      highlights: ["Mathematics", "Physics", "Chemistry", "Computer Science"],
      icon: "📚",
      isCurrentlyStudying: false
    },
    {
      id: 3,
      institution: "Sri Chaitanya School",
      degree: "Secondary School Certificate",
      field: "Class X",
      duration: "June 2018 - May 2019",
      status: "Completed",
      description: "Secondary education with strong foundation in core subjects",
      highlights: ["Academic Excellence", "STEM Foundation", "Leadership"],
      icon: "🏫",
      isCurrentlyStudying: false
    }
  ];

  return (
    <section id="education" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="skill" className="mb-4 text-base px-4 py-2">
            Academic Journey
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            Educational{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Background
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building a strong foundation in artificial intelligence and data science
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20 hidden md:block"></div>

          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div 
                key={edu.id}
                className={`relative animate-slide-in ${index % 2 === 0 ? 'md:ml-20' : 'md:ml-20'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute -left-12 top-8 w-4 h-4 bg-gradient-hero rounded-full border-4 border-background shadow-lg hidden md:block"></div>
                
                <Card className={`hover:scale-[1.02] transition-all duration-300 border-0 ${
                  edu.isCurrentlyStudying ? 'bg-gradient-to-br from-accent/10 to-primary/5' : 'bg-gradient-card'
                }`}>
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{edu.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-xl mb-2">{edu.institution}</CardTitle>
                            <h4 className="text-lg font-semibold text-accent mb-1">
                              {edu.degree}
                            </h4>
                            <p className="text-muted-foreground font-medium">{edu.field}</p>
                          </div>
                          <Badge 
                            variant={edu.isCurrentlyStudying ? "skill" : "secondary"}
                            className="ml-4"
                          >
                            {edu.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.duration}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>

                    <div>
                      <h5 className="font-semibold mb-2">Key Areas</h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.highlights.map((highlight, highlightIndex) => (
                          <Badge 
                            key={highlightIndex}
                            variant="tech"
                            className="text-sm hover:scale-105 transition-transform"
                          >
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {edu.isCurrentlyStudying && (
                      <div className="bg-accent/10 rounded-lg p-3 border border-accent/20">
                        <p className="text-sm text-accent font-medium">
                          🎯 Currently pursuing advanced coursework in AI and Data Science
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Goals */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <Card className="bg-gradient-card border-0 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <GraduationCap className="w-12 h-12 mx-auto mb-4 text-accent" />
              <h3 className="text-2xl font-semibold mb-4">Academic Goals</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Pursuing excellence in artificial intelligence and data science through hands-on 
                projects, research opportunities, and continuous learning. Focused on bridging 
                theoretical knowledge with practical applications in the field.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;

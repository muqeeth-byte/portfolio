import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink, Star } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      category: "Cloud Computing",
      description: "Microsoft Certified Azure Fundamentals covering cloud concepts, Azure services, and solutions",
      level: "Fundamental",
      skills: ["Azure Services", "Cloud Computing", "Microsoft Cloud"],
      icon: "☁️",
      isFeatured: true,
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "Cloud Computing",
      issuer: "NPTEL",
      category: "Cloud Technologies",
      description: "ELITE level certification covering advanced cloud computing concepts and technologies",
      level: "Elite",
      skills: ["Cloud Architecture", "Distributed Systems", "Scalability"],
      icon: "🌐",
      isFeatured: true,
      color: "from-green-500 to-green-600"
    },
    {
      id: 3,
      title: "Python for Data Science",
      issuer: "NPTEL",
      category: "Data Science",
      description: "Comprehensive certification covering Python programming for data science applications",
      level: "Intermediate",
      skills: ["Python", "Data Analysis", "Scientific Computing"],
      icon: "🐍",
      isFeatured: true,
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 4,
      title: "Introduction to Machine Learning",
      issuer: "Infosys Springboard",
      category: "Machine Learning",
      description: "Foundational concepts in machine learning algorithms and applications",
      level: "Beginner",
      skills: ["ML Algorithms", "Supervised Learning", "Model Training"],
      icon: "🤖",
      isFeatured: false,
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 5,
      title: "Basics of Python",
      issuer: "Infosys Springboard",
      category: "Programming",
      description: "Fundamental Python programming concepts and best practices",
      level: "Beginner",
      skills: ["Python Syntax", "Data Structures", "OOP"],
      icon: "💻",
      isFeatured: false,
      color: "from-indigo-500 to-indigo-600"
    },
    {
      id: 6,
      title: "Python (Basic)",
      issuer: "HackerRank",
      category: "Programming",
      description: "Validated Python programming skills through practical coding challenges",
      level: "Basic",
      skills: ["Problem Solving", "Python Fundamentals", "Algorithms"],
      icon: "🏆",
      isFeatured: false,
      color: "from-green-500 to-teal-500"
    },
    {
      id: 7,
      title: "Java (Basic)",
      issuer: "HackerRank",
      category: "Programming",
      description: "Basic Java programming proficiency demonstrated through coding assessments",
      level: "Basic",
      skills: ["Java Syntax", "OOP Concepts", "Problem Solving"],
      icon: "☕",
      isFeatured: false,
      color: "from-red-500 to-red-600"
    },
    {
      id: 8,
      title: "SQL (Basic)",
      issuer: "HackerRank",
      category: "Database",
      description: "SQL fundamentals and database querying skills validation",
      level: "Basic",
      skills: ["SQL Queries", "Database Design", "Data Manipulation"],
      icon: "🗄️",
      isFeatured: false,
      color: "from-cyan-500 to-cyan-600"
    }
  ];

  const featuredCerts = certifications.filter(cert => cert.isFeatured);
  const otherCerts = certifications.filter(cert => !cert.isFeatured);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Elite': return 'skill';
      case 'Fundamental': case 'Intermediate': return 'tech';
      default: return 'secondary';
    }
  };

  return (
    <section id="certifications" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="skill" className="mb-4 text-base px-4 py-2">
            Professional Credentials
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            Certifications &{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuously expanding knowledge through industry-recognized certifications
          </p>
        </div>

        {/* Featured Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2 animate-slide-in">
            <Star className="w-6 h-6 text-accent" />
            Featured Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCerts.map((cert, index) => (
              <Card 
                key={cert.id}
                className="hover:scale-105 transition-all duration-300 border-0 bg-gradient-card animate-scale-in overflow-hidden group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-3">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${cert.color} flex items-center justify-center text-white text-xl shadow-lg group-hover:scale-110 transition-transform`}>
                      {cert.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg leading-tight mb-2">{cert.title}</CardTitle>
                      <p className="text-accent font-medium text-sm">{cert.issuer}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge variant={getLevelColor(cert.level)} className="text-xs">
                      {cert.level}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {cert.category}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                  
                  <div>
                    <h5 className="text-xs font-semibold mb-2 text-muted-foreground uppercase tracking-wide">
                      Key Skills
                    </h5>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex}
                          variant="tech"
                          className="text-xs hover:scale-105 transition-transform"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Certifications */}
        <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
            <Award className="w-6 h-6 text-primary" />
            Additional Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {otherCerts.map((cert, index) => (
              <Card 
                key={cert.id}
                className="hover:scale-[1.02] transition-all duration-300 border-0 bg-gradient-card group"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${cert.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                      {cert.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold mb-1">{cert.title}</h4>
                          <p className="text-sm text-accent mb-2">{cert.issuer}</p>
                          <p className="text-xs text-muted-foreground mb-3">
                            {cert.description}
                          </p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer ml-2" />
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.slice(0, 2).map((skill, skillIndex) => (
                          <Badge 
                            key={skillIndex}
                            variant="tech"
                            className="text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                        {cert.skills.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{cert.skills.length - 2} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certification Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <Card className="text-center border-0 bg-gradient-card">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-accent mb-2">{certifications.length}</div>
              <p className="text-sm text-muted-foreground">Total Certifications</p>
            </CardContent>
          </Card>
          <Card className="text-center border-0 bg-gradient-card">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">4</div>
              <p className="text-sm text-muted-foreground">Technology Areas</p>
            </CardContent>
          </Card>
          <Card className="text-center border-0 bg-gradient-card">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-accent mb-2">3</div>
              <p className="text-sm text-muted-foreground">Elite Level</p>
            </CardContent>
          </Card>
          <Card className="text-center border-0 bg-gradient-card">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">2024</div>
              <p className="text-sm text-muted-foreground">Latest Year</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;

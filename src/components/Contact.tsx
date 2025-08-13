import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Linkedin, Github, Send, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "abdulmuqeeth04@gmail.com",
      href: "mailto:abdulmuqeeth04@gmail.com",
      primary: true
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91-9948094778",
      href: "tel:+919948094778",
      primary: false
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Hyderabad, Telangana, India",
      href: null,
      primary: false
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "mohd-abdul-muqeeth",
      href: "http://www.linkedin.com/in/mohd-abdul-muqeeth",
      primary: true
    }
  ];

  const quickActions = [
    {
      title: "Schedule a Call",
      description: "Let's discuss opportunities and projects",
      icon: <MessageCircle className="w-6 h-6" />,
      action: "schedule",
      color: "from-accent to-accent-glow"
    },
    {
      title: "Download CV",
      description: "Get my complete professional profile",
      icon: <Send className="w-6 h-6" />,
      action: "download",
      color: "from-primary to-primary-glow"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="skill" className="mb-4 text-base px-4 py-2">
            Get In Touch
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            Let's{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Open to discussing data science opportunities, collaborative projects, and innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-6 animate-slide-in">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {contactInfo.map((contact, index) => (
                <Card 
                  key={index}
                  className={`hover:scale-105 transition-all duration-300 border-0 bg-gradient-card group ${
                    contact.primary ? 'ring-2 ring-accent/20' : ''
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        contact.primary 
                          ? 'bg-gradient-accent text-accent-foreground' 
                          : 'bg-gradient-hero text-primary-foreground'
                      } group-hover:scale-110 transition-transform`}>
                        {contact.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-1">
                          {contact.label}
                        </h4>
                        {contact.href ? (
                          <a 
                            href={contact.href}
                            target={contact.label === 'LinkedIn' ? '_blank' : undefined}
                            rel={contact.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                            className="text-foreground hover:text-accent transition-colors font-medium"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{contact.value}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Quick Actions</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {quickActions.map((action, index) => (
                  <Card 
                    key={index}
                    className="hover:scale-105 transition-all duration-300 border-0 bg-gradient-card cursor-pointer group"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${action.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                          {action.icon}
                        </div>
                        <div>
                          <h5 className="font-semibold mb-1">{action.title}</h5>
                          <p className="text-sm text-muted-foreground">{action.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Card */}
          <div className="animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <Card className="border-0 bg-gradient-to-br from-primary/5 to-accent/5 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6 text-primary-foreground">
                  <Mail className="w-10 h-10" />
                </div>
                
                <h3 className="text-2xl font-semibold mb-4">Ready to Collaborate?</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I'm always excited to discuss new opportunities, innovative projects, 
                  or any data science challenges you're working on.
                </p>

                <div className="space-y-3">
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="w-full group"
                    asChild
                  >
                    <a href="mailto:abdulmuqeeth04@gmail.com">
                      <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                      Send Email
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full group"
                    asChild
                  >
                    <a href="http://www.linkedin.com/in/mohd-abdul-muqeeth" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Response time: Usually within 24 hours
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Professional Availability */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Card className="border-0 bg-gradient-card max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">Professional Availability</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-accent font-semibold text-lg mb-2">Data Science Roles</div>
                  <p className="text-sm text-muted-foreground">Junior Data Scientist, ML Engineer</p>
                </div>
                <div>
                  <div className="text-accent font-semibold text-lg mb-2">Collaboration</div>
                  <p className="text-sm text-muted-foreground">Open Source Projects, Research</p>
                </div>
                <div>
                  <div className="text-accent font-semibold text-lg mb-2">Consulting</div>
                  <p className="text-sm text-muted-foreground">ML Solutions, Data Analysis</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
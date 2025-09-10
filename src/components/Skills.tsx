import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Code, Palette, Zap, Globe } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      icon: Code,
      skills: [
        "React", "TypeScript", "JavaScript (ES6+)", "Next.js", 
        "HTML5", "CSS3", "Tailwind CSS", "Styled Components"
      ]
    },
    {
      title: "Design & UX",
      icon: Palette,
      skills: [
        "Figma", "Responsive Design", "Mobile-First Design",
        "User Interface Design",
      ]
    },
    {
      title: "Development Tools",
      icon: Zap,
      skills: [
        "Git & GitHub", "Vite", "ESLint", "Prettier",
      ]
    },
    {
      title: "Backend & Services",
      icon: Globe,
      skills: [
        "Express.js", "REST APIs", "Firebase", "MongoDB", "Vercel", "Python", "Django"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to build 
            exceptional web experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-sm">Currently learning:</span>
            <Badge>Redux</Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
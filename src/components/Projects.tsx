import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'motion/react'

export function Projects() {
  const projects = [
    {
      title: "FinPlan",
      description: "FinPlan is a personal finance planning app that helps users take control of their money. With features like budgeting, savings pots, transaction tracking, and recurring bill management, FinPlan makes it easy to monitor spending, set financial goals, and build better money habits. All in one place.",
      image: "/image/FinPlan.png",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Express.JS", "MongoDB ATLAS"],
      liveUrl: "https://finance-tan-delta.vercel.app/",
      githubUrl: "https://github.com/vickcodes001/finance.git",
      featured: true
    },
    {
      title: "devFinder",
      description: "A lightweight React + TypeScript application that allows users to search GitHub profiles and view key information such as repositories, followers, following, and stats. Built with a clean UI and conditional rendering for a smooth user experience.",
      image: "../../public/image/devFinder.png",
      technologies: ["React", "Typescript", "TailwindCSS"],
      liveUrl: "https://github-search-green.vercel.app/",
      githubUrl: "https://github.com/vickcodes001/Github-search.git",
      featured: true
    },
    {
      title: "Accordion",
      description: "An interactive accordion component that neatly expands and collapses content, improving readability and user experience.",
      image: "/image/accordion.png",
      technologies: ["React", "TailwindCSS"],
      liveUrl: "https://accordion-jet-sigma.vercel.app/",
      githubUrl: "https://github.com/vickcodes001/accordion.git",
      featured: true
    },
    {
      title: "API",
      description: "A backend project focused on creating and exposing APIs for data access and integration.",
      image: "/image/DjangoAPI.png",
      technologies: ["Django"],
      liveUrl: "https://github.com/vickcodes001/DjangoAPI.git",
      githubUrl: "https://github.com/vickcodes001/DjangoAPI.git",
      featured: true
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl mb-4">Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A selection of my recent work showcasing different technologies and approaches 
            to solving complex problems.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut", delay: index * 0.25 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card key={index} className="group overflow-hidden">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <div className="flex gap-2">
                      <Button size="icon" variant="ghost" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button size="icon" variant="ghost" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>


        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Button variant="outline" asChild>
            <a href="https://github.com/vickcodes001" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { motion } from 'motion/react'

export function About() {
  const highlights = [
    "3+ years of frontend development experience",
    "Intermediate in React, TypeScript.",
    "Strong focus on user experience and performance optimization",
    "Passionate about clean code and best practices"
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a frontend developer who loves creating exceptional digital experiences. 
            With a good foundation in modern web technologies and a keen eye for design, 
            I bring ideas to life through code.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-2xl mb-4">My Journey</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I started my journey in web development in 2022, driven by a passion for 
                  creating interactive and user-friendly experiences. What began as curiosity 
                  about how websites work evolved into a deep love for frontend development.
                </p>
                <p>
                  Over the years, I've had the opportunity to intern with startups and established 
                  companies, contributing to projects ranging from e-commerce platforms to 
                  enterprise dashboards. Each project has taught me something new and helped 
                  me grow as a developer.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, or mentoring junior developers. I believe in the 
                  power of community and continuous learning.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="space-y-6">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl mb-4">Key Highlights</h3>
                  <ul className="space-y-3">
                    {highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.7 }}
                viewport={{ once: true, amount: 0.3 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl mb-4">Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">UI/UX Design</Badge>
                    <Badge variant="secondary">Design systems</Badge>
                    <Badge variant="secondary">Front-end tooling</Badge>
                    <Badge variant="secondary">Animations & interactions</Badge>
                    <Badge variant="secondary">Performance Optimization</Badge>
                    <Badge variant="secondary">Accessibility</Badge>
                    <Badge variant="secondary">Open Source</Badge>
                    <Badge variant="secondary">Mentoring</Badge>
                    <Badge variant="secondary">Tech Talks</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { ArrowDown, Github, Linkedin, Loader2, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import profileImg from "/image/profile-image.jpg"
import { motion } from 'motion/react'
import { useState } from "react"

export function Hero() {
  const [isLoading, setIsLoading] = useState(true)
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClick = () => {
    setIsLoading(false)
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl">
                Frontend Developer
              </h1>
              <h2 className="text-2xl text-muted-foreground">
                Building beautiful, responsive web experiences
              </h2>
              <p className="text-lg text-muted-foreground max-w-lg">
                {"<Hello />"}, I am Victor Okoro, a passionate frontend developer with 3+ years of experience 
                reating modern web applications using React and TypeScript.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
              >
                <Button onClick={scrollToProjects} size="lg">
                  View My Work
                  <ArrowDown className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
              >
                
                { isLoading ? 
                 <Button variant="outline" size="lg" asChild onClick={handleClick}>
                   <a href="mailto:okorovictor185@gmail.com">
                     <Mail className="mr-2 h-4 w-4" />
                     Get In Touch
                   </a>
                </Button>
                : <Loader2 className="flex h-4 w-4 animate-spin" />}
              </motion.div>
            </div>
          </motion.div>

          <div className="flex justify-center lg:justify-end">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <ImageWithFallback
                src={profileImg}
                alt="Developer workspace"
                className="rounded-2xl shadow-2xl w-full max-w-md lg:max-w-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
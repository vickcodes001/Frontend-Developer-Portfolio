import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import profileImg from "/image/profile-image.jpg"

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
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
              <Button onClick={scrollToProjects} size="lg">
                View My Work
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="mailto:okorovictor185@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </a>
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <ImageWithFallback
                src={profileImg}
                alt="Developer workspace"
                className="rounded-2xl shadow-2xl w-full max-w-md lg:max-w-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
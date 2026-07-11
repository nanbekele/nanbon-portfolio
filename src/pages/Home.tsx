import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Database, Smartphone, Download, Palette, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Import hero background and personal photos
import heroBackground from '@/assets/hero-background.jpg';
import nanbonPortrait from '@/assets/nanbon-portrait-1.jpg';

const Home = () => {


  const expertise = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Building scalable web applications with modern frameworks like Vue 3, React, and Node.js',
      technologies: ['Vue 3', 'React', 'Node.js', 'TypeScript ....']
    },
    {
      icon: Database,
      title: 'Data Science',
      description: 'Transforming raw data into actionable insights using Python, ML, and statistical analysis',
      technologies: ['Python', 'TensorFlow', 'Pandas', 'SQL ....']
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Creating cross-platform mobile apps with Flutter for iOS and Android platforms',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Material Design ....']
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Designing professional PowerPoint presentations, brochures, and banners with clean, modern visuals',
      technologies: ['PowerPoint', 'Brochure Design', 'Banner Design', 'Branding ....']
    },
    {
      icon: FileText,
      title: 'System Documentation, Reporting, User Manual, and SRS Preparation',
      description: 'Preparing clear, structured project reports and system documentation including abstracts, system analysis, methodology, implementation details, diagrams, and user guides for small to large-scale systems.',
      technologies: ['SRS', 'System Documentation', 'Project Reporting', 'Diagrams ....']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBackground}
            alt="Developer workspace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/95" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 section-container text-center">
          <div className="animate-fade-in">
            <Badge variant="outline" className="mb-4 portfolio-glow">
              👋 Welcome to my portfolio
            </Badge>

            <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                Nanbon Bekele
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
              {[
                'Full-Stack Developer',
                'Data Scientist',
                'Mobile App Developer',
                'Designer'
              ].map((role, index, arr) => (
                <React.Fragment key={role}>
                  <span
                    className="inline-block cursor-default rounded-md px-2 py-1 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-primary/10 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-brand-primary hover:to-brand-secondary"
                  >
                    {role}
                  </span>
                  {index < arr.length - 1 && (
                    <span className="mx-1 text-muted-foreground/60">|</span>
                  )}
                </React.Fragment>
              ))}
            </p>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm a passionate developer building scalable web systems, crafting mobile apps, and turning data into insight.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" asChild className="portfolio-gradient text-white animate-glow-pulse">
                <Link to="/projects">
                  <Code className="h-5 w-5 mr-2" />
                  View My Work
                </Link>
              </Button>

              <Button size="lg" variant="outline" asChild>
                <a href="/files/pdf/Nanbon_Bekele_CV.pdf" download>
                  <Download className="h-5 w-5 mr-2" />
                  Download CV
                </a>
              </Button>

              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">
                  <ArrowRight className="h-5 w-5 mr-2" />
                  Get In Touch
                </Link>
              </Button>
            </div>


          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-brand-primary/10 rounded-full animate-float" />
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-brand-secondary/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-4 w-12 h-12 bg-brand-accent/10 rounded-full animate-float" style={{ animationDelay: '4s' }} />
      </section>



      {/* About Me Section */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Professional Photo */}
            <div className="order-2 lg:order-1 animate-fade-in">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 rounded-2xl opacity-75 group-hover:opacity-100 transition-opacity blur-lg"></div>
                <div className="relative">
                  <img
                    src={nanbonPortrait}
                    alt="Nanbon Bekele - Professional Photo"
                    className="w-full max-w-md mx-auto rounded-2xl shadow-2xl object-cover aspect-[4/5] portfolio-glow"
                  />
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="order-1 lg:order-2 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <Badge variant="outline" className="mb-4">
                About Me
              </Badge>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Passionate About
                <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                  {' '}Technology & Innovation
                </span>
              </h2>

              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg">
                  I'm Nanbon Bekele, a dedicated full-stack developer and data scientist.
                  With experience in projects, I specialize in creating robust web applications,
                  analyzing complex data sets, and building cross-platform mobile solutions.
                </p>

                <p>
                  My journey in technology started with a curiosity about how things work behind the scenes.
                  Today, I combine technical expertise with creative problem-solving to build solutions
                  that make a real impact. Whether it's developing a payment platform or creating data-driven insights for businesses, I'm passionate about using technology
                  to solve real-world challenges.
                </p>

                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source
                  projects, or sharing knowledge with the developer community. I believe in continuous
                  learning and staying at the forefront of technological innovation.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="portfolio-gradient text-white">
                  <Link to="/experience">
                    View My Journey
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </Button>

                <Button size="lg" variant="outline" asChild>
                  <Link to="/skills">
                    My Skills
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20">
        <div className="section-container">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              What I
              <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                {' '}Specialize In
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Combining technical expertise with creative problem-solving to deliver comprehensive solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <Card
                key={item.title}
                className="portfolio-card hover:portfolio-glow transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary p-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground mb-6">{item.description}</p>

                  <div className="flex flex-wrap gap-2 justify-center">
                    {item.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-primary/5 to-brand-secondary/5">
        <div className="section-container text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Build Something
              <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                {' '}Amazing?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's collaborate to turn your ideas into reality. Whether it's a web app, mobile solution, or data analysis project.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="portfolio-gradient text-white">
                <Link to="/contact">
                  Start a Project
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>

              <Button size="lg" variant="outline" asChild>
                <a href="/files/pdf/Nanbon_Bekele_CV.pdf" download>
                  <Download className="h-5 w-5 mr-2" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
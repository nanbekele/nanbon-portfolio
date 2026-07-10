import React from 'react';
import { Code, Database, Smartphone, Globe, Brain, Server, Palette, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Full-Stack Development',
      icon: Globe,
      description: 'Modern web development with cutting-edge technologies',
      skills: ['Vue 3', 'Nuxt 3', 'React', 'Node.js', 'TypeScript', 'Vite', 'Tailwind CSS', 'GraphQL'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Backend & Database',
      icon: Server,
      description: 'Scalable backend systems and database management',
      skills: ['Golang', 'PostgreSQL', 'Hasura', 'Firebase', 'JWT Auth', 'REST APIs', 'Docker'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Data Science & AI',
      icon: Brain,
      description: 'Turning data into actionable insights',
      skills: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'Jupyter', 'SQL', 'APIs'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      description: 'Cross-platform mobile applications',
      skills: ['Flutter', 'Dart', 'Firebase', 'Material Design', 'REST/GraphQL', 'Platform Integration'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Design',
      icon: Palette,
      description: 'Presentation and marketing materials design',
      skills: ['PowerPoint Design', 'Brochure Design', 'Banner Design'],
      color: 'from-fuchsia-500 to-pink-500'
    },
    {
      title: 'System Documentation, Reporting, User Manual and SRS Preparation',
      icon: FileText,
      description: 'Preparing clear, structured project reports and system documentation including abstracts, system analysis, methodology, implementation details, diagrams, and user guides for small to large-scale systems.',
      skills: ['SRS', 'System Documentation', 'Project Reporting', 'Diagrams', 'User Guides'],
      color: 'from-slate-500 to-gray-500'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Technical
            <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              {' '}Skills
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building scalable applications, analyzing data, and creating mobile experiences
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="portfolio-card hover:portfolio-glow transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      {category.description}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="hover:bg-brand-primary/10 hover:text-brand-primary transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '600ms' }}>
          <h2 className="text-2xl font-bold mb-6">Additional Technologies</h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Git', 'GitHub', 'VS Code', 'Postman', 'Figma', 'Linux', 
                'AWS', 'Vercel', 'Netlify', 'MongoDB', 'Redis', 'Nginx',
                'CI/CD', 'Testing', 'Agile', 'Scrum'
              ].map((tech) => (
                <Badge 
                  key={tech} 
                  variant="outline"
                  className="hover:bg-brand-primary/10 hover:border-brand-primary transition-all"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
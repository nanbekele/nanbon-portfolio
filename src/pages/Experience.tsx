import React from 'react';
import { Award, GraduationCap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      title: 'Full-Stack Developer',
      company: 'Freelance',
      type: 'Develop Modern Website',
      description: 'Developing modern and Passionated web applications and mobile solutions',
      achievements: [
        'Built full-stack applications using modern frameworks',
        'Designed and deployed scalable backend architectures',

      ],
      technologies: ['Vue 3', 'Nuxt 3', 'Golang', 'Flutter', 'PostgreSQL', 'Docker ...']
    },
    {
      title: 'Data Science Intern',
      company: 'Freelance',
      location: 'Addis Ababa, Ethiopia',
      type: 'Analyze Data Quality',

      description: 'Applied machine learning techniques to analyze business data and create predictive models.',
      achievements: [
        'Developed customer churn prediction model in machine learning(Anaconda) with 87% accuracy',
        'Created automated reporting dashboards using Python',
        'Processed and analyzed datasets with 100K+ records',
      ],
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'TensorFlow', 'Jupyter', 'SQL ...']
    },
    {
      title: 'Mobile App Developer',
      company: 'University Project',
      location: 'Ethiopia',
      type: 'Academic',
      description: 'Led development team for university capstone project creating educational mobile applications.',
      achievements: [
        'Led team of 4 developers in agile development process',

        'Integrated offline-first architecture for unreliable connectivity',
      ],
      technologies: ['Flutter', 'Dart', 'Firebase', 'Git', 'Figma ...']
    }
  ];

  const certifications = [
    {
      title: 'B.Sc. in Software Engineering',
      issuer: 'University Graduate',
      date: 'Graduated',
      icon: GraduationCap
    },
    {
      title: 'University Graduation Expo Project Presentation',
      issuer: 'University Expo',
      date: '',
      icon: Award
    },
    {
      title: 'Android Development',
      issuer: 'Ethio Coders',
      date: '',
      icon: Award
    },
    {
      title: 'Data Analysis',
      issuer: 'Ethio Coders',
      date: '',
      icon: Award
    },
    {
      title: 'Artificial Intelligence',
      issuer: 'Ethio Coders',
      date: '',
      icon: Award
    },
    {
      title: 'Fundamental Programming',
      issuer: 'Ethio Coders',
      date: '',
      icon: Award
    },
    {
      title: 'e-SHE (E-Learning for Strengthening Higher Education)',
      issuer: 'e-SHE Initiative',
      date: '',
      icon: Award
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Professional
            <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              {' '}Experience
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey through projects, internships, and continuous learning in the tech industry
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 h-full w-0.5 bg-gradient-to-b from-brand-primary to-brand-secondary"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center animate-fade-in ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-brand-primary rounded-full border-4 border-background z-10"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? '' : 'md:mr-12'}`}>
                  <Card className="portfolio-card hover:portfolio-glow transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <CardTitle className="text-xl">{exp.title}</CardTitle>
                          <p className="text-brand-primary font-medium">{exp.company}</p>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {exp.type}
                        </Badge>
                      </div>


                    </CardHeader>

                    <CardContent>
                      <p className="text-muted-foreground mb-4">{exp.description}</p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide text-brand-primary">
                          Key Achievements
                        </h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2 flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide text-brand-primary">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mt-20 animate-fade-in" style={{ animationDelay: '800ms' }}>
          <h2 className="text-3xl font-bold text-center mb-12">
            Certifications &
            <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              {' '}Education
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="portfolio-card text-center hover:portfolio-glow transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <cert.icon className="h-8 w-8 text-brand-primary mx-auto" />
                  </div>
                  <h3 className="font-semibold mb-2">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                  {cert.date && <p className="text-xs text-brand-primary">{cert.date}</p>}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
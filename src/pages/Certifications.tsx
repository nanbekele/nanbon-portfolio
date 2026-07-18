import React from 'react';
import { Award, GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Certifications = () => {
  const certifications = [
    {
      title: 'B.Sc. in Software Engineering',
      issuer: 'University Graduate',
      date: 'Graduated',
      icon: GraduationCap
    },
    {
      title: 'Diploma in Hardware and Networking Service',
      issuer: 'College',
      date: 'Graduated',
      icon: GraduationCap
    },
    {
      title: 'Diploma in Database Administrator',
      issuer: 'College',
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
            Certifications &
            <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              {' '}Education
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of academic achievements, professional certifications, and continuous learning milestones
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="portfolio-card text-center hover:portfolio-glow transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
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
  );
};

export default Certifications;

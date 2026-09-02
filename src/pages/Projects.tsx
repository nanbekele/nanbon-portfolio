import React from 'react';
import { ArrowRight, ArrowLeft, Smartphone, CreditCard, Palette, Download, BookOpen, Building2, X, ZoomIn } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Link } from 'react-router-dom';



// Import project images
import foodAppImage from '@/assets/project-food-app.png';
import learnXchangeImage from '@/assets/project-learnxchange.png';
import gcaeVisionHubImage from '@/assets/project-gcae-vision-hub.png';
import flutterAppImage from '@/assets/project-flutter-app.jpg';

/* ─── Image Lightbox Modal ─── */
const ImageLightbox = ({
  images,
  currentIndex,
  onClose,
}: {
  images: string[];
  currentIndex: number;
  onClose: () => void;
}) => {
  const [index, setIndex] = React.useState(currentIndex);

  const goPrev = React.useCallback(() => {
    setIndex((i) => (i <= 0 ? images.length - 1 : i - 1));
  }, [images.length]);

  const goNext = React.useCallback(() => {
    setIndex((i) => (i >= images.length - 1 ? 0 : i + 1));
  }, [images.length]);

  // Keyboard navigation
  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose, goPrev, goNext]);

  // Lock body scroll while open
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-[110] p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        aria-label="Close lightbox"
      >
        <X className="h-6 w-6" />
      </button>

      {/* Image counter */}
      <div className="absolute top-4 left-4 z-[110] text-white/70 text-sm font-medium bg-black/40 px-3 py-1 rounded-full">
        {index + 1} / {images.length}
      </div>

      {/* Previous button */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); goPrev(); }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-[110] p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all hover:scale-110"
          aria-label="Previous image"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>
      )}

      {/* Next button */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); goNext(); }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-[110] p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all hover:scale-110"
          aria-label="Next image"
        >
          <ArrowRight className="h-6 w-6" />
        </button>
      )}

      {/* Image */}
      <img
        src={images[index]}
        alt={`Image ${index + 1}`}
        className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};

/* ─── Project Images Carousel ─── */
const ProjectImagesCarousel = ({
  images,
  title,
  onImageClick,
}: {
  images: string[];
  title: string;
  onImageClick: (index: number) => void;
}) => {
  const [api, setApi] = React.useState<any>(null);

  React.useEffect(() => {
    if (!api) return;
    const id = window.setInterval(() => {
      api.scrollNext();
    }, 3000);
    return () => window.clearInterval(id);
  }, [api]);

  return (
    <div className="w-full h-full">
      <Carousel className="h-full" opts={{ loop: true }} setApi={setApi}>
        <CarouselContent className="h-full">
          {images.map((src, index) => (
            <CarouselItem key={`${src}-${index}`} className="h-full">
              <div
                className="h-full w-full flex items-center justify-center bg-muted/10 p-2 cursor-pointer group/slide"
                onClick={() => onImageClick(index)}
              >
                <img
                  src={src}
                  alt={`${title} - Slide ${index + 1}`}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
                {/* Zoom hint overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/slide:opacity-100 transition-opacity duration-200 pointer-events-none">
                  <div className="p-3 rounded-full bg-black/50 text-white">
                    <ZoomIn className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-3 top-1/2 -translate-y-1/2 z-10" />
        <CarouselNext className="right-3 top-1/2 -translate-y-1/2 z-10" />
      </Carousel>
    </div>
  );
};

const Projects = () => {
  const [designImages, setDesignImages] = React.useState<string[]>([]);
  const [lightbox, setLightbox] = React.useState<{ images: string[]; index: number } | null>(null);

  React.useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const res = await fetch('/files/images/manifest.json', { cache: 'no-store' });
        if (!res.ok) return;
        const data = await res.json();
        if (!cancelled && Array.isArray(data?.images)) {
          setDesignImages(data.images);
        }
      } catch {
        return;
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const projects = [
    {
      title: 'Food Recipes Platform',
      description: 'A comprehensive food recipe platform featuring Ethiopian cuisine with integrated payment system using Chapa, user authentication, and recipe sharing capabilities.',
      image: foodAppImage,
      technologies: ['Vue 3', 'Nuxt 3', 'Golang', 'PostgreSQL', 'Hasura', 'Chapa Payment', 'JWT Auth ...'],
      features: [
        'Ethiopian recipe collection',
        'Payment integration with Chapa',
        'User authentication system',
        'Recipe sharing & rating',
        'Admin dashboard'
      ],
      githubUrl: '#',
      liveUrl: '#',
      icon: CreditCard
    },
    {
      title: 'LearnXchange E-Learning Marketplace',
      description: 'A full-stack e-learning marketplace platform where users can buy, sell, and exchange learning resources, featuring AI-powered recommendations, secure payment integration via Chapa, and a comprehensive admin dashboard.',
      image: learnXchangeImage,
      technologies: ['Next.js 15', 'React 18', 'TypeScript', 'TailwindCSS', 'Supabase', 'PostgreSQL', 'Chapa API', 'transformers.js'],
      features: [
        'AI-powered course recommendations using local embeddings',
        'Secure payment processing with Chapa & Telebirr payout integration',
        'Direct course exchange request system',
        'Real-time notifications & inactivity auto-logout security',
        'Comprehensive admin & seller analytics dashboards'
      ],
      githubUrl: '#',
      liveUrl: '#',
      icon: BookOpen
    },
    {
      title: 'GCAE Vision Hub',
      description: 'An internship project featuring a web-based management portal for construction and IT consultancy services in East Africa, built as a MIDROC Investment Group company.',
      image: gcaeVisionHubImage,
      technologies: ['React', 'TypeScript', 'Vite', 'TailwindCSS', 'shadcn/ui', 'Supabase (Auth/DB/Storage/Edge Functions)'],
      features: [
        'Excellence in Numbers dashboard with live DB statistics',
        'Role-Based Portals (HR, Marketing, Electro-Mechanical, Mechanical, ICT, Admin)',
        'Gmail API integration for interview scheduling and contact replies',
        'Automated newsletter distribution via Gmail/Resend',
        'Public career portal with job application and CV upload'
      ],
      githubUrl: '#',
      liveUrl: '#',
      icon: Building2
    },

    {
      title: 'Cross-Platform Mobile App',
      description: 'Modern Flutter application with offline capabilities, real-time synchronization, and beautiful Material Design 3 interface.',
      image: flutterAppImage,
      technologies: ['Flutter', 'Dart', 'Firebase', 'Material Design 3', 'REST API ...'],
      features: [
        'Cross-platform compatibility',
        'Offline-first architecture',
        'Real-time sync',
        'Push notifications',
        'Material Design 3'
      ],
      githubUrl: '#',
      liveUrl: '#',
      icon: Smartphone
    },
    {
      title: 'Design Portfolio (PPT, Brochure, Banner)',
      description: 'A collection of my design works including PowerPoint presentations, brochure designs, and banner designs — ready to download and view.',
      images: designImages,
      technologies: ['PowerPoint', 'Brochure Design', 'Banner Design'],
      features: [
        'PowerPoint presentation designs',
        'Brochure design (PDF)',
        'Banner design (PDF)'
      ],
      icon: Palette,
      downloads: [
        {
          label: 'Download Banner (PDF)',
          href: '/files/pdf/banner/banner%20design%201000x1189%20mm.pdf'
        },
        {
          label: 'Download Brochure (PDF)',
          href: '/files/pdf/broucher/brochure%20design.pdf'
        },
        {
          label: 'Download Vision Hub (PPTX)',
          href: '/files/ppt/ppt-design/1vision%20hub1.pptx'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Featured
            <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              {' '}Projects
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcase of full-stack applications, mobile solutions, and data-driven projects that solve real-world problems
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="portfolio-card overflow-hidden hover:portfolio-glow transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 items-start ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Project Image */}
                <div className={`relative group overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''} h-64 lg:h-[420px]`}>
                  {'images' in project && Array.isArray((project as any).images) && (project as any).images.length > 0 ? (
                    <ProjectImagesCarousel
                      images={(project as any).images as string[]}
                      title={project.title}
                      onImageClick={(imgIndex) => setLightbox({ images: (project as any).images, index: imgIndex })}
                    />
                  ) : 'images' in project ? (
                    <div className="w-full h-full bg-muted/20" />
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center bg-muted/10 p-2 cursor-pointer group/single"
                      onClick={() => setLightbox({ images: [(project as any).image], index: 0 })}
                    >
                      <img 
                        src={(project as any).image} 
                        alt={project.title}
                        className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                      {/* Zoom hint */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/single:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                        <div className="p-3 rounded-full bg-black/50 text-white">
                          <ZoomIn className="h-6 w-6" />
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* Project Content */}
                <div className={`p-8 self-start ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <CardHeader className="p-0 mb-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="p-2 rounded-lg bg-brand-primary/10">
                        <project.icon className="h-5 w-5 text-brand-primary" />
                      </div>
                      <CardTitle as="h2" className="text-2xl">{project.title}</CardTitle>
                    </div>
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>
                  </CardHeader>

                  <CardContent className="p-0">
                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-brand-primary">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-brand-primary">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    {'downloads' in project && Array.isArray((project as any).downloads) && (
                      <div className="flex flex-wrap gap-3">
                        {(project as any).downloads.map((d: any) => (
                          <Button key={d.href} variant="outline" size="sm" asChild>
                            <a href={d.href} download>
                              <Download className="h-4 w-4 mr-2" />
                              {d.label}
                            </a>
                          </Button>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '800ms' }}>
          <div className="portfolio-card p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Interested in Working Together?</h2>
            <p className="text-muted-foreground mb-6">
              I'm always excited to work on new challenges and bring innovative ideas to life.
            </p>
          
             <Button size="lg" asChild className="portfolio-gradient text-white">
                <Link to="/contact">
                Let's Start a Project
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightbox && (
        <ImageLightbox
          images={lightbox.images}
          currentIndex={lightbox.index}
          onClose={() => setLightbox(null)}
        />
      )}
    </div>
  );
};

export default Projects;
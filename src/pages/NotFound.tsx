import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center section-container text-center px-4 relative overflow-hidden">
      {/* Decorative floating blurred background shapes to match the home/landing design */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-brand-primary/10 rounded-full animate-float blur-xl" />
      <div className="absolute bottom-20 right-10 w-20 h-20 bg-brand-secondary/10 rounded-full animate-float blur-xl" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 animate-fade-in max-w-md mx-auto">
        <div className="text-9xl font-extrabold tracking-widest bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent mb-6 select-none animate-pulse">
          404
        </div>
        
        <h1 className="text-3xl font-bold mb-4">
          Oops! Page Not Found
        </h1>
        
        <p className="text-lg text-muted-foreground mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="portfolio-gradient text-white">
            <Link to="/">
              <Home className="h-5 w-5 mr-2" />
              Return to Home
            </Link>
          </Button>

          <Button size="lg" variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="h-5 w-5 mr-2" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

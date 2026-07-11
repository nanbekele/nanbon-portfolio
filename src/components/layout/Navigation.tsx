import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, User, Code, Briefcase, Mail, Moon, Sun, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check for saved theme preference, defaulting to dark
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme !== 'light') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Skills', href: '/skills', icon: Code },
    { name: 'Projects', href: '/projects', icon: Briefcase },
    { name: 'Experience', href: '/experience', icon: User },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="fixed top-0 w-full z-50 portfolio-card backdrop-blur-lg">
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-xl font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent"
          >
            Nanbon Bekele
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? 'text-brand-primary bg-brand-primary/10'
                    : 'text-muted-foreground hover:text-brand-primary hover:bg-brand-primary/5'
                }`}
              >
                <item.icon size={16} />
                <span>{item.name}</span>
              </Link>
            ))}
            
            {/* Download Resume */}
            <Button
              variant="outline"
              size="sm"
              asChild
              className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition-all"
            >
              <a href="/files/pdf/Nanbon_Bekele_CV.pdf" download>
                <Download size={14} className="mr-2" />
                Resume
              </a>
            </Button>
            
            {/* Dark Mode Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleDarkMode}
              className="p-2"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
          </div>
 
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleDarkMode}
              className="p-2"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
            
            <Button
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 portfolio-card border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? 'text-brand-primary bg-brand-primary/10'
                      : 'text-muted-foreground hover:text-brand-primary hover:bg-brand-primary/5'
                  }`}
                >
                  <item.icon size={18} />
                  <span>{item.name}</span>
                </Link>
              ))}

              {/* Mobile Download Resume */}
              <div className="pt-2 pb-1 px-3">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="w-full justify-center border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition-all"
                >
                  <a href="/files/pdf/Nanbon_Bekele_CV.pdf" download>
                    <Download size={16} className="mr-2" />
                    Download CV
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
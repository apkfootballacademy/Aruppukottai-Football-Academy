import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImage from '@/assets/apkacademy.png';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Programs', href: '#programs' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Admissions', href: '#admissions' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-card/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <img
            src={logoImage}
            alt="APK Academy"
            className="h-10 w-auto object-contain"
          />
          <div className="hidden sm:block">
            <span
              className={`font-bold text-lg transition-colors ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              Aruppukottai
            </span>
            <span
              className={`block text-xs font-medium transition-colors ${
                isScrolled ? 'text-accent' : 'text-gold'
              }`}
            >
              Football Academy
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium text-sm transition-colors relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all hover:after:w-full ${
                isScrolled
                  ? 'text-foreground/80 hover:text-foreground'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+919876543210"
            className={`flex items-center gap-2 font-medium text-sm transition-colors ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}
          >
            <Phone className="w-4 h-4" />
            <span className="hidden xl:inline">+91 98765 43210</span>
          </a>
          <a href="#admissions" className="btn-accent text-sm px-5 py-2.5">
            Join Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-2 ${isScrolled ? 'text-foreground' : 'text-white'}`}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border"
          >
            <div className="container-custom py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground/80 hover:text-foreground font-medium py-2 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a href="#admissions" className="btn-accent text-center mt-2">
                Join the Academy
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

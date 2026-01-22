import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';
import logoImage from '@/assets/apkacademy.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logoImage}
                alt="APK Academy"
                className="h-12 w-auto object-contain"
              />
              <div>
                <span className="font-bold text-xl">Aruppukottai</span>
                <span className="block text-sm text-gold font-medium">Football Academy</span>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-md mb-6">
              Building the next generation of disciplined, skilled, and confident 
              footballers in Aruppukottai. Join us and start your football journey today.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 text-accent" />
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a
                  href="mailto:apkfootballacademy@gmail.com"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 text-accent" />
                  apkfootballacademy@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/70 text-sm">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                Aruppukottai, Virudhunagar District, Tamil Nadu, India
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm text-center md:text-left">
            © {currentYear} Aruppu Kottai Football Academy. All rights reserved.
          </p>
          <p className="text-primary-foreground/60 text-sm">
            Crafted with ♥ by{' '}
            <a
              href="https://www.linkedin.com/in/v-manikandan1142/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 transition-colors underline"
            >
              Manikandan V
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

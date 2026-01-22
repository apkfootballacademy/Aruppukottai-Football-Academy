import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, Clock } from 'lucide-react';
import { toast } from 'sonner';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    content: '+91 98765 43210',
    link: 'tel:+919876543210',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    content: 'Chat with us',
    link: 'https://wa.me/919876543210',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'apkfootballacademy@gmail.com',
    link: 'mailto:apkfootballacademy@gmail.com',
  },
  {
    icon: MapPin,
    title: 'Location',
    content: 'Aruppukottai, Tamil Nadu',
    link: 'https://maps.google.com/?q=Aruppukottai,Tamil+Nadu',
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.success('Thank you! We will contact you soon.');
    setFormData({ name: '', phone: '', age: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Contact Us
          </span>
          <h2 className="section-title">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Have questions? Ready to enroll? Reach out to us and we'll get back to you promptly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="card-elevated p-8"
          >
            <h3 className="text-xl font-bold text-foreground mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none text-foreground"
                  placeholder="Enter your name"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none text-foreground"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label htmlFor="age" className="block text-sm font-medium text-foreground mb-2">
                    Player's Age
                  </label>
                  <input
                    type="number"
                    id="age"
                    min="6"
                    max="21"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none text-foreground"
                    placeholder="e.g., 12"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none resize-none text-foreground"
                  placeholder="Tell us about your interest in joining the academy..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-accent w-full justify-center disabled:opacity-50"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-6"
          >
            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info) => (
                <a
                  key={info.title}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="card-elevated p-5 flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <info.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm text-muted-foreground">{info.title}</div>
                    <div className="font-medium text-foreground break-all">{info.content}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Timing Card */}
            <div className="card-elevated p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-accent" />
                <h4 className="font-semibold text-foreground">Training Hours</h4>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Morning Session</span>
                  <span className="text-foreground font-medium">6:00 AM – 8:00 AM</span>
                </div>
                <div className="flex justify-between">
                  <span>Evening Session</span>
                  <span className="text-foreground font-medium">4:30 PM – 6:30 PM</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-border mt-2">
                  <span>Days</span>
                  <span className="text-accent font-medium">Monday to Saturday</span>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="card-elevated overflow-hidden h-[250px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31495.776247076974!2d78.07!3d9.51!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b01c5e23f8e5c43%3A0x8c8b5e5b5c5c5c5c!2sAruppukottai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Academy Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, MessageCircle, ArrowRight, CheckCircle2, Calendar, Users, FileText } from 'lucide-react';

const steps = [
  {
    icon: Phone,
    number: '01',
    title: 'Contact Academy',
    description: 'Reach out via phone or WhatsApp to express interest.',
  },
  {
    icon: Calendar,
    number: '02',
    title: 'Trial Session',
    description: 'Attend a free trial to experience our training firsthand.',
  },
  {
    icon: FileText,
    number: '03',
    title: 'Enrollment',
    description: 'Complete registration and join your age-appropriate batch.',
  },
];

const eligibility = [
  'Open for boys aged 6–21 years',
  'No prior football experience required',
  'Basic physical fitness',
  'Commitment to regular practice',
];

const Admissions = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="admissions" className="section-padding bg-accent relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white/20 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block bg-white/20 text-accent-foreground font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
            Admissions Open
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent-foreground mb-4">
            Begin Your Football Journey Today
          </h2>
          <p className="text-lg text-accent-foreground/80">
            Join the Aruppu Kottai Football Academy and take the first step 
            towards becoming a skilled footballer.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Steps */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-accent-foreground mb-6">
              How to Join
            </h3>
            {steps.map((step, index) => (
              <div key={step.title} className="flex gap-5 items-start group">
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <step.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gold text-navy-dark text-xs font-bold flex items-center justify-center">
                    {step.number}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-accent-foreground mb-1">{step.title}</h4>
                  <p className="text-accent-foreground/70 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-card rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-xl font-bold text-foreground mb-4">
              Eligibility & Details
            </h3>
            
            <div className="space-y-3 mb-8">
              {eligibility.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground/80 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-secondary/50 rounded-xl p-5 mb-8">
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="w-5 h-5 text-accent" />
                <span className="font-semibold text-foreground">Training Schedule</span>
              </div>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>Morning: 6:00 AM – 8:00 AM</p>
                <p>Evening: 4:30 PM – 6:30 PM</p>
                <p className="text-accent font-medium mt-2">Monday to Saturday</p>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href="tel:+919876543210"
                className="btn-accent w-full justify-center group"
              >
                <Phone className="w-5 h-5" />
                Call Now: +91 98765 43210
              </a>
              <a
                href="https://wa.me/919876543210?text=Hi%2C%20I%20am%20interested%20in%20joining%20Aruppu%20Kottai%20Football%20Academy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 bg-[#25D366] text-white hover:bg-[#20BD5A]"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;

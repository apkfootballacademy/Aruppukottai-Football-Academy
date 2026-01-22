import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle2, Target, Users, Shield, Award } from 'lucide-react';
import aboutImage from '@/assets/about-training.jpg';

const highlights = [
  { icon: Award, text: 'Certified & Experienced Coaches' },
  { icon: Users, text: 'Age-based Training Programs' },
  { icon: Target, text: 'Regular Practice & Matches' },
  { icon: Shield, text: 'Discipline & Sportsmanship' },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aboutImage}
                alt="Academy training session"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/50 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-xl hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="icon-box">
                  <Target className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">10+</div>
                  <div className="text-sm text-muted-foreground">Years of Excellence</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              About the Academy
            </span>
            <h2 className="section-title">
              Nurturing Tomorrow's{' '}
              <span className="text-gradient">Football Champions</span>
            </h2>
            <p className="section-subtitle mt-6 mb-8">
              Aruppu Kottai Football Academy is dedicated to developing disciplined, 
              skilled footballers through professional training. We focus on fitness, 
              teamwork, and confidence building in a safe, structured environment.
            </p>

            {/* Mission Statement */}
            <div className="bg-secondary/50 rounded-xl p-6 mb-8 border-l-4 border-accent">
              <h3 className="font-semibold text-foreground mb-2">Our Mission</h3>
              <p className="text-muted-foreground text-sm">
                To provide grassroots football development that transforms young 
                players into confident athletes, preparing them for competitive 
                football and life success.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  GraduationCap, 
  Heart, 
  Trophy, 
  TrendingUp, 
  Shield, 
  Users 
} from 'lucide-react';

const features = [
  {
    icon: GraduationCap,
    title: 'Experienced Coaches',
    description: 'Our certified coaches bring years of professional experience and a passion for developing young talent.',
  },
  {
    icon: Heart,
    title: 'Discipline & Fitness',
    description: 'We emphasize physical fitness, mental strength, and discipline as the foundation of great footballers.',
  },
  {
    icon: Trophy,
    title: 'Regular Matches',
    description: 'Frequent practice matches and tournament participation to build competitive experience.',
  },
  {
    icon: TrendingUp,
    title: 'Personal Development',
    description: 'Individual attention to help each player identify strengths and work on areas of improvement.',
  },
  {
    icon: Shield,
    title: 'Safe Environment',
    description: 'A secure, well-maintained training facility with proper safety measures for all players.',
  },
  {
    icon: Users,
    title: 'Community Trust',
    description: 'Trusted by families across Aruppukottai for quality football training and character development.',
  },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
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
          <span className="inline-block text-gold font-semibold text-sm uppercase tracking-wider mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            The Aruppu Kottai Advantage
          </h2>
          <p className="text-lg text-primary-foreground/70">
            What sets our academy apart and makes us the preferred choice for 
            football training in the region.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              className="group p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-primary-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

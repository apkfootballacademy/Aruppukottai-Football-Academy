import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Baby, GraduationCap, Trophy, Dumbbell, ArrowRight } from 'lucide-react';

const programs = [
  {
    icon: Baby,
    title: 'Junior Training',
    age: 'Ages 6–10',
    description: 'Foundation skills, fun drills, and basic football concepts for young beginners.',
    focus: ['Motor skills', 'Ball control', 'Team games'],
    level: 'Beginner',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: GraduationCap,
    title: 'Youth Development',
    age: 'Ages 11–15',
    description: 'Technical development, tactical awareness, and competitive match experience.',
    focus: ['Technical skills', 'Game tactics', 'Physical conditioning'],
    level: 'Intermediate',
    color: 'from-accent to-emerald-600',
  },
  {
    icon: Trophy,
    title: 'Advanced Training',
    age: 'Ages 16–21',
    description: 'Elite-level coaching for serious players aiming for professional careers.',
    focus: ['Advanced tactics', 'Mental strength', 'Career preparation'],
    level: 'Advanced',
    color: 'from-gold to-amber-600',
  },
  {
    icon: Dumbbell,
    title: 'Fitness & Conditioning',
    age: 'All Ages',
    description: 'Specialized fitness programs to enhance speed, strength, and endurance.',
    focus: ['Strength training', 'Cardio', 'Flexibility'],
    level: 'All Levels',
    color: 'from-red-500 to-orange-500',
  },
];

const Programs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="programs" className="section-padding bg-secondary/30">
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
            Training Programs
          </span>
          <h2 className="section-title">
            Structured Programs for{' '}
            <span className="text-gradient">Every Age Group</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Our age-appropriate programs ensure every player gets the training 
            they need to develop their skills and reach their full potential.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              className="card-elevated p-6 group cursor-pointer"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
              >
                <program.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <div className="mb-4">
                <span className="text-xs font-semibold text-accent uppercase tracking-wide">
                  {program.age}
                </span>
                <h3 className="text-xl font-bold text-foreground mt-1">{program.title}</h3>
              </div>

              <p className="text-muted-foreground text-sm mb-5">{program.description}</p>

              {/* Focus Areas */}
              <div className="space-y-2 mb-5">
                {program.focus.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Level Badge */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-xs font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                  {program.level}
                </span>
                <ArrowRight className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;

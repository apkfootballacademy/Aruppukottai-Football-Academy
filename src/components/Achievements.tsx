import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Medal, Star, Calendar } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: 'District Champions 2026',
    description: 'U-10 team won the Virudhunagar district-level football championship.',
    date: 'February 15, 2026',
  },
  {
    icon: Medal,
    title: 'RPFC Football Tournament',
    description: 'Secured Runner-up position in the RPFC football league tournament.',
    date: 'January 11, 2026',
  },
  {
    icon: Star,
    title: 'Sattur Open Tournament',
    description: 'Achieved 2nd Runner-up against top regional teams in a highly competitive tournament.',
    date: 'November 10, 2024',
  },
  {
    icon: Trophy,
    title: 'Inter-District Winners',
    description: 'Junior team secured first place in inter-district friendly series.',
    date: 'October 2023',
  },
];

const playerHighlights = [
  { name: 'Yuga Bharathi', achievement: 'Player of the Month', image: '🏆' },
  { name: 'Yuga Bharathi', achievement: 'Top Scorer', image: '⚽' },
  { name: 'Athi', achievement: 'Best Defender', image: '🛡️' },
];

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 'some' });

  return (
    <section id="achievements" className="section-padding bg-secondary/30">
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
            Achievements
          </span>
          <h2 className="section-title">
            Our <span className="text-gradient">Proud Moments</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            A testament to the hard work and dedication of our players and coaches.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Achievements List */}
          <div className="lg:col-span-2 space-y-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                className="card-elevated p-6 flex gap-5 items-start"
              >
                <div className="icon-box flex-shrink-0">
                  <achievement.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-bold text-foreground">{achievement.title}</h3>
                    <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-full flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {achievement.date}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Player Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="card-elevated p-6"
          >
            <h3 className="font-bold text-foreground mb-6 flex items-center gap-2">
              <Star className="w-5 h-5 text-gold" />
              Player Highlights
            </h3>
            <div className="space-y-4">
              {playerHighlights.map((player, index) => (
                <div
                  key={player.name}
                  className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-2xl">
                    {player.image}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{player.name}</div>
                    <div className="text-sm text-muted-foreground">{player.achievement}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;

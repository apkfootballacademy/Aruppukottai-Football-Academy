import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Kumar R.',
    role: 'Parent',
    content: 'My son has transformed completely since joining. The coaches focus not just on football skills but also on discipline and fitness. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Selvam P.',
    role: 'Parent',
    content: 'The academy has given my child confidence and a passion for sports. The structured training and regular matches are excellent.',
    rating: 5,
  },
  {
    name: 'Arun K.',
    role: 'Student, Age 14',
    content: 'I love coming to practice every day. The coaches are friendly and push us to be better. I have improved so much in the last year.',
    rating: 5,
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-background">
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
            Testimonials
          </span>
          <h2 className="section-title">
            What <span className="text-gradient">Families Say</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Hear from parents and students about their experience with our academy.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              className="card-elevated p-6 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Quote className="w-5 h-5 text-accent" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/80 text-sm leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-semibold text-sm">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                  <div className="text-muted-foreground text-xs">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background section-shell">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-primary bg-sunset-gradient bg-clip-text text-transparent">
              Our Story
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Where the Ocean Meets
              <br />
              <span className="text-gradient-gold">Tradition</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Nestled in the heart of Byculla East, Masta Gajali has been serving Mumbai's
              most authentic coastal seafood for generations. Every dish tells a story—of
              fishermen setting sail at dawn, of family recipes passed down through decades,
              and of the vibrant culinary spirit that makes this city unforgettable.
            </p>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { number: "558+", label: "Happy Reviews" },
                { number: "4.8", label: "Google Rating" },
                { number: "50+", label: "Signature Dishes" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5, type: "spring", damping: 16 }}
                  whileHover={{ y: -6, scale: 1.05 }}
                  className="relative text-center rounded-xl glass-card card-hover-lift px-4 py-5 shadow-warm/40 overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-x-0 -bottom-6 h-16 bg-gradient-to-t from-golden/10 via-transparent to-transparent"
                    animate={{ opacity: [0.1, 0.4, 0.1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.4 }}
                  />
                  <motion.div
                    className="font-display text-3xl font-bold text-primary relative z-10"
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.5 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="font-body text-sm text-muted-foreground mt-1 relative z-10">
                    {stat.label}
                  </div>
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

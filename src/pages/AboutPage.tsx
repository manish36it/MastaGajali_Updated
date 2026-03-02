import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/WaveDivider";
import logo from "@/assets/masta-gajali-logo.png";

const AboutPage = () => {
  const stats = [
    { number: "558+", label: "Happy Reviews" },
    { number: "4.8", label: "Google Rating" },
    { number: "50+", label: "Signature Dishes" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero-style top section – same look as home Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-[hsl(20,15%,10%)]">
        {/* Animated Rangoli / mandala background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`mandala-${i}`}
              className="absolute rounded-full border-2 border-golden/10"
              style={{
                width: 200 + i * 180,
                height: 200 + i * 180,
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
              animate={{ rotate: i % 2 === 0 ? 360 : -360, scale: [1, 1.05, 1] }}
              transition={{ duration: 30 + i * 10, repeat: Infinity, ease: "linear" }}
            />
          ))}
          <motion.div
            className="absolute -inset-20 bg-[conic-gradient(from_120deg_at_10%_20%,#ff7b39_0deg,#facc6b_60deg,#f97316_120deg,#22d3ee_210deg,#0f172a_300deg)] mix-blend-screen opacity-20"
            animate={{ rotate: [0, 25, -15, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute -inset-32 bg-[radial-gradient(circle_at_0%_0%,rgba(248,250,252,0.12),transparent_55%),radial-gradient(circle_at_100%_0%,rgba(251,191,36,0.18),transparent_55%),radial-gradient(circle_at_0%_100%,rgba(56,189,248,0.15),transparent_60%)] opacity-40"
            animate={{ scale: [1, 1.08, 1], x: [0, -20, 10, 0], y: [0, 15, -10, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(20,15%,10%/0.4)] via-[hsl(20,15%,10%/0.6)] to-[hsl(20,15%,10%/0.95)]" />
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <span className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-golden">
              About Us
            </span>
            <motion.h1
              className="font-display text-3xl md:text-5xl font-bold text-primary-foreground leading-tight mt-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <span className="text-gradient-gold">पारंपारिक चवीची अस्सल मेजवानी!!</span>
            </motion.h1>
            <motion.p
              className="font-body text-base text-primary-foreground/70 mt-4 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Authentic Malwani Veg & Non-Veg, Tandoor & Shawarma
            </motion.p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" className="w-full h-8 md:h-12" preserveAspectRatio="none">
            <motion.path
              d="M0,30 Q36,0 72,30 Q108,60 144,30 Q180,0 216,30 Q252,60 288,30 Q324,0 360,30 Q396,60 432,30 Q468,0 504,30 Q540,60 576,30 Q612,0 648,30 Q684,60 720,30 Q756,0 792,30 Q828,60 864,30 Q900,0 936,30 Q972,60 1008,30 Q1044,0 1080,30 Q1116,60 1152,30 Q1188,0 1224,30 Q1260,60 1296,30 Q1332,0 1368,30 Q1404,60 1440,30 L1440,60 L0,60 Z"
              fill="hsl(var(--background))"
              animate={{
                d: [
                  "M0,30 Q36,0 72,30 Q108,60 144,30 Q180,0 216,30 Q252,60 288,30 Q324,0 360,30 Q396,60 432,30 Q468,0 504,30 Q540,60 576,30 Q612,0 648,30 Q684,60 720,30 Q756,0 792,30 Q828,60 864,30 Q900,0 936,30 Q972,60 1008,30 Q1044,0 1080,30 Q1116,60 1152,30 Q1188,0 1224,30 Q1260,60 1296,30 Q1332,0 1368,30 Q1404,60 1440,30 L1440,60 L0,60 Z",
                  "M0,35 Q36,5 72,35 Q108,55 144,25 Q180,5 216,35 Q252,55 288,25 Q324,5 360,35 Q396,55 432,25 Q468,5 504,35 Q540,55 576,25 Q612,5 648,35 Q684,55 720,25 Q756,5 792,35 Q828,55 864,25 Q900,5 936,35 Q972,55 1008,25 Q1044,5 1080,35 Q1116,55 1152,25 Q1188,5 1224,35 Q1260,55 1296,25 Q1332,5 1368,35 Q1404,55 1440,35 L1440,60 L0,60 Z",
                  "M0,30 Q36,0 72,30 Q108,60 144,30 Q180,0 216,30 Q252,60 288,30 Q324,0 360,30 Q396,60 432,30 Q468,0 504,30 Q540,60 576,30 Q612,0 648,30 Q684,60 720,30 Q756,0 792,30 Q828,60 864,30 Q900,0 936,30 Q972,60 1008,30 Q1044,0 1080,30 Q1116,60 1152,30 Q1188,0 1224,30 Q1260,60 1296,30 Q1332,0 1368,30 Q1404,60 1440,30 L1440,60 L0,60 Z",
                ],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </div>
      </section>

      {/* Main content – same section style as home About / SignatureDishes */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Our Story
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
                Where the Ocean Meets
                <br />
                <span className="text-gradient-gold">Tradition</span>
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                We serve Authentic Malwani Veg and Non-Veg along with Tandoor and
                Shawarma at our Restaurant. We have AC dining with a musical and cozy
                ambiance. We also have Indian Bhaithak dining at our place. Do visit to
                quench your taste buds.
              </p>

              {/* Logo card – same card style as home */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-12 rounded-xl overflow-hidden bg-card border border-border/60 shadow-warm/40 max-w-sm mx-auto"
              >
                <img
                  src={logo}
                  alt="Masta Gajali Logo"
                  className="w-full h-auto object-contain p-6"
                />
              </motion.div>

              {/* Stats – same as home About section */}
              <div className="mt-12 grid grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.3 + index * 0.1,
                      duration: 0.5,
                      type: "spring",
                      damping: 16,
                    }}
                    whileHover={{ y: -6, scale: 1.05 }}
                    className="relative text-center rounded-xl bg-card/40 border border-border/60 px-4 py-5 shadow-warm/40 overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-x-0 -bottom-6 h-16 bg-gradient-to-t from-golden/10 via-transparent to-transparent"
                      animate={{ opacity: [0.1, 0.4, 0.1] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.4,
                      }}
                    />
                    <motion.div
                      className="font-display text-3xl font-bold text-primary relative z-10"
                      animate={{ scale: [1, 1.08, 1] }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
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

      <WaveDivider />
      <Footer />
    </div>
  );
};

export default AboutPage;

import { motion } from "framer-motion";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/WaveDivider";

const ReviewsPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero-style top – same look as Home/About */}      
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-[hsl(20,15%,10%)]">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`r-${i}`}
              className="absolute rounded-full border-2 border-golden/10"
              style={{
                width: 180 + i * 160,
                height: 180 + i * 160,
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
              animate={{ rotate: i % 2 === 0 ? 360 : -360, scale: [1, 1.04, 1] }}
              transition={{ duration: 28 + i * 8, repeat: Infinity, ease: "linear" }}
            />
          ))}
          <motion.div
            className="absolute -inset-20 bg-[conic-gradient(from_120deg_at_10%_20%,#ff7b39_0deg,#facc6b_60deg,#f97316_120deg,#22d3ee_210deg,#0f172a_300deg)] mix-blend-screen opacity-20"
            animate={{ rotate: [0, 25, -15, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
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
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <span className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-golden">
              Reviews
            </span>
            <motion.h1
              className="font-display text-3xl md:text-5xl font-bold text-primary-foreground leading-tight mt-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              Loved by <span className="text-gradient-gold">Thousands</span>
            </motion.h1>
            <motion.p
              className="font-body text-base text-primary-foreground/70 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Real snippets, high ratings, and the vibe that keeps people coming back.
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

      <Reviews standalone />

      <WaveDivider />
      <Footer />
    </div>
  );
};

export default ReviewsPage;

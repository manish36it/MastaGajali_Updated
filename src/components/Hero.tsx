import { motion } from "framer-motion";
import type { Transition, TargetAndTransition } from "framer-motion";
import { MapPin, ChevronDown } from "lucide-react";
import heroplatter from "@/assets/img.png";

const fadeUp = (delay = 0): {
  initial: TargetAndTransition;
  animate: TargetAndTransition;
  transition: Transition;
} => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.75, ease: "easeOut" as const },
});

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#1a120a]">

      {/* ── Background layer ─────────────────────────────────────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Rotating mandala rings */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`ring-${i}`}
            className="absolute rounded-full border border-amber-400/10"
            style={{
              width: 180 + i * 160,
              height: 180 + i * 160,
              left: "50%",
              top: "50%",
              translateX: "-50%",
              translateY: "-50%",
            }}
            animate={{ rotate: i % 2 === 0 ? 360 : -360, scale: [1, 1.04, 1] }}
            transition={{ duration: 28 + i * 8, repeat: Infinity, ease: "linear" }}
          />
        ))}

        {/* Aurora conic gradient */}
        <motion.div
          className="absolute -inset-20 mix-blend-screen opacity-[0.18]"
          style={{
            background:
              "conic-gradient(from 120deg at 10% 20%, #ff7b39 0deg, #facc6b 60deg, #f97316 120deg, #22d3ee 210deg, #0f172a 300deg)",
          }}
          animate={{ rotate: [0, 30, -15, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        />

        {/* Radial ambient blobs */}
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(circle at 80% 20%, rgba(251,191,36,0.18) 0%, transparent 55%), radial-gradient(circle at 5% 80%, rgba(56,189,248,0.12) 0%, transparent 55%)",
          }}
          animate={{ scale: [1, 1.07, 1], x: [0, -18, 8, 0], y: [0, 12, -8, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Bottom vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(26,18,10,0.35) 0%, rgba(26,18,10,0.55) 55%, rgba(26,18,10,0.97) 100%)",
          }}
        />
      </div>

      {/* ── Main content ─────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col md:flex-row flex-1 min-h-screen">

        {/* Left — Text */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col justify-center items-start text-left
                     px-6 sm:px-10 md:px-16
                     pt-28 pb-8 md:py-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full
                       bg-amber-400/10 border border-amber-400/30
                       text-amber-300 text-xs font-semibold tracking-widest uppercase mb-5"
            {...fadeUp(0.2)}
            animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          >
            🌊 Malwani Coastal Kitchen
          </motion.span>

          {/* Headline */}
          <motion.h1
            className="font-display text-4xl sm:text-5xl md:text-5xl lg:text-6xl
                       font-bold text-white leading-[1.1] mb-5"
            {...fadeUp(0.35)}
          >
            Authentic{" "}
            <span className="text-gradient-gold block sm:inline">
              Malwani Seafood
            </span>
          </motion.h1>

          {/* Sub-text */}
          <motion.p
            className="text-white/65 text-base sm:text-lg leading-relaxed mb-8 max-w-md"
            {...fadeUp(0.55)}
          >
            अस्सल मालवणी चवीचा खजिना — Veg &amp; Non-Veg, Tandoor &amp; Shawarma.
            AC dining with live musical ambiance at Mazgaon, Mumbai.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-3"
            {...fadeUp(0.72)}
          >
            <motion.a
              href="/menu"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl
                         bg-primary text-primary-foreground font-semibold text-sm
                         shadow-lg hover:opacity-90 transition-opacity"
            >
              🍽️ Explore Menu
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl
                         border border-amber-400/40 text-amber-300 font-semibold text-sm
                         hover:bg-amber-400/10 transition-colors"
            >
              <MapPin className="w-4 h-4" />
              Get Directions
            </motion.a>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            className="mt-12 hidden md:flex items-center gap-2 text-white/30 text-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-4 h-4" />
            </motion.div>
            Scroll to explore
          </motion.div>
        </motion.div>

        {/* Right — Image */}
        <motion.div
          className="w-full md:w-1/2 relative
                     h-72 sm:h-96 md:h-auto md:min-h-screen
                     flex-shrink-0"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Image container — leaves bottom 80px for wave */}
          <div className="absolute inset-x-0 top-0 bottom-20 md:bottom-24 pt-16 md:pt-20 px-4 md:px-10 flex items-center justify-center">
            <div className="relative w-full h-full">

              {/* Image frame with glow border */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl"
                style={{ boxShadow: "0 0 40px rgba(250,180,50,0.18), 0 8px 32px rgba(0,0,0,0.5)" }}
              >
                {/* Animated golden glow ring */}
                <motion.div
                  className="absolute inset-0 z-20 pointer-events-none rounded-2xl"
                  style={{
                    boxShadow:
                      "inset -10px 0 50px rgba(250,180,50,0.2), inset 10px 0 50px rgba(250,180,50,0.12), inset 0 -20px 40px rgba(0,0,0,0.4)",
                  }}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Floating food image */}
                <motion.img
                  src={heroplatter}
                  alt="Masta Gajali Signature Platter"
                  className="w-full h-full object-cover object-center rounded-2xl"
                  animate={{ scale: [1, 1.04, 1], y: [0, -6, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Left-side charcoal fade (blends into text section) */}
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(26,18,10,0.55) 0%, transparent 38%)",
                  }}
                />
                {/* Bottom fade */}
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 45%)",
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Animated wave divider at bottom ──────────────────────── */}
      <div className="absolute bottom-0 left-0 w-full z-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 70"
          className="w-full h-10 md:h-16"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            fill="hsl(var(--background))"
            animate={{
              d: [
                "M0,35 Q180,0 360,35 Q540,70 720,35 Q900,0 1080,35 Q1260,70 1440,35 L1440,70 L0,70 Z",
                "M0,42 Q180,8 360,28 Q540,55 720,28 Q900,5 1080,42 Q1260,65 1440,38 L1440,70 L0,70 Z",
                "M0,35 Q180,0 360,35 Q540,70 720,35 Q900,0 1080,35 Q1260,70 1440,35 L1440,70 L0,70 Z",
              ],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;

import { motion } from "framer-motion";

const spices = [
  { emoji: "🌶️", x: "10%", delay: 0, duration: 15 },
  { emoji: "🫚", x: "25%", delay: 2, duration: 18 },
  { emoji: "🍋", x: "45%", delay: 4, duration: 12 },
  { emoji: "🌿", x: "65%", delay: 1, duration: 16 },
  { emoji: "🦐", x: "80%", delay: 3, duration: 14 },
  { emoji: "🐟", x: "90%", delay: 5, duration: 17 },
  { emoji: "🦀", x: "35%", delay: 6, duration: 13 },
  { emoji: "🥥", x: "55%", delay: 7, duration: 19 },
];

const FloatingSpices = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    {spices.map((s, i) => (
      <motion.div
        key={i}
        className="absolute text-xl md:text-2xl opacity-[0.08]"
        style={{ left: s.x }}
        initial={{ y: "110vh", rotate: 0 }}
        animate={{ y: "-10vh", rotate: 360 }}
        transition={{
          duration: s.duration,
          repeat: Infinity,
          delay: s.delay,
          ease: "linear",
        }}
      >
        {s.emoji}
      </motion.div>
    ))}
  </div>
);

export default FloatingSpices;

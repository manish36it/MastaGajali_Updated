import { motion } from "framer-motion";

const SwimmingFish = () => {
  const fish = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    y: 15 + i * 18,
    duration: 12 + i * 4,
    delay: i * 3,
    size: 18 + Math.random() * 14,
    flip: i % 2 === 0,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.07]">
      {fish.map((f) => (
        <motion.div
          key={f.id}
          className="absolute"
          style={{ top: `${f.y}%` }}
          initial={{ x: f.flip ? "110vw" : "-10vw" }}
          animate={{ x: f.flip ? "-10vw" : "110vw" }}
          transition={{
            duration: f.duration,
            repeat: Infinity,
            delay: f.delay,
            ease: "linear",
          }}
        >
          <svg
            width={f.size}
            height={f.size}
            viewBox="0 0 24 24"
            fill="hsl(var(--ocean))"
            style={{ transform: f.flip ? "scaleX(-1)" : "none" }}
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.85 0 3.58-.5 5.07-1.38L22 22l-1.38-4.93C21.5 15.58 22 13.85 22 12c0-5.52-4.48-10-10-10z" opacity="0" />
            <path d="M2 12c0 2 3 6 10 6s10-4 10-6-3-6-10-6S2 10 2 12zm15-1a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
            <path d="M0 12l3-4v8l-3-4z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default SwimmingFish;

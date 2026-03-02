import { motion } from "framer-motion";

interface WaveDividerProps {
  flip?: boolean;
  className?: string;
}

const WaveDivider = ({ flip = false, className = "" }: WaveDividerProps) => (
  <div className={`relative w-full overflow-hidden ${flip ? "rotate-180" : ""} ${className}`}>
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className="w-full h-16 md:h-24"
    >
      <motion.path
        d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
        fill="hsl(var(--ocean))"
        fillOpacity="0.15"
        initial={{ d: "M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z" }}
        animate={{
          d: [
            "M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z",
            "M0,80 C240,20 480,100 720,40 C960,0 1200,100 1440,80 L1440,120 L0,120 Z",
            "M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z",
          ],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path
        d="M0,80 C360,20 720,100 1080,40 C1260,20 1380,60 1440,80 L1440,120 L0,120 Z"
        fill="hsl(var(--primary))"
        fillOpacity="0.1"
        initial={{ d: "M0,80 C360,20 720,100 1080,40 C1260,20 1380,60 1440,80 L1440,120 L0,120 Z" }}
        animate={{
          d: [
            "M0,80 C360,20 720,100 1080,40 C1260,20 1380,60 1440,80 L1440,120 L0,120 Z",
            "M0,40 C360,100 720,20 1080,80 C1260,100 1380,40 1440,40 L1440,120 L0,120 Z",
            "M0,80 C360,20 720,100 1080,40 C1260,20 1380,60 1440,80 L1440,120 L0,120 Z",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  </div>
);

export default WaveDivider;

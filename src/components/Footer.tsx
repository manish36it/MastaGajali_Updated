import { motion } from "framer-motion";
import logo from "@/assets/masta-gajali-logo.png";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-[#1a120a] text-amber-100/70 py-8 md:py-10 border-t border-amber-500/20 relative overflow-hidden"
    >
      <motion.div
        className="absolute inset-x-0 -top-10 h-10 bg-gradient-to-b from-golden/10 via-transparent to-transparent pointer-events-none"
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
        <motion.div
          className="relative inline-flex h-12 md:h-14 min-w-[150px] md:min-w-[175px] items-center justify-center rounded-full border-2 border-[#22272e] bg-[#22272e] px-4 shadow-[0_14px_40px_rgba(0,0,0,0.7)] overflow-hidden"
          whileHover={{ scale: 1.06, rotate: -2 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        >
          <img
            src={logo}
            alt="Masta Gajali"
            className="relative h-9 md:h-11 w-full object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
          />
        </motion.div>
        <motion.p
          className="font-body text-xs text-center md:text-right"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          © {new Date().getFullYear()} Masta Gajali. Mazgaon, Mumbai 400010. All rights reserved.
          <br />
          <span className="text-golden/60">अस्सल मालवणी चवीचा खजिना</span>
          <br />
          <span className="text-primary-foreground/40">📞 084337 62898 | 12–4 PM, 7–11:30 PM</span>
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;

import { motion } from "framer-motion";
import logo from "@/assets/masta-gajali-logo.png";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-[hsl(20,12%,8%)] text-primary-foreground/50 py-10 border-t border-golden/10 relative overflow-hidden"
    >
      <motion.div
        className="absolute inset-x-0 -top-10 h-10 bg-gradient-to-b from-golden/10 via-transparent to-transparent pointer-events-none"
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
        <motion.img
          src={logo}
          alt="Masta Gajali"
          className="h-10 w-auto opacity-80"
          whileHover={{ scale: 1.06, rotate: -2 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        />
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

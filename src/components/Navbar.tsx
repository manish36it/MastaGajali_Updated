import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/masta-gajali-logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/", isRoute: true },
    { label: "Menu", href: "/menu", isRoute: true },
    { label: "About", href: "/about", isRoute: true },
    { label: "Gallery", href: "/gallery", isRoute: true },
    { label: "Reviews", href: "/reviews", isRoute: true },
    { label: "Visit Us", href: "/contact", isRoute: true },
  ];

  const bg = scrolled || !isHome
    ? "bg-card/95 backdrop-blur-md shadow-warm border-b border-border"
    : "bg-transparent";

  const textColor = scrolled || !isHome ? "text-foreground" : "text-primary-foreground";

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bg}`}
    >
      {/* subtle animated golden underline */}
      <motion.div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-golden/60 to-transparent"
        animate={{ opacity: scrolled ? [0.2, 0.7, 0.2] : 0.2 }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="relative flex items-center gap-2">
          <motion.div
            className="relative inline-flex items-center justify-center rounded-[999px] border-[3px] border-[#e5e1d8]/95 bg-[#0d151c] px-4 py-2 shadow-[0_14px_40px_rgba(0,0,0,0.7)] overflow-hidden"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <motion.img
              src={logo}
              alt="Masta Gajali"
              className="relative h-8 md:h-10 w-auto drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
              whileHover={{ rotate: -2 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            />
          </motion.div>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            if (link.isRoute) {
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`font-body text-sm font-medium ${textColor} opacity-80 hover:opacity-100 hover:text-golden transition-all relative group`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-golden group-hover:w-full transition-all duration-300" />
                </Link>
              );
            }

            // Section links: on home use anchor, on other pages navigate to home with hash
            const hashTarget = `/${link.href}`;
            if (isHome) {
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`font-body text-sm font-medium ${textColor} opacity-80 hover:opacity-100 hover:text-golden transition-all relative group`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-golden group-hover:w-full transition-all duration-300" />
                </a>
              );
            }

            return (
              <Link
                key={link.label}
                to={hashTarget}
                className={`font-body text-sm font-medium ${textColor} opacity-80 hover:opacity-100 hover:text-golden transition-all relative group`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-golden group-hover:w-full transition-all duration-300" />
              </Link>
            );
          })}
          <motion.div
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full bg-gradient-to-r from-golden via-primary to-golden p-[1px] shadow-[0_12px_35px_rgba(0,0,0,0.7)]"
          >
            <Link
              to="/menu"
              className="px-6 py-2 rounded-full bg-[hsl(22,15%,12%)] text-primary-foreground font-body font-semibold text-sm flex items-center gap-2"
            >
              <span>Order Now</span>
              <span className="text-lg leading-none">🪔</span>
            </Link>
          </motion.div>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden ${textColor}`}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card/98 backdrop-blur-lg border-b border-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {navLinks.map((link) => {
                if (link.isRoute) {
                  return (
                    <Link
                      key={link.label}
                      to={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="font-body text-base text-foreground py-2 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  );
                }

                const hashTarget = `/${link.href}`;
                if (isHome) {
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="font-body text-base text-foreground py-2 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  );
                }

                return (
                  <Link
                    key={link.label}
                    to={hashTarget}
                    onClick={() => setMobileOpen(false)}
                    className="font-body text-base text-foreground py-2 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                );
              })}
              <motion.div
                whileTap={{ scale: 0.97 }}
                className="mt-2 rounded-full bg-gradient-to-r from-golden via-primary to-golden p-[1px]"
              >
                <Link
                  to="/menu"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center px-5 py-3 rounded-full bg-[hsl(22,15%,12%)] text-primary-foreground font-body font-semibold text-sm"
                >
                  Order Now 🪔
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

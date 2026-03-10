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

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: "Home", href: "/", isRoute: true },
    { label: "Menu", href: "/menu", isRoute: true },
    { label: "About", href: "/about", isRoute: true },
    { label: "Gallery", href: "/gallery", isRoute: true },
    { label: "Reviews", href: "/reviews", isRoute: true },
    { label: "Visit Us", href: "/contact", isRoute: true },
  ];

  const isLinkActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  const bg = scrolled || !isHome
    ? "bg-[linear-gradient(135deg,hsl(205_62%_14%/.78),hsl(20_20%_10%/.72),hsl(205_62%_14%/.78))] backdrop-blur-xl shadow-[0_10px_36px_rgba(0,0,0,0.35)] border-b border-golden/30"
    : "bg-black/95 md:bg-transparent backdrop-blur-xl md:backdrop-blur-0 border-b border-golden/25 md:border-b-0";
  const showNavEffects = scrolled || !isHome;

  const textColor = "text-white";

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    show: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.35,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.06,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.25, ease: "easeIn" },
    },
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } },
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 overflow-hidden ${bg}`}
    >
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 12% 24%, hsl(var(--golden) / 0.22), transparent 28%), radial-gradient(circle at 88% 18%, hsl(var(--ocean) / 0.20), transparent 30%), radial-gradient(circle at 52% 125%, hsl(var(--primary) / 0.20), transparent 36%)",
        }}
        animate={{ opacity: showNavEffects ? [0.6, 0.9, 0.6] : [0.3, 0.55, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-golden/10 via-transparent to-primary/10"
        animate={{
          opacity: showNavEffects ? [0.35, 0.55, 0.35] : [0.15, 0.3, 0.15],
          backgroundPositionX: ["0%", "100%", "0%"],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ backgroundSize: "200% 100%" }}
      />

      <motion.div
        className="pointer-events-none absolute -top-16 left-1/4 h-28 w-28 rounded-full bg-golden/15 blur-3xl"
        animate={{
          x: [0, 35, 0],
          opacity: showNavEffects ? [0.4, 0.75, 0.4] : [0.25, 0.5, 0.25],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -top-20 right-1/4 h-32 w-32 rounded-full bg-primary/20 blur-3xl"
        animate={{
          x: [0, -30, 0],
          opacity: showNavEffects ? [0.35, 0.65, 0.35] : [0.2, 0.45, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* subtle animated golden underline */}
      <motion.div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-golden/60 to-transparent"
        animate={{ opacity: showNavEffects ? [0.35, 0.9, 0.35] : [0.2, 0.6, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="relative flex items-center gap-2">
          <motion.div
            className="relative inline-flex h-12 md:h-14 min-w-[150px] md:min-w-[175px] items-center justify-center rounded-full border-2 border-[#22272e] bg-[#22272e] px-4 shadow-[0_14px_40px_rgba(0,0,0,0.7)] overflow-hidden"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <motion.img
              src={logo}
              alt="Masta Gajali"
              className="relative h-9 md:h-11 w-full object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
              whileHover={{ rotate: -2 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            />
          </motion.div>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-4 lg:gap-5">
          {navLinks.map((link, index) => {
            const isActiveRoute = isLinkActive(link.href);

            if (link.isRoute) {
              return (
                <motion.div
                  key={link.label}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                  whileHover={{ y: -2 }}
                >
                  <Link
                    to={link.href}
                    className={`font-body text-sm font-medium ${textColor} transition-all relative group px-3 py-1.5 rounded-full hover:text-golden ${isActiveRoute ? "opacity-100 text-golden" : "opacity-80 hover:opacity-100"}`}
                  >
                    {isActiveRoute && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 rounded-full bg-golden/20 border border-golden/50 shadow-[0_0_20px_rgba(251,191,36,0.25)]"
                        transition={{ type: "spring", stiffness: 320, damping: 25 }}
                      />
                    )}
                    {isActiveRoute && (
                      <motion.span
                        className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-golden/35 blur-md"
                        animate={{ scale: [0.9, 1.15, 0.9], opacity: [0.4, 0.7, 0.4] }}
                        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                    <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-golden group-hover:w-3/4 group-hover:left-[12%] transition-all duration-300" />
                  </Link>
                </motion.div>
              );
            }

            // Section links: on home use anchor, on other pages navigate to home with hash
            const hashTarget = `/${link.href}`;
            if (isHome) {
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className={`font-body text-sm font-medium ${textColor} opacity-80 hover:opacity-100 hover:text-golden transition-all relative group px-3 py-1.5 rounded-full`}
                  whileHover={{ y: -2 }}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-golden group-hover:w-3/4 group-hover:left-[12%] transition-all duration-300" />
                </motion.a>
              );
            }

            return (
              <motion.div key={link.label} whileHover={{ y: -2 }}>
              <Link
                key={link.label}
                to={hashTarget}
                className={`font-body text-sm font-medium ${textColor} opacity-80 hover:opacity-100 hover:text-golden transition-all relative group px-3 py-1.5 rounded-full`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-golden group-hover:w-3/4 group-hover:left-[12%] transition-all duration-300" />
              </Link>
              </motion.div>
            );
          })}
          <motion.div
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full bg-gradient-to-r from-golden via-primary to-golden p-[1px] shadow-[0_12px_35px_rgba(0,0,0,0.7)]"
          >
            <Link
              to="/contact"
              className="px-6 py-2 rounded-full bg-[hsl(22,15%,12%)] text-primary-foreground font-body font-semibold text-sm flex items-center gap-2"
            >
              <span>Order Now</span>
              <span className="text-lg leading-none">🪔</span>
            </Link>
          </motion.div>
        </div>

        {/* Mobile toggle */}
        <motion.button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden ${textColor} relative p-1 rounded-md`}
          whileTap={{ scale: 0.9 }}
          animate={{ rotate: mobileOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="md:hidden bg-[#1a120a]/98 backdrop-blur-lg border-b border-amber-500/30 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {navLinks.map((link) => {
                if (link.isRoute) {
                  return (
                    <motion.div key={link.label} variants={mobileItemVariants}>
                    <Link
                      key={link.label}
                      to={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`font-body text-base py-3 px-4 rounded-lg transition-all block ${isLinkActive(link.href) ? "text-amber-400 bg-amber-500/20 border border-amber-500/40 font-semibold" : "text-amber-100 hover:text-amber-300 hover:bg-amber-500/10"}`}
                    >
                      {link.label}
                    </Link>
                    </motion.div>
                  );
                }

                const hashTarget = `/${link.href}`;
                if (isHome) {
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      variants={mobileItemVariants}
                      className="font-body text-base text-amber-100 py-3 px-4 rounded-lg hover:text-amber-300 hover:bg-amber-500/10 transition-all block"
                    >
                      {link.label}
                    </motion.a>
                  );
                }

                return (
                  <motion.div key={link.label} variants={mobileItemVariants}>
                  <Link
                    key={link.label}
                    to={hashTarget}
                    onClick={() => setMobileOpen(false)}
                    className="font-body text-base text-amber-100 py-3 px-4 rounded-lg hover:text-amber-300 hover:bg-amber-500/10 transition-all block"
                  >
                    {link.label}
                  </Link>
                  </motion.div>
                );
              })}
              <motion.div
                variants={mobileItemVariants}
                whileTap={{ scale: 0.97 }}
                className="mt-3 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 p-[2px] shadow-lg"
              >
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center px-5 py-3 rounded-full bg-[#1a120a] text-amber-100 font-body font-semibold text-sm"
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

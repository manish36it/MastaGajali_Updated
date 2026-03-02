import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown } from "lucide-react";
import MenuCategorySection from "@/components/menu/MenuCategorySection";
import { menuData } from "@/data/menuData";

const MenuPage = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = menuData
    .map((cat) => ({
      ...cat,
      items: cat.items.filter(
        (item) =>
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.nameHi?.includes(search)
      ),
    }))
    .filter(
      (cat) =>
        cat.items.length > 0 &&
        (!activeCategory || cat.title === activeCategory)
    );

  const totalItems = filtered.reduce((sum, cat) => sum + cat.items.length, 0);

  return (
    <div className="min-h-screen pt-20 bg-[radial-gradient(circle_at_20%_-10%,hsl(38_85%_55%_/_0.25),transparent_45%),radial-gradient(circle_at_90%_0%,hsl(10_80%_55%_/_0.12),transparent_50%),linear-gradient(to_bottom,#fff7ed,#fffbf5_45%,#fff7ed)]">
      {/* Hero banner */}
      <section className="relative py-20 md:py-32 bg-[hsl(20,15%,10%)] overflow-hidden">
        {/* Animated rangoli circles */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: 100 + i * 140,
                height: 100 + i * 140,
                border: `${1 + (i % 2)}px ${i % 3 === 0 ? 'dashed' : 'solid'} hsl(38 85% 55% / ${0.06 + i * 0.02})`,
              }}
              animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
              transition={{ duration: 20 + i * 10, repeat: Infinity, ease: "linear" }}
            />
          ))}
        </div>

        {/* Floating diyas & emojis */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${3 + Math.random() * 94}%`,
              top: `${3 + Math.random() * 94}%`,
              fontSize: `${14 + Math.random() * 16}px`,
            }}
            animate={{
              y: [0, -25 - Math.random() * 15, 0],
              opacity: [0.15, 0.65, 0.15],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            {['🪔', '🌶️', '🦐', '🦀', '🐟', '🌺', '🥥', '🍋', '🪷', '🧂', '🫚', '🍚', '🥘', '🍽️', '✨'][i]}
          </motion.div>
        ))}

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            {/* Animated plate icon */}
            <motion.div
              className="inline-block text-7xl md:text-8xl mb-6"
              animate={{
                rotate: [0, 8, -8, 5, -5, 0],
                scale: [1, 1.15, 1.05, 1.12, 1],
              }}
              transition={{ duration: 4, repeat: Infinity, repeatDelay: 1 }}
            >
              🍽️
            </motion.div>

            <motion.h1
              className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              आमची <span className="text-gradient-gold">जेवणाची यादी</span>
            </motion.h1>

            <motion.p
              className="font-body text-primary-foreground/50 text-lg md:text-xl max-w-xl mx-auto mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              From the streets of Mazgaon to your plate — every dish tells a story of Mumbai's coastal soul.
            </motion.p>

            {/* Animated decorative dots */}
            <motion.div
              className="flex justify-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {[...Array(9)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`rounded-full ${i % 3 === 1 ? 'bg-primary/60 w-3 h-3' : 'bg-golden/50 w-2 h-2'}`}
                  animate={{ scale: [1, 1.6, 1], opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.12 }}
                />
              ))}
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              className="mt-10 flex flex-col items-center text-primary-foreground/30"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="font-body text-xs mb-1">Scroll to explore</span>
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </div>

        {/* Traditional scallop border */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 50" className="w-full h-10 md:h-14" preserveAspectRatio="none">
            <motion.path
              d="M0,25 Q36,0 72,25 Q108,50 144,25 Q180,0 216,25 Q252,50 288,25 Q324,0 360,25 Q396,50 432,25 Q468,0 504,25 Q540,50 576,25 Q612,0 648,25 Q684,50 720,25 Q756,0 792,25 Q828,50 864,25 Q900,0 936,25 Q972,50 1008,25 Q1044,0 1080,25 Q1116,50 1152,25 Q1188,0 1224,25 Q1260,50 1296,25 Q1332,0 1368,25 Q1404,50 1440,25 L1440,50 L0,50 Z"
              fill="hsl(var(--background))"
              animate={{
                d: [
                  "M0,25 Q36,0 72,25 Q108,50 144,25 Q180,0 216,25 Q252,50 288,25 Q324,0 360,25 Q396,50 432,25 Q468,0 504,25 Q540,50 576,25 Q612,0 648,25 Q684,50 720,25 Q756,0 792,25 Q828,50 864,25 Q900,0 936,25 Q972,50 1008,25 Q1044,0 1080,25 Q1116,50 1152,25 Q1188,0 1224,25 Q1260,50 1296,25 Q1332,0 1368,25 Q1404,50 1440,25 L1440,50 L0,50 Z",
                  "M0,30 Q36,5 72,30 Q108,45 144,20 Q180,5 216,30 Q252,45 288,20 Q324,5 360,30 Q396,45 432,20 Q468,5 504,30 Q540,45 576,20 Q612,5 648,30 Q684,45 720,20 Q756,5 792,30 Q828,45 864,20 Q900,5 936,30 Q972,45 1008,20 Q1044,5 1080,30 Q1116,45 1152,20 Q1188,5 1224,30 Q1260,45 1296,20 Q1332,5 1368,30 Q1404,45 1440,30 L1440,50 L0,50 Z",
                  "M0,25 Q36,0 72,25 Q108,50 144,25 Q180,0 216,25 Q252,50 288,25 Q324,0 360,25 Q396,50 432,25 Q468,0 504,25 Q540,50 576,25 Q612,0 648,25 Q684,50 720,25 Q756,0 792,25 Q828,50 864,25 Q900,0 936,25 Q972,50 1008,25 Q1044,0 1080,25 Q1116,50 1152,25 Q1188,0 1224,25 Q1260,50 1296,25 Q1332,0 1368,25 Q1404,50 1440,25 L1440,50 L0,50 Z",
                ],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </div>
      </section>

      {/* Search & filter bar */}
      <div className="container mx-auto px-6 md:px-12 -mt-6 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
          className="bg-[hsl(35_65%_98%/0.82)] rounded-3xl shadow-[0_18px_55px_-28px_rgba(180,83,9,0.55)] p-5 md:p-7 border border-golden/25 backdrop-blur-xl"
        >
          <div className="relative mb-5">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <motion.input
              type="text"
              placeholder="🔍 शोधा... Bombil Fry, Crab Masala, Solkadi..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/70 border border-golden/15 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-golden/50 focus:border-golden/40 transition-all"
              whileFocus={{ scale: 1.01 }}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <motion.button
              whileTap={{ scale: 0.92 }}
              whileHover={{ y: -3, boxShadow: "0 6px 20px -4px hsl(38 85% 55% / 0.2)" }}
              onClick={() => setActiveCategory(null)}
              className={`px-5 py-2 rounded-full font-body text-xs font-semibold transition-all border ${
                !activeCategory
                  ? "bg-primary text-primary-foreground shadow-warm border-primary/20"
                  : "bg-white/60 text-muted-foreground hover:bg-white/80 border-golden/15"
              }`}
            >
              🪷 All ({totalItems})
            </motion.button>
            {menuData.map((cat, i) => (
              <motion.button
                key={cat.title}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.04 }}
                whileTap={{ scale: 0.92 }}
                whileHover={{ y: -3, boxShadow: "0 6px 20px -4px hsl(38 85% 55% / 0.15)" }}
                onClick={() =>
                  setActiveCategory(activeCategory === cat.title ? null : cat.title)
                }
                className={`px-5 py-2 rounded-full font-body text-xs font-semibold transition-all flex items-center gap-1.5 border ${
                  activeCategory === cat.title
                    ? "bg-primary text-primary-foreground shadow-warm border-primary/20"
                    : "bg-white/60 text-muted-foreground hover:bg-white/80 border-golden/15"
                }`}
              >
                {cat.icon}
                {cat.title}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Menu sections */}
      <div className="container mx-auto px-6 md:px-12 py-14 space-y-20">
        <AnimatePresence mode="wait">
          {filtered.map((category, catIdx) => (
            <MenuCategorySection key={category.title} category={category} catIdx={catIdx} />
          ))}
        </AnimatePresence>

        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-24"
          >
            <motion.span
              className="text-8xl mb-6 block"
              animate={{ rotate: [0, -20, 20, -10, 10, 0], y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              🐟
            </motion.span>
            <p className="font-display text-2xl text-muted-foreground">
              काहीही सापडलं नाही
            </p>
            <p className="font-body text-muted-foreground mt-2">No dishes found. Try a different search!</p>
          </motion.div>
        )}
      </div>

      {/* Bottom CTA */}
      <section className="py-24 bg-[hsl(20,15%,10%)] text-center relative overflow-hidden">
        {/* Top scallop */}
        <div className="absolute top-0 left-0 right-0 rotate-180">
          <svg viewBox="0 0 1440 50" className="w-full h-10 md:h-14" preserveAspectRatio="none">
            <path
              d="M0,25 Q36,0 72,25 Q108,50 144,25 Q180,0 216,25 Q252,50 288,25 Q324,0 360,25 Q396,50 432,25 Q468,0 504,25 Q540,50 576,25 Q612,0 648,25 Q684,50 720,25 Q756,0 792,25 Q828,50 864,25 Q900,0 936,25 Q972,50 1008,25 Q1044,0 1080,25 Q1116,50 1152,25 Q1188,0 1224,25 Q1260,50 1296,25 Q1332,0 1368,25 Q1404,50 1440,25 L1440,50 L0,50 Z"
              fill="hsl(var(--background))"
            />
          </svg>
        </div>

        {/* Floating elements */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${5 + Math.random() * 90}%`,
              top: `${15 + Math.random() * 70}%`,
              fontSize: `${16 + Math.random() * 14}px`,
            }}
            animate={{ y: [0, -25, 0], opacity: [0.1, 0.5, 0.1], rotate: [0, 15, -15, 0] }}
            transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, delay: i * 0.4 }}
          >
            {['🪔', '🌺', '🦐', '🦀', '🐟', '🍽️', '✨', '🪷', '🌶️', '🥘'][i]}
          </motion.div>
        ))}

        <div className="container mx-auto px-6 relative z-10 pt-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", damping: 15 }}
          >
            <motion.h2
              className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-3"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              भूक लागली? 🤤
            </motion.h2>
            <p className="font-display text-xl text-golden mb-2">Craving Something?</p>
            <p className="font-body text-primary-foreground/50 mb-8 max-w-md mx-auto">
              Visit us at Mazgaon, Mumbai or call to reserve your table
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                href="tel:08433762898"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-3.5 rounded-xl bg-golden text-accent-foreground font-body font-bold text-sm shadow-golden"
              >
                📞 Call: 084337 62898
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-3.5 rounded-xl border border-golden/40 text-golden font-body font-semibold text-sm hover:bg-golden/10 transition-colors"
              >
                📍 Get Directions
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MenuPage;

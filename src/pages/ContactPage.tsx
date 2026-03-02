import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Clock, Copy, ExternalLink, MapPin, Phone } from "lucide-react";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/WaveDivider";
import justdialLogo from "@/assets/logos/justdial.png";
import swiggyLogo from "@/assets/logos/swiggy.png";
import zomatoLogo from "@/assets/logos/zomato.png";
import instagramLogo from "@/assets/logos/instagram.png";
import facebookLogo from "@/assets/logos/facebook.png";

const ContactPage = () => {
  const [copied, setCopied] = useState(false);
  const reduceMotion = useReducedMotion();

  const location = useMemo(
    () => ({
      address:
        "Shop No. 1, 2, & 3, Malim House, Galaxy CHSL, Rambhau Bhogle Marg, Mazgaon, Mumbai - 400033.",
      landmark:
        "Near the historic Veermata Jijabai Bhosale Botanical Udyan (Byculla Zoo).",
      phoneDisplay: "022-23711623",
      phoneTel: "tel:02223711623",
      instagram: "https://www.instagram.com/mastagajali07/",
      facebook: "https://www.facebook.com/snap2.0multicuisine/",
    }),
    []
  );

  const mapQuery = encodeURIComponent(
    "Masta Gajali, Shop No. 1, 2, & 3, Malim House, Galaxy CHSL, Rambhau Bhogle Marg, Mazgaon, Mumbai 400033"
  );
  const mapsEmbedSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
  const mapsDirectionsHref = `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`;

  const swiggyHref = `https://www.swiggy.com/search?query=${encodeURIComponent("Masta Gajali Mazgaon")}`;
  const zomatoHref = `https://www.zomato.com/mumbai/restaurants?q=${encodeURIComponent("Masta Gajali Mazgaon")}`;
  const justdialHref = `https://www.justdial.com/Mumbai/Masta-Gajali-Mazgaon`;

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(location.address);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      // no-op (clipboard may be blocked in some browsers)
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero-style top – same vibe as Home/About/Gallery */}      
      <section className="relative min-h-[42vh] flex items-center justify-center overflow-hidden bg-[hsl(20,15%,10%)]">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`v-${i}`}
              className="absolute rounded-full border-2 border-golden/10"
              style={{
                width: 180 + i * 160,
                height: 180 + i * 160,
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
              animate={
                reduceMotion
                  ? undefined
                  : { rotate: i % 2 === 0 ? 360 : -360, scale: [1, 1.04, 1] }
              }
              transition={
                reduceMotion ? undefined : { duration: 28 + i * 8, repeat: Infinity, ease: "linear" }
              }
            />
          ))}
          <motion.div
            className="absolute -inset-20 bg-[conic-gradient(from_120deg_at_10%_20%,#ff7b39_0deg,#facc6b_60deg,#f97316_120deg,#22d3ee_210deg,#0f172a_300deg)] mix-blend-screen opacity-20"
            animate={reduceMotion ? undefined : { rotate: [0, 25, -15, 0] }}
            transition={reduceMotion ? undefined : { duration: 22, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute -inset-32 bg-[radial-gradient(circle_at_0%_0%,rgba(248,250,252,0.12),transparent_55%),radial-gradient(circle_at_100%_0%,rgba(251,191,36,0.18),transparent_55%),radial-gradient(circle_at_0%_100%,rgba(56,189,248,0.15),transparent_60%)] opacity-40"
            animate={
              reduceMotion ? undefined : { scale: [1, 1.08, 1], x: [0, -20, 10, 0], y: [0, 15, -10, 0] }
            }
            transition={reduceMotion ? undefined : { duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(20,15%,10%/0.35)] via-[hsl(20,15%,10%/0.6)] to-[hsl(20,15%,10%/0.95)]" />
        </div>

        {/* Extra “crazy” motion: comet sweep + floating emojis + glow blobs */}
        {!reduceMotion && (
          <>
            <motion.div
              className="absolute -inset-10 opacity-25 mix-blend-screen pointer-events-none"
              animate={{ rotate: [0, 12, -8, 0] }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
              style={{
                background:
                  "radial-gradient(circle_at_20%_30%,rgba(250,204,107,0.28),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(249,115,22,0.22),transparent_55%),radial-gradient(circle_at_70%_85%,rgba(56,189,248,0.18),transparent_60%)",
              }}
            />
            <motion.div
              className="absolute left-[-30%] top-[15%] h-[2px] w-[60%] bg-gradient-to-r from-transparent via-white/60 to-transparent blur-[1px] opacity-40 pointer-events-none"
              animate={{ x: ["-10%", "210%"] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.2 }}
            />
            {[
              { e: "🦐", x: "12%", s: "text-2xl", d: 0 },
              { e: "🐟", x: "28%", s: "text-2xl", d: 1.5 },
              { e: "🌶️", x: "46%", s: "text-xl", d: 0.8 },
              { e: "🍋", x: "68%", s: "text-xl", d: 2.2 },
              { e: "🦀", x: "84%", s: "text-2xl", d: 1.1 },
            ].map((p, i) => (
              <motion.div
                key={`float-${i}`}
                className={`absolute ${p.s} opacity-[0.10] select-none pointer-events-none`}
                style={{ left: p.x }}
                initial={{ y: "110%", rotate: 0 }}
                animate={{ y: "-10%", rotate: 360 }}
                transition={{ duration: 14 + i * 2.2, repeat: Infinity, delay: p.d, ease: "linear" }}
              >
                {p.e}
              </motion.div>
            ))}
          </>
        )}

        <div className="relative z-10 container mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <span className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-golden">
              Visit Us
            </span>
            <motion.h1
              className="font-display text-3xl md:text-5xl font-bold text-primary-foreground leading-tight mt-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
            >
              Come Hungry, Leave <span className="text-gradient-gold">Happy</span>
            </motion.h1>
            <motion.p
              className="font-body text-base text-primary-foreground/70 mt-4 max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.28 }}
            >
              Everything you need to find us fast: address, map, timings, parking, and quick call/ordering links.
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

      {/* Main content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-5 gap-6 items-start">
            {/* Address + tips card */}
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, type: "spring", damping: 18 }}
              className="lg:col-span-2 rounded-2xl bg-card border border-border shadow-warm p-7 relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle_at_20%_20%,hsl(38_85%_55%_/_1),transparent_55%),radial-gradient(circle_at_80%_10%,hsl(15_65%_42%_/_1),transparent_55%)",
                }}
                animate={{ opacity: [0.04, 0.08, 0.04] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                      Coordinates (Address)
                    </p>
                    <h2 className="font-display text-2xl font-bold text-foreground mt-2">
                      Masta <span className="text-gradient-gold">Gajali</span>
                    </h2>
                  </div>

                  <motion.button
                    type="button"
                    onClick={copyAddress}
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 border border-border/70 text-foreground text-xs font-body font-semibold"
                  >
                    <Copy className="w-4 h-4 text-primary" />
                    {copied ? "Copied" : "Copy"}
                  </motion.button>
                </div>

                <div className="mt-5 rounded-xl bg-muted/50 border border-border/60 p-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 mt-0.5 text-golden shrink-0" />
                    <div>
                      <p className="font-body text-sm text-foreground/85 leading-relaxed">{location.address}</p>
                      <p className="font-body text-xs text-muted-foreground mt-2">{location.landmark}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  <div className="rounded-xl bg-card/60 border border-border/60 p-4">
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 mt-0.5 text-golden shrink-0" />
                      <div>
                        <p className="font-body font-semibold text-sm text-foreground">Timings</p>
                        <p className="font-body text-sm text-muted-foreground mt-1">
                          Lunch: 12:00 PM – 4:00 PM
                        </p>
                        <p className="font-body text-sm text-muted-foreground">
                          Dinner: 7:00 PM – 11:30 PM
                        </p>
                        <p className="font-body text-xs text-muted-foreground mt-2">Open every day</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl bg-card/60 border border-border/60 p-4">
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 mt-0.5 text-golden shrink-0" />
                      <div>
                        <p className="font-body font-semibold text-sm text-foreground">Reservations & Contact</p>
                        <a
                          href={location.phoneTel}
                          className="font-body text-sm text-primary hover:text-golden transition-colors underline underline-offset-4 mt-1 inline-block"
                        >
                          Call: {location.phoneDisplay}
                        </a>
                        <p className="font-body text-xs text-muted-foreground mt-2">
                          Weekends get busy — call ahead for a table.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-xl bg-muted/50 border border-border/60 p-4">
                  <p className="font-body text-sm font-semibold text-foreground">Getting Here</p>
                  <ul className="mt-2 space-y-2 font-body text-sm text-muted-foreground">
                    <li>
                      <span className="text-foreground/80 font-semibold">By Train:</span>{" "}
                      Quick taxi ride from Byculla Station (Central Line) or Dockyard Road (Harbour Line).
                    </li>
                    <li>
                      <span className="text-foreground/80 font-semibold">Parking:</span>{" "}
                      Free street parking available nearby.
                    </li>
                  </ul>
                </div>

                <div className="mt-6 rounded-xl bg-card/60 border border-border/60 p-4">
                  <p className="font-body text-sm font-semibold text-foreground">Know Before You Go</p>
                  <ul className="mt-2 space-y-2 font-body text-sm text-muted-foreground">
                    <li>
                      <span className="text-foreground/80 font-semibold">Accessibility:</span>{" "}
                      Wheelchair accessible.
                    </li>
                    <li>
                      <span className="text-foreground/80 font-semibold">Payments:</span>{" "}
                      All major UPI accepted (Google Pay, PhonePe, etc.).
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Map + quick actions */}
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.05, type: "spring", damping: 18 }}
              className="lg:col-span-3 space-y-6"
            >
              <motion.div
                className="rounded-2xl overflow-hidden shadow-golden border-2 border-golden/20 bg-card"
                whileHover={reduceMotion ? undefined : { rotate: 0.3, scale: 1.005 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
              >
                <div className="h-[320px] md:h-[420px] w-full">
                  <iframe
                    title="Masta Gajali location"
                    src={mapsEmbedSrc}
                    className="w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </motion.div>

              <div className="grid sm:grid-cols-2 gap-4">
                <motion.a
                  href={mapsDirectionsHref}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -4, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-xl bg-primary text-primary-foreground font-body font-semibold text-sm px-5 py-4 shadow-warm flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Get Directions (Google Maps)
                </motion.a>

                <motion.a
                  href={location.phoneTel}
                  whileHover={{ y: -4, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-xl border border-golden/40 text-golden bg-card font-body font-semibold text-sm px-5 py-4 shadow-warm flex items-center justify-center gap-2 hover:bg-golden/10 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call for a Table
                </motion.a>
              </div>

              {/* Order online + socials */}
              <div className="rounded-2xl bg-muted/40 border border-border shadow-warm p-7 relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/18 to-transparent w-1/2 pointer-events-none"
                  variants={{ rest: { x: "-130%" }, hover: { x: "230%" } }}
                  initial="rest"
                  animate="rest"
                  whileHover="hover"
                  transition={{ duration: 0.75, ease: "easeInOut" }}
                />

                <div className="relative z-10">
                  <div className="flex items-baseline justify-between flex-wrap gap-4">
                    <h3 className="font-display text-2xl font-bold text-foreground">Order Online</h3>
                    <p className="font-body text-xs text-muted-foreground">For delivery & discovery</p>
                  </div>

                  <div className="mt-5 grid sm:grid-cols-3 gap-3">
                    {[
                      { name: "Zomato", href: zomatoHref, logo: zomatoLogo, rating: "4.6/5" },
                      { name: "Swiggy", href: swiggyHref, logo: swiggyLogo, rating: "4.4/5" },
                      { name: "Justdial", href: justdialHref, logo: justdialLogo, rating: "4.7/5" },
                    ].map((p) => (
                      <motion.a
                        key={p.name}
                        href={p.href}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ y: -6, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="group rounded-xl bg-card border border-border/70 px-4 py-4 shadow-warm overflow-hidden flex items-center gap-3"
                      >
                        <div className="w-10 h-10 rounded-full bg-background/60 border border-border flex items-center justify-center overflow-hidden">
                          <img src={p.logo} alt={p.name} className="w-7 h-7 object-contain" />
                        </div>
                        <div className="min-w-0">
                          <p className="font-body text-xs text-muted-foreground">{p.name}</p>
                          <p className="font-display text-lg font-bold text-foreground">{p.rating}</p>
                        </div>
                      </motion.a>
                    ))}
                  </div>

                  <div className="mt-8 flex items-baseline justify-between flex-wrap gap-4">
                    <h3 className="font-display text-2xl font-bold text-foreground">Follow Us</h3>
                    <p className="font-body text-xs text-muted-foreground">Reels, updates & festive posts</p>
                  </div>

                  <div className="mt-5 grid sm:grid-cols-2 gap-3">
                    <motion.a
                      href={location.instagram}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ y: -6, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="rounded-xl bg-card border border-border/70 px-4 py-4 shadow-warm flex items-center gap-3"
                    >
                      <div className="w-10 h-10 rounded-full bg-background/60 border border-border flex items-center justify-center overflow-hidden">
                        <img src={instagramLogo} alt="Instagram" className="w-7 h-7 object-contain" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-body text-xs text-muted-foreground">Instagram</p>
                        <p className="font-body font-semibold text-foreground">@mastagajali07</p>
                      </div>
                    </motion.a>

                    <motion.a
                      href={location.facebook}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ y: -6, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="rounded-xl bg-card border border-border/70 px-4 py-4 shadow-warm flex items-center gap-3"
                    >
                      <div className="w-10 h-10 rounded-full bg-background/60 border border-border flex items-center justify-center overflow-hidden">
                        <img src={facebookLogo} alt="Facebook" className="w-7 h-7 object-contain" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-body text-xs text-muted-foreground">Facebook</p>
                        <p className="font-body font-semibold text-foreground">Mastagajali</p>
                        <p className="font-body text-xs text-muted-foreground truncate">@snap2.0multicuisine</p>
                      </div>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <WaveDivider />
      <Footer />
    </div>
  );
};

export default ContactPage;

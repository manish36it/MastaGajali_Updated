import { motion } from "framer-motion";
import { MapPin, Quote, Star } from "lucide-react";
import justdialLogo from "@/assets/logos/justdial.png";
import swiggyLogo from "@/assets/logos/swiggy.png";
import zomatoLogo from "@/assets/logos/zomato.png";

interface ReviewsProps {
  /** When true, hide the section title (e.g. when used on dedicated /reviews page) */
  standalone?: boolean;
}

const place = {
  name: "Masta Gajali",
  address:
    "Shop No.1, Galaxy co-op hsg ltd, Rambhau Bhogle Marg, Ghodapdeo, Mazgaon, Mumbai, Maharashtra 400010, India",
  rating: 4.8,
  reviewsCount: 558,
};

const topicChips = [
  { label: "thali", count: 27 },
  { label: "food quality", count: 18 },
  { label: "quantity", count: 14 },
  { label: "solkadi", count: 10 },
  { label: "+6", count: 0 },
];

const platformRatings = [
  { key: "google", name: "Google Maps", rating: 4.8, meta: "550+ reviews", logo: null },
  { key: "justdial", name: "Justdial", rating: 4.7, meta: "580+ ratings", logo: justdialLogo },
  { key: "zomato", name: "Zomato", rating: 4.6, meta: "Dining", logo: zomatoLogo },
  { key: "swiggy", name: "Swiggy", rating: 4.4, meta: "430+ ratings", logo: swiggyLogo },
];

const snippets = [
  {
    group: "On the Food & Thalis",
    items: [
      {
        quote:
          "The Prawns Thali was extremely tasty with properly cooked prawns in generous quantities. Every gravy was flavorful!",
        source: "Google Review",
      },
      {
        quote:
          "Highly recommend the Bombil Thali and Prawn Samosa. Even for delivery, the packing was perfect with no spillage.",
        source: "Wanderlog",
      },
      {
        quote:
          "A hidden gem for seafood lovers. The Surmai Fry and Crab Masala have an authentic Konkan taste that is worth every penny.",
        source: "Wanderlog",
      },
    ],
  },
  {
    group: "On the Service & Vibe",
    items: [
      {
        quote: "The staff is extremely polite, attentive, and welcoming. It has a very calm and comfortable ambiance.",
        source: "Zomato Review",
      },
      {
        quote: "The restaurant is a culinary oasis. It offers a cozy yet lively atmosphere ideal for family gatherings.",
        source: "Wanderlog",
      },
    ],
  },
];

const featuredReviews = [
  {
    name: "Local Guide",
    source: "Google",
    rating: 5,
    text: "Seafood was fresh and well-cooked, with balanced spices that didn’t overpower the natural flavours.",
  },
  {
    name: "Local Guide",
    source: "Google",
    rating: 5,
    text: "Excellent seafood at affordable prices. Great place for authentic Malvani food.",
  },
  {
    name: "Customer",
    source: "Google",
    rating: 5,
    text: "Best seafood thali in Mumbai considering price and variety. Must try!",
  },
];

const Reviews = ({ standalone = false }: ReviewsProps) => {
  return (
    <section id="reviews" className="py-24 bg-background relative overflow-hidden section-shell">
      {/* Decorative mandala */}
      <motion.div
        className="absolute -right-32 -top-32 w-64 h-64 rounded-full border-2 border-golden/5 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto px-6 md:px-12">
        {!standalone && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-primary bg-sunset-gradient bg-clip-text text-transparent">
              लोकांचं म्हणणं
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4">
              Loved by <span className="text-gradient-gold">Thousands</span>
            </h2>
            <p className="font-body text-muted-foreground mt-2">
              ⭐ {place.rating}/5 on Google • ⭐ 4.7/5 on Justdial • ⭐ 4.6/5 on Zomato • ⭐ 4.4/5 on Swiggy
            </p>
          </motion.div>
        )}

        {/* Place card + Trust bar */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, type: "spring", damping: 18 }}
            className="lg:col-span-2 rounded-2xl glass-card border border-border shadow-warm p-7 relative overflow-hidden card-hover-lift"
          >
            <motion.div
              className="absolute inset-x-0 -bottom-10 h-24 bg-gradient-to-t from-golden/10 via-transparent to-transparent"
              animate={{ opacity: [0.12, 0.35, 0.12] }}
              transition={{ duration: 3.2, repeat: Infinity }}
            />
            <div className="relative z-10">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                {place.name} <span className="text-gradient-gold">Mazgaon</span>
              </h3>
              <div className="mt-3 flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-golden" />
                <p className="font-body text-sm leading-relaxed">{place.address}</p>
              </div>

              <div className="mt-5 flex items-center gap-3">
                <div className="inline-flex items-center gap-1 rounded-full bg-muted px-3 py-1 border border-border/60">
                  <Star className="w-4 h-4 fill-golden text-golden" />
                  <span className="font-display font-bold text-foreground">{place.rating}</span>
                </div>
                <span className="font-body text-sm text-muted-foreground">{place.reviewsCount} reviews</span>
              </div>

              {/* Topic chips */}
              <div className="mt-6 flex flex-wrap gap-2">
                {topicChips.map((c, idx) => (
                  <motion.span
                    key={c.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + idx * 0.05, duration: 0.35 }}
                    whileHover={{ y: -2, scale: 1.03 }}
                    className="font-body text-xs text-foreground/80 bg-muted/70 border border-border/60 rounded-full px-3 py-1"
                  >
                    {c.label}
                    {c.count ? <span className="text-muted-foreground"> {c.count}</span> : null}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.05, type: "spring", damping: 18 }}
            className="lg:col-span-3 rounded-2xl bg-muted/40 border border-border shadow-warm p-7 relative overflow-hidden card-hover-lift"
          >
            <motion.div
              className="absolute inset-0 opacity-[0.07] pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle_at_20%_20%,hsl(38_85%_55%_/_0.9),transparent_55%),radial-gradient(circle_at_80%_10%,hsl(15_65%_42%_/_0.9),transparent_55%)",
              }}
              animate={{ opacity: [0.05, 0.1, 0.05] }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <div className="relative z-10">
              <div className="flex items-baseline justify-between gap-4 flex-wrap">
                <h3 className="font-display text-2xl font-bold text-foreground">
                  Our Community Loves Us!
                </h3>
                <p className="font-body text-xs text-muted-foreground">
                  Trust Bar • High ratings across platforms
                </p>
              </div>

              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {platformRatings.map((p, i) => (
                  <motion.div
                    key={p.key}
                    initial={{ opacity: 0, y: 18, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.08 + i * 0.06, type: "spring", damping: 20 }}
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="group relative rounded-xl bg-card/80 border border-border/70 px-4 py-4 shadow-warm overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-1/2 pointer-events-none"
                      variants={{ rest: { x: "-120%" }, hover: { x: "220%" } }}
                      initial="rest"
                      animate="rest"
                      whileHover="hover"
                      transition={{ duration: 0.7, ease: "easeInOut" }}
                    />

                    <div className="relative z-10 flex items-center gap-3">
                      {p.logo ? (
                        <div className="w-10 h-10 rounded-full bg-background/60 border border-border flex items-center justify-center overflow-hidden">
                          <img src={p.logo} alt={p.name} className="w-7 h-7 object-contain" />
                        </div>
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-background/60 border border-border flex items-center justify-center">
                          <span className="font-display font-bold text-foreground">G</span>
                        </div>
                      )}

                      <div className="min-w-0">
                        <p className="font-body text-xs text-muted-foreground">{p.name}</p>
                        <div className="flex items-center gap-2">
                          <span className="font-display text-lg font-bold text-foreground">{p.rating}</span>
                          <Star className="w-4 h-4 fill-golden text-golden" />
                          <span className="font-body text-xs text-muted-foreground">{p.meta}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Categorized snippets */}
        <div className="max-w-6xl mx-auto space-y-10">
          {snippets.map((group, gi) => (
            <div key={group.group}>
              <motion.h3
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: gi * 0.05 }}
                className="font-display text-2xl font-bold text-foreground mb-5"
              >
                {group.group}
              </motion.h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.items.map((item, i) => (
                  <motion.div
                    key={`${group.group}-${i}`}
                    initial={{ opacity: 0, y: 24, rotateX: 10 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.07 }}
                    whileHover={{ y: -8, boxShadow: "0 22px 45px -12px hsl(38 85% 55% / 0.18)" }}
                    className="group relative rounded-2xl bg-card border border-border shadow-warm p-7 overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-1/2 pointer-events-none"
                      variants={{ rest: { x: "-130%" }, hover: { x: "230%" } }}
                      initial="rest"
                      animate="rest"
                      whileHover="hover"
                      transition={{ duration: 0.75, ease: "easeInOut" }}
                    />
                    <Quote className="absolute top-4 right-4 w-8 h-8 text-golden/10 group-hover:text-golden/20 transition-colors" />
                    <p className="font-body text-foreground/80 leading-relaxed mb-5 italic text-sm relative z-10">
                      “{item.quote}”
                    </p>
                    <div className="flex items-center justify-between relative z-10">
                      <span className="font-body text-[10px] text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                        {item.source}
                      </span>
                      <span className="font-body text-xs font-semibold text-primary">Verified vibe</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Featured reviews (animated cards) */}
        <div className="max-w-6xl mx-auto mt-14">
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="font-display text-2xl font-bold text-foreground mb-6"
          >
            Featured Reviews
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredReviews.map((review, i) => (
              <motion.div
                key={`${review.source}-${i}`}
                initial={{ opacity: 0, y: 26, rotateX: 12 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6, boxShadow: "0 20px 40px -10px hsl(38 85% 55% / 0.15)" }}
                className="group relative rounded-2xl bg-card border border-border shadow-warm p-7 overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/18 to-transparent w-1/2 pointer-events-none"
                  variants={{ rest: { x: "-130%" }, hover: { x: "230%" } }}
                  initial="rest"
                  animate="rest"
                  whileHover="hover"
                  transition={{ duration: 0.75, ease: "easeInOut" }}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="font-body font-semibold text-xs text-foreground">{review.name}</span>
                    <span className="font-body text-[10px] text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                      {review.source}
                    </span>
                  </div>

                  <div className="flex mt-3 mb-3 gap-0.5">
                    {[...Array(review.rating)].map((_, j) => (
                      <motion.div
                        key={j}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 + j * 0.05 }}
                      >
                        <Star className="w-4 h-4 fill-golden text-golden" />
                      </motion.div>
                    ))}
                  </div>

                  <p className="font-body text-foreground/80 leading-relaxed italic text-sm">“{review.text}”</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

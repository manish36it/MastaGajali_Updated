import { motion } from "framer-motion";
import bombilFry from "@/assets/bombil-fry.jpg";
import crabLollipop from "@/assets/crab-lollipop.jpg";
import prawns from "@/assets/prawns.jpg";

const dishes = [
  {
    name: "Bombil Fry",
    description: "Golden-crisp Bombay duck, marinated in coastal spices and fried to perfection. A Mumbai legend.",
    price: "₹280",
    image: bombilFry,
  },
  {
    name: "Crab Lollipop",
    description: "Succulent crab claws coated in a spiced crust, served with tangy dipping sauce. Pure indulgence.",
    price: "₹350",
    image: crabLollipop,
  },
  {
    name: "Jumbo Prawns",
    description: "Fresh, juicy prawns tossed in aromatic masala with a squeeze of lime. Ocean on a plate.",
    price: "₹420",
    image: prawns,
  },
];

const SignatureDishes = () => {
  return (
    <section id="menu" className="py-24 bg-muted/50 section-shell">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-primary bg-sunset-gradient bg-clip-text text-transparent">
            Signature Dishes
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4">
            Taste the <span className="text-gradient-gold">Legends</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {dishes.map((dish, i) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group glass-card rounded-xl overflow-hidden shadow-warm hover:shadow-golden transition-shadow duration-500 card-hover-lift"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-xl font-bold text-foreground">{dish.name}</h3>
                  <span className="font-display text-lg font-semibold text-primary">{dish.price}</span>
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{dish.description}</p>
                <a
                  href="/menu"
                  className="inline-block mt-3 font-body text-xs font-semibold text-primary hover:text-golden transition-colors bg-primary/10 border border-primary/20 px-3 py-1 rounded-full"
                >
                  See Full Menu →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureDishes;

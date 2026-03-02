import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";

const Contact = () => {
  const mapQuery = encodeURIComponent(
    "Masta Gajali, Shop No. 1, 2, & 3, Malim House, Galaxy CHSL, Rambhau Bhogle Marg, Mazgaon, Mumbai 400033"
  );

  return (
    <section id="contact" className="py-24 bg-[hsl(20,15%,10%)] text-primary-foreground relative overflow-hidden">
      {/* Decorative rangoli corners */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-24 h-24 border border-golden/10 rounded-full"
          style={{
            left: i % 2 === 0 ? -12 : undefined,
            right: i % 2 === 1 ? -12 : undefined,
            top: i < 2 ? -12 : undefined,
            bottom: i >= 2 ? -12 : undefined,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      ))}

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-golden">
              🌶️ Visit Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-2">
              भूक लागली?
            </h2>
            <p className="font-display text-xl text-golden mb-8">Come Hungry, Leave Happy.</p>

            <div className="space-y-6 font-body">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 mt-0.5 text-golden shrink-0" />
                <div>
                  <div className="font-semibold">Location</div>
                  <div className="text-primary-foreground/70 text-sm">
                    Shop No. 1, 2, & 3, Malim House, Galaxy CHSL, Rambhau Bhogle Marg,
                    <br />
                    Mazgaon, Mumbai - 400033
                    <br />
                    <span className="text-primary-foreground/55">
                      Near Veermata Jijabai Bhosale Botanical Udyan (Byculla Zoo)
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 mt-0.5 text-golden shrink-0" />
                <div>
                  <div className="font-semibold">Hours</div>
                  <div className="text-primary-foreground/70 text-sm">
                    12:00 PM – 4:00 PM, 7:00 PM – 11:30 PM • Open all days
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 mt-0.5 text-golden shrink-0" />
                <div>
                  <div className="font-semibold">Reservations</div>
                  <div className="text-primary-foreground/70 text-sm">
                    Walk-ins welcome • ₹400–600 for two
                    <br />
                    Call:{" "}
                    <a
                      className="text-golden hover:text-golden/80 underline underline-offset-4"
                      href="tel:02223711623"
                    >
                      022-23711623
                    </a>
                    <span className="text-primary-foreground/40"> • </span>
                    Book via{" "}
                    <a
                      className="text-golden hover:text-golden/80 underline underline-offset-4"
                      href="https://www.zomato.com/mumbai/restaurants?q=Masta%20Gajali%20Mazgaon"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Zomato
                    </a>
                    <span className="text-primary-foreground/40">, </span>
                    <a
                      className="text-golden hover:text-golden/80 underline underline-offset-4"
                      href="https://www.swiggy.com/search?query=Masta%20Gajali%20Mazgaon"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Swiggy
                    </a>
                  </div>
                </div>
              </div>
              <div className="pt-2 text-primary-foreground/60 text-sm">
                <span className="font-semibold text-primary-foreground/80">Service options:</span>{" "}
                All you can eat · Rooftop seating · Private dining room
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-xl overflow-hidden shadow-golden border-2 border-golden/20"
          >
            <iframe
              title="Masta Gajali location"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

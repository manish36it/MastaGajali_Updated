import { motion } from "framer-motion";
import type { MenuCategory } from "@/data/menuData";
import MenuItemCard from "./MenuItemCard";

interface Props {
  category: MenuCategory;
  catIdx: number;
}

const MenuCategorySection = ({ category, catIdx }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, delay: catIdx * 0.1, type: "spring", damping: 20 }}
    >
      {/* Category header */}
      <div className="flex items-center gap-3 mb-8 rounded-3xl bg-white/50 backdrop-blur-md border border-golden/15 px-4 py-4 shadow-[0_14px_35px_-26px_rgba(180,83,9,0.35)]">
        <motion.div
          className="p-3 rounded-2xl bg-golden/15 text-primary border border-golden/25"
          whileHover={{ rotate: 20, scale: 1.15 }}
          transition={{ type: "spring", damping: 8 }}
        >
          {category.icon}
        </motion.div>
        <div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            {category.title}
          </h2>
        </div>
        {/* Animated decorative dots line */}
        <div className="flex-1 flex items-center gap-1.5 ml-4 overflow-hidden">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className={`rounded-full shrink-0 ${i % 4 === 0 ? 'w-1.5 h-1.5 bg-golden/40' : 'w-1 h-1 bg-golden/20'}`}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1 + i * 0.02 }}
            />
          ))}
        </div>
        <motion.span
          className="font-body text-xs text-muted-foreground bg-white/70 px-3 py-1.5 rounded-full border border-golden/15"
          whileHover={{ scale: 1.05 }}
        >
          {category.items.length} items
        </motion.span>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {category.items.map((item, i) => (
          <MenuItemCard key={item.name} item={item} index={i} />
        ))}
      </div>
    </motion.div>
  );
};

export default MenuCategorySection;

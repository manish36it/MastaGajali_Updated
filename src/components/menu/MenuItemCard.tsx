import { motion } from "framer-motion";
import type { MenuItem } from "@/data/menuData";

const tagColors: Record<string, string> = {
  popular: "bg-golden/20 text-accent-foreground border-golden/30",
  spicy: "bg-destructive/15 text-destructive border-destructive/30",
  new: "bg-sage/20 text-sage border-sage/30",
};

const tagLabels: Record<string, string> = {
  popular: "🔥 Popular",
  spicy: "🌶️ Spicy",
  new: "✨ New",
};

interface Props {
  item: MenuItem;
  index: number;
}

const MenuItemCard = ({ item, index }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20, rotateY: 8 }}
      whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.03, duration: 0.45, type: "spring", damping: 20 }}
      whileHover={{
        scale: 1.04,
        y: -6,
        boxShadow: "0 16px 50px -10px hsl(38 85% 55% / 0.25)",
      }}
      className="group relative flex items-center justify-between p-4 md:p-5 rounded-2xl bg-[hsl(35_65%_98%)] border border-golden/15 hover:border-golden/45 transition-all cursor-default overflow-hidden shadow-[0_14px_35px_-22px_rgba(180,83,9,0.35)]"
    >
      {/* Animated gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-golden/0 via-golden/0 to-golden/0 group-hover:from-golden/5 group-hover:via-transparent group-hover:to-primary/5 transition-all duration-500" />

      {/* Animated left decorative line */}
      <motion.div
        className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-golden/0 group-hover:bg-golden/70 transition-all duration-300"
        layoutId={`line-${item.name}`}
      />

      {/* Shimmer effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-golden/5 to-transparent" />

      <div className="flex-1 min-w-0 pl-3 relative z-10">
        <div className="flex items-center gap-2 flex-wrap">
          <motion.span
            className="font-display font-semibold text-foreground group-hover:text-primary transition-colors"
            whileHover={{ x: 3 }}
          >
            {item.name}
          </motion.span>
          {item.tag && (
            <motion.span
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", damping: 12 }}
              className={`px-2 py-0.5 rounded-full text-[10px] font-body font-semibold border ${tagColors[item.tag]}`}
            >
              {tagLabels[item.tag]}
            </motion.span>
          )}
        </div>
        {item.nameHi && (
          <span className="font-body text-xs text-muted-foreground block mt-0.5 group-hover:text-muted-foreground/80">
            {item.nameHi}
          </span>
        )}
      </div>
      <motion.span
        className="font-display font-bold text-primary ml-4 whitespace-nowrap relative z-10 text-lg"
        whileHover={{ scale: 1.15, rotate: -2 }}
        transition={{ type: "spring", damping: 10 }}
      >
        {item.price}
      </motion.span>
    </motion.div>
  );
};

export default MenuItemCard;

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  dark?: boolean;
}

export function Section({ id, className, children, dark = false }: SectionProps) {
  return (
    <section 
      id={id}
      className={cn(
        "py-20 md:py-32 px-6 md:px-12 lg:px-24 w-full",
        dark ? "bg-navy text-white" : "bg-white text-navy",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto"
      >
        {children}
      </motion.div>
    </section>
  );
}

export function SectionHeader({ title, subtitle, centered = false }: { title: string; subtitle?: string; centered?: boolean }) {
  return (
    <div className={cn("mb-12 md:mb-20", centered && "text-center")}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 font-serif text-gold">
        {title}
      </h2>
      {subtitle && (
        <div className="h-1 w-20 bg-gold mt-4" />
      )}
    </div>
  );
}

import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: "10000+", label: "Workflows structured for users" },
  { value: "100%", label: "Intent recognition precision" },
  { value: "300", label: "Actions predicted every day" }
];

export default function Stats() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-24 bg-inverse text-inverse">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <motion.div 
          className="flex flex-wrap gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {stats.map((stat, idx) => (
            <motion.div key={idx} variants={itemVariants} className="flex-1 min-w-[300px] sm:min-w-full md:min-w-[300px]">
              <div className="h-full bg-white/5 border border-white/10 rounded-3xl flex flex-col">
                <div className="flex flex-col items-center justify-center p-16 text-center h-full">
                  <div className="text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] font-medium tracking-tight mb-0">{stat.value}</div>
                  <p className="text-lg text-white/60 mt-2">{stat.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

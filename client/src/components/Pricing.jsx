import React from 'react';
import { motion } from 'framer-motion';

const plans = [
  {
    eyebrow: "Starter plan",
    price: "",
    desc: "Best for individuals",
    buttonText: "Start free",
    buttonClass: "secondary",
    note: "No contract, cancel anytime."
  },
  {
    eyebrow: "PRO PLAN",
    price: "100 INR",
    desc: "For esteemed ones",
    buttonText: "Contact sales",
    buttonClass: "primary",
    note: "No contract, cancel anytime."
  }
];

export default function Pricing() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="pb-32 bg-inverse text-inverse">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[800px] list-none p-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {plans.map((plan, idx) => (
            <motion.li key={idx} variants={itemVariants} className="bg-white/5 border border-white/10 rounded-3xl">
              <div className="flex flex-col items-center text-center py-16 px-10 h-full">
                <div className="mb-auto text-center flex flex-col items-center">
                  <div className="text-xs uppercase tracking-wider font-semibold text-white/60 mb-2">{plan.eyebrow}</div>
                  {plan.price && <p className="text-[2.5rem] leading-[1.2] font-medium mb-0">{plan.price}</p>}
                  <p className="mb-4 text-white/60 mt-2">{plan.desc}</p>
                </div>
                
                <div className="flex flex-row justify-center w-full mb-2 mt-8">
                  <div className="w-full">
                    {plan.buttonClass === "primary" ? (
                      <a href="#" className="inline-flex items-center justify-center px-6 py-3.5 bg-page text-primary rounded-lg font-medium hover:opacity-90 hover:-translate-y-0.5 transition-all w-full">{plan.buttonText}</a>
                    ) : (
                      <a href="#" className="inline-flex items-center justify-center px-6 py-3.5 bg-transparent border-2 border-white/20 text-inverse rounded-lg font-medium hover:bg-white/5 transition-all w-full">{plan.buttonText}</a>
                    )}
                  </div>
                </div>
                
                <p className="text-sm text-white/60 mt-4">{plan.note}</p>
              </div>
            </motion.li>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

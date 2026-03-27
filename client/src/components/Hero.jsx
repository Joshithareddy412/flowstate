import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <header className="py-24 lg:py-32 overflow-hidden bg-inverse text-inverse relative">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 lg:gap-6 items-start">
          
          <motion.div 
            className="lg:col-start-4 lg:col-end-7 lg:row-start-1 lg:row-end-4 relative order-4 lg:order-none"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full pt-[66.66%] rounded-[24px] overflow-hidden">
              <img 
                width="1300" 
                height="1000" 
                alt="Dashboard graphic" 
                src="./photo.png" 
                className="absolute inset-0 w-full h-full object-cover [mask-image:linear-gradient(to_bottom,transparent,black_15%)]"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 backdrop-blur-md bg-gradient-to-b from-transparent to-[#151413]/80 [mask-image:linear-gradient(to_top,transparent,black_50%)]"></div>
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-start-1 lg:col-end-4 lg:row-start-1 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-[clamp(3rem,6vw,5.5rem)] leading-[1.1] font-medium tracking-tight mb-6 mt-0">
              Shape habits.<br />Predict outcomes.
            </h1>
          </motion.div>

          <motion.div 
            className="lg:col-start-1 lg:col-end-4 lg:row-start-2 mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex flex-wrap gap-4 mt-0">
              <a href="#" className="inline-flex items-center justify-center px-6 py-3.5 bg-page text-primary rounded-lg font-medium hover:opacity-90 hover:-translate-y-0.5 transition-all">Start free</a>
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-start-1 lg:col-end-3 lg:row-start-3 pt-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="text-xl leading-relaxed text-white/60 max-w-[60ch]">
              AI-powered workflows tailored to your goals. Enter your interests—get structured, actionable next steps. Progress made simple, with smart predictions and clear priorities.
            </p>
          </motion.div>

        </div>
      </div>
    </header>
  );
}

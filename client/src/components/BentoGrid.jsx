import React from 'react';
import { motion } from 'framer-motion';
import { FaLayerGroup, FaRegLightbulb, FaArrowRight } from 'react-icons/fa';

export default function BentoGrid() {
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
    <section className="pt-24 pb-16 relative bg-inverse text-inverse">
      <div className="max-w-[1200px] mx-auto px-6 w-full">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Card 1 */}
          <motion.div variants={itemVariants} className="h-full">
            <div className="h-full bg-white/5 border border-white/10 rounded-3xl overflow-hidden flex flex-col">
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-inverse mb-4 shrink-0">
                  <FaLayerGroup size={24} />
                </div>
                <div className="mt-auto">
                  <h3 className="text-xl font-medium mb-2">Tailored next action ranking</h3>
                  <div className="prose prose-invert prose-sm mb-6">
                    <p className="text-sm text-white/60">
                      Share your interests and get a prioritized list of steps, organized by urgency and relevance to help you move forward efficiently.
                    </p>
                  </div>
                  <div className="flex gap-4 mt-auto">
                    <a href="#" className="inline-flex items-center gap-2 font-medium bg-transparent border-none cursor-pointer">
                      Start 
                      <div className="flex items-center justify-center w-5 h-5 rounded-full bg-page text-primary">
                        <FaArrowRight size={10} />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={itemVariants} className="h-full">
            <div className="h-full bg-white/5 border border-white/10 rounded-3xl overflow-hidden flex flex-col">
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-inverse mb-4 shrink-0">
                  <FaRegLightbulb size={24} />
                </div>
                <div className="mt-auto">
                  <h3 className="text-xl font-medium mb-2">Intent-based smart guidance</h3>
                  <div className="prose prose-invert prose-sm mb-6">
                    <p className="text-sm text-white/60">
                      Our AI reviews your input and recommends focused paths, so you can make quick, informed decisions for your workflow.
                    </p>
                  </div>
                  <div className="flex gap-4 mt-auto">
                    <a href="#" className="inline-flex items-center gap-2 font-medium bg-transparent border-none cursor-pointer">
                      Learn more 
                      <div className="flex items-center justify-center w-5 h-5 rounded-full bg-page text-primary">
                        <FaArrowRight size={10} />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3 (Image) */}
          <motion.div variants={itemVariants} className="h-full md:col-span-2 lg:col-span-1">
            <div className="h-full bg-white/5 border border-white/10 rounded-3xl overflow-hidden flex flex-col">
              <div className="relative w-full h-full min-h-[300px]">
                <div className="absolute inset-0 overflow-hidden">
                  <img 
                    width="1216" height="832" 
                    alt="AI Interview" 
                    src="https://cdn.prod.website-files.com/69c6b85da80e50c8474e5a23/69c6bc9aab9cf704ce2dfd4f_AI_named_FLOWSTATE_202603272251.jpeg" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30"></div>
                </div>
                <div className="relative h-full flex flex-col p-6 md:p-8 z-10 justify-between">
                  <div className="text-xs uppercase tracking-wider font-semibold mb-2 drop-shadow-md">How it works</div>
                  <p className="text-xl font-medium drop-shadow-md mt-auto">
                    Enter your goal. Instantly receive actionable steps, powered by predictive analysis and real-time data.
                  </p>
                </div>
                {/* Fixed the tailwind arbitrary value masking */}
                <div className="absolute inset-0 backdrop-blur-md -z-10 mask-[linear-gradient(to_bottom,transparent,black_30%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_30%)]"></div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

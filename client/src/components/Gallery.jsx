import React from 'react';
import { motion } from 'framer-motion';

const galleryItems = [
  {
    image: "https://cdn.prod.website-files.com/69c6b85da80e50c8474e5a23/69c6c3b43192039dbbb1f696_Guided_action_feed_202603272321.jpeg",
    title: "Guided action feed",
    desc: "Receive curated steps based on your interests and recent activity."
  },
  {
    image: "https://cdn.prod.website-files.com/69c6b85da80e50c8474e5a23/69c6b8bc4129dca0b7166257_668fec97-e83b-4a2b-a29f-9bc7e50d8b53.avif",
    title: "Intent recognition",
    desc: "Our AI reviews your input to recommend the most relevant next actions."
  },
  {
    image: "https://cdn.prod.website-files.com/69c6b85da80e50c8474e5a23/69c6c1b5a0872acb7c8126c3_Deadlines_in_phone_202603272312.jpeg",
    title: "Priority insights",
    desc: "View urgency levels and suggested deadlines for each task."
  }
];

export default function Gallery() {
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
    <>
      <header className="overflow-hidden bg-white text-primary py-16 lg:py-24 pb-0 lg:pb-0 relative">
        <div className="w-full max-w-[800px] mx-auto px-6">
          <motion.div 
            className="flex flex-col items-center text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs uppercase tracking-wider font-semibold text-primary/60 mb-2">Workflow gallery</div>
            <div className="text-lg text-primary/70 mb-8 w-full max-w-[60ch]">
              <p>Explore real examples of our AI-driven workflow guidance. See how intent detection and predictive tools help streamline your decisions and routines. Browse the gallery to view how our system analyzes input and suggests next steps for smarter productivity.</p>
            </div>
            <div className="flex flex-wrap gap-4 mt-0">
              <a href="#" className="inline-flex items-center justify-center px-6 py-3.5 bg-transparent border-2 border-primary text-primary rounded-lg font-medium hover:bg-black/5 transition-all">Demo</a>
            </div>
          </motion.div>
        </div>
      </header>

      <section className="bg-white text-primary pb-16 lg:pb-24 pt-12 lg:pt-16 relative">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {galleryItems.map((item, idx) => (
              <motion.div key={idx} variants={itemVariants} className="">
                <a href="#" className="group block h-full">
                  <div className="relative w-full pt-[66.66%] rounded-[16px] overflow-hidden mb-6 shadow-sm">
                    <img 
                      width="1216" height="832" 
                      alt={item.title} 
                      src={item.image} 
                      loading="lazy" 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                  <div className="text-sm text-primary/60">{item.desc}</div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}

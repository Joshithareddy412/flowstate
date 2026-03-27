import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const benefits = [
  "Get custom next steps for your goals.",
  "Follow clear, structured action plans.",
  "See Urgency and deadlines instantly."
];

export default function Benefits() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-24 bg-white text-primary">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          <motion.div
            className="order-2 lg:order-0"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <ul className="list-none p-0 flex flex-col gap-6 lg:gap-8 m-0 py-8 lg:py-12">
              {benefits.map((text, idx) => (
                <motion.li key={idx} variants={itemVariants} className="border-b border-black/10 pb-6 lg:pb-8 last:border-0 last:pb-0">
                  <div className="flex items-start gap-4">
                    <div className="text-primary mt-1 shrink-0">
                      <FaCheckCircle size={24} />
                    </div>
                    <p className="text-lg lg:text-xl font-medium">{text}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="w-full order-1 lg:order-1"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full pt-[66.66%] rounded-[24px] overflow-hidden shadow-xl">
              <img
                src="https://cdn.prod.website-files.com/69c6b85da80e50c8474e5a23/69c6c11805ff3a0be9b39b64_Wooden_sign_board_202603272309.jpeg"
                loading="lazy"
                alt="Wooden sign board"
                className="absolute inset-0 w-full h-full object-cover rounded-[24px]"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

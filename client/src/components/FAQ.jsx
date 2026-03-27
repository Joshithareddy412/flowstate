import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    question: "How does AI understand my input?",
    answer: "Our system analyzes your input to identify your intent and recommends the best next steps for your workflow."
  },
  {
    question: "What are the main use cases?",
    answer: "Organize tasks, set priorities, and get personalized suggestions based on your goals and deadlines."
  },
  {
    question: "Is my information kept private?",
    answer: "Your data is protected with secure protocols and used only to improve your experience."
  },
  {
    question: "Can I try it for free?",
    answer: "Start free and explore all features before upgrading to a paid plan."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-inverse text-inverse w-full">
      <div className="w-full max-w-[800px] mx-auto px-6">
        <motion.div 
          className="flex flex-col items-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] font-medium tracking-tight mb-4 text-center">YOUR LIFE, SIMULATED!</h2>
          <div className="text-lg text-white/60 text-center max-w-[60ch] mx-auto">
            <p>Get answers about AI guidance, workflow, and recommendations.</p>
          </div>
        </motion.div>

        <div className="flex flex-col">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx} 
              className="w-full relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="border-b border-white/10 overflow-hidden">
                <button 
                  className="w-full bg-transparent border-none flex justify-between items-center py-6 text-inverse cursor-pointer text-left focus:outline-none"
                  onClick={() => toggleAccordion(idx)}
                >
                  <div className="text-xl font-medium m-0 pr-4">{faq.question}</div>
                  <motion.div 
                    animate={{ rotate: openIndex === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center justify-center w-6 h-6 shrink-0"
                  >
                    <FaChevronDown size={14} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div 
                      className="overflow-hidden"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="pb-6 pr-8">
                        <div className="text-white/60 text-base leading-relaxed">
                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="flex flex-col items-center mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-lg text-white/60 mb-6">
            <p>Need more help? Reach out to our support team.</p>
          </div>
          <div>
            <a href="#" className="inline-flex items-center justify-center px-6 py-3.5 bg-transparent border-2 border-white/20 text-inverse rounded-lg font-medium hover:bg-white/5 transition-all">Support</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

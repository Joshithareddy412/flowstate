import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 bg-white text-primary">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div 
            className="w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full pt-[100%] md:pt-[150%] rounded-[24px] overflow-hidden shadow-xl">
              <img 
                width="1216" height="832" 
                alt="Workspace" 
                src="https://cdn.prod.website-files.com/69c6b85da80e50c8474e5a23/69c6bfe20b2efc6a807ff6a8_Empty_chair_in_202603272305.jpeg" 
                loading="lazy" 
                className="absolute inset-0 w-full h-full object-cover rounded-[24px]"
              />
            </div>
          </motion.div>

          <motion.div 
            className="w-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-10 lg:mb-12">
              <h2 className="text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] font-medium tracking-tight mb-4 text-primary">Contact our team</h2>
              <p className="text-lg text-primary/70 mb-0">
                Get in touch for workflow support.<br/>
                <a href="mailto:shauryasambyal12e4@gmail.com" className="text-primary underline ml-1 hover:text-primary/80">shauryasambyal12e4@gmail.com</a>
              </p>
            </div>

            <div className="w-full">
              {submitted ? (
                <div className="p-8 bg-black/5 rounded-xl text-center text-primary font-medium">
                  <div>Thank you! We'll respond soon.</div>
                </div>
              ) : (
                <form className="flex flex-col gap-5 w-full" onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-1.5 w-full">
                    <label htmlFor="name" className="text-xs uppercase tracking-wider font-semibold text-primary/60">Full name</label>
                    <input type="text" id="name" className="w-full px-4 py-3.5 bg-white border border-black/10 rounded-lg font-sans text-base text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="Your name" required />
                  </div>
                  <div className="flex flex-col gap-1.5 w-full">
                    <label htmlFor="email" className="text-xs uppercase tracking-wider font-semibold text-primary/60">Email address</label>
                    <input type="email" id="email" className="w-full px-4 py-3.5 bg-white border border-black/10 rounded-lg font-sans text-base text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="email@website.com" required />
                  </div>
                  <div className="flex flex-col gap-1.5 w-full">
                    <label htmlFor="focus" className="text-xs uppercase tracking-wider font-semibold text-primary/60">Project focus</label>
                    <select id="focus" className="w-full px-4 py-3.5 bg-white border border-black/10 rounded-lg font-sans text-base text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none">
                      <option value="">Select one...</option>
                      <option value="First">First choice</option>
                      <option value="Second">Second choice</option>
                      <option value="Third">Third choice</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5 w-full">
                    <label htmlFor="message" className="text-xs uppercase tracking-wider font-semibold text-primary/60">How can we help?</label>
                    <textarea id="message" className="w-full px-4 py-3.5 bg-white border border-black/10 rounded-lg font-sans text-base text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors min-h-[120px] resize-y" placeholder="Type your message..." rows={4}></textarea>
                  </div>
                  <div className="flex items-center gap-3 w-full mt-2 cursor-pointer">
                    <input type="checkbox" required className="w-5 h-5 rounded border-black/20 text-primary focus:ring-primary cursor-pointer" />
                    <span className="text-sm text-primary/80">
                      I agree to the <a href="#" className="underline text-primary hover:text-primary/70">privacy policy</a>.
                    </span>
                  </div>
                  <div className="flex flex-col gap-1.5 mt-2">
                    <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-4 bg-primary text-white rounded-lg font-medium hover:bg-black/80 hover:-translate-y-0.5 transition-all outline-none cursor-pointer border-none">Submit</button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

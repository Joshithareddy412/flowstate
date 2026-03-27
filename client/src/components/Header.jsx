import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown, FaLayerGroup, FaChartLine, FaRobot, FaTasks, FaRegCalendarCheck, FaArrowRight, FaQuestionCircle, FaEnvelope } from 'react-icons/fa';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-inverse text-inverse border-b border-white/10">
      <div className="flex justify-between items-center h-20 max-w-[1200px] mx-auto px-6 w-full">
        <div className="flex items-center">
          <a href="#" className="flex items-center gap-4 text-inverse hover:opacity-80 transition-opacity">
            <div className="flex items-center justify-center">
              <FaLayerGroup size={24} color="currentColor" />
            </div>
            <div className="text-lg font-semibold m-0">FLOWSTATE</div>
          </a>
        </div>

        <div className="flex items-center gap-8 lg:gap-10">
          <nav className="hidden lg:block">
            <ul className="flex list-none gap-6 m-0 p-0">
              {/* Solutions Mega Menu */}
              <li 
                className="relative flex items-center h-20"
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onMouseLeave={() => setIsSolutionsOpen(false)}
              >
                <button className="flex items-center gap-1 py-2 bg-transparent border-none text-inverse text-sm font-medium hover:opacity-80 transition-opacity cursor-pointer">
                  Solutions <FaChevronDown size={14} />
                </button>

                <AnimatePresence>
                  {isSolutionsOpen && (
                    <motion.div 
                      className="absolute top-20 -left-24 xl:left-0 bg-inverse border border-white/10 rounded-xl p-10 xl:p-16 w-[min(900px,80vw)] xl:w-[700px] shadow-2xl pointer-events-auto"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                        <div className="flex flex-col gap-4">
                          <div className="text-xs uppercase tracking-wider font-semibold text-white/60 mb-2">Workflow Tools</div>
                          <a href="#" className="flex items-start gap-4 text-inverse hover:opacity-70 transition-opacity">
                            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 shrink-0">
                              <FaChartLine size={16} />
                            </div>
                            <div>
                              <strong className="block text-sm">Intent Detection</strong>
                              <p className="text-xs text-white/60 mt-1">Analyze input and suggest next steps.</p>
                            </div>
                          </a>
                          <a href="#" className="flex items-start gap-4 text-inverse hover:opacity-70 transition-opacity mt-2">
                            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 shrink-0">
                              <FaRobot size={16} />
                            </div>
                            <div>
                              <strong className="block text-sm">Smart Predictions</strong>
                              <p className="text-xs text-white/60 mt-1">Forecast deadlines instantly.</p>
                            </div>
                          </a>
                        </div>

                        <div className="flex flex-col gap-4">
                          <div className="text-xs uppercase tracking-wider font-semibold text-white/60 mb-2">Productivity</div>
                          <a href="#" className="flex items-start gap-4 text-inverse hover:opacity-70 transition-opacity">
                            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 shrink-0">
                              <FaTasks size={16} />
                            </div>
                            <div>
                              <strong className="block text-sm">Task Manager</strong>
                              <p className="text-xs text-white/60 mt-1">Organize your progress.</p>
                            </div>
                          </a>
                          <a href="#" className="flex items-start gap-4 text-inverse hover:opacity-70 transition-opacity mt-2">
                            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 shrink-0">
                              <FaRegCalendarCheck size={16} />
                            </div>
                            <div>
                              <strong className="block text-sm">Habit Builder</strong>
                              <p className="text-xs text-white/60 mt-1">Shape routines for success.</p>
                            </div>
                          </a>
                        </div>

                        <div className="flex flex-col xl:col-span-1 col-span-full xl:ml-auto mt-4 xl:mt-0 max-w-sm">
                           <a href="#" className="group block h-full bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
                             <div className="flex flex-col h-full">
                               <h4 className="text-xl font-medium mb-2 group-hover:opacity-90 transition-opacity">Shape habits & outcomes.</h4>
                               <p className="text-sm text-white/60 mb-6">Discover how our AI guides your next move.</p>
                               <div className="mt-auto">
                                 <div className="inline-flex items-center gap-2 font-medium">
                                   Learn more 
                                   <div className="w-6 h-6 flex items-center justify-center rounded-full bg-page text-primary">
                                     <FaArrowRight size={10} />
                                   </div>
                                 </div>
                               </div>
                             </div>
                           </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              <li className="relative flex items-center h-20"><a href="#" className="flex items-center py-2 bg-transparent text-inverse text-sm font-medium hover:opacity-80 transition-opacity">About</a></li>
              <li className="relative flex items-center h-20"><a href="#" className="flex items-center py-2 bg-transparent text-inverse text-sm font-medium hover:opacity-80 transition-opacity">Blog</a></li>

              {/* Support Dropdown */}
              <li 
                className="relative flex items-center h-20"
                onMouseEnter={() => setIsSupportOpen(true)}
                onMouseLeave={() => setIsSupportOpen(false)}
              >
                <button className="flex items-center gap-1 py-2 bg-transparent border-none text-inverse text-sm font-medium hover:opacity-80 transition-opacity cursor-pointer">
                  Support <FaChevronDown size={14} />
                </button>
                <AnimatePresence>
                  {isSupportOpen && (
                    <motion.div 
                      className="absolute top-20 left-0 bg-inverse border border-white/10 rounded-xl p-2 min-w-[200px] shadow-2xl"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex flex-col">
                        <a href="#" className="flex items-center px-4 py-3 text-sm font-medium text-inverse hover:bg-white/10 rounded-lg transition-colors"><FaQuestionCircle className="mr-3" /> Help Center</a>
                        <a href="#" className="flex items-center px-4 py-3 text-sm font-medium text-inverse hover:bg-white/10 rounded-lg transition-colors mt-1"><FaEnvelope className="mr-3" /> Contact</a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            </ul>
          </nav>

          <div className="hidden lg:flex items-center">
            <a href="#" className="inline-flex items-center justify-center px-6 py-3 bg-page text-primary rounded-lg font-medium hover:opacity-90 hover:-translate-y-0.5 transition-all">Start free</a>
          </div>

          <button 
            className="lg:hidden bg-transparent border-none text-inverse cursor-pointer p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="overflow-hidden bg-inverse border-t border-white/10 lg:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-6 p-8">
              <a href="#" className="text-xl font-medium text-inverse">Solutions</a>
              <a href="#" className="text-xl font-medium text-inverse">About</a>
              <a href="#" className="text-xl font-medium text-inverse">Blog</a>
              <a href="#" className="text-xl font-medium text-inverse">Support</a>
              <a href="#" className="inline-flex items-center justify-center px-6 py-4 bg-page text-primary rounded-lg font-medium mt-4">Start free</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

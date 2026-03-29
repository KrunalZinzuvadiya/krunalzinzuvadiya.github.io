import React from 'react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <motion.section
      className="hero min-h-screen flex items-center px-6 md:px-10 lg:px-24 relative"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="hero-content flex flex-col gap-10 md:gap-14">
        <div className="hero-text-block">
          <p className="hero-intro-wrapper">
            <span className="hero-intro">Hello, I&apos;m Krunal Zinzuvadiya</span>
          </p>

          <h1 className="hero-headline text-slate-50">
            <span className="block hero-heading-main">AI/ML Engineer Building</span>
            <span className="block hero-heading-main">
              Production-Ready Intelligent Systems
              <span className="hero-name-gradient"> for Real-World Impact</span>
            </span>
          </h1>



          <p className="text-sm md:text-base font-medium tracking-[0.18em] uppercase text-slate-400">
            LLMs • Agentic AI • Machine Learning • Deep Learning
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 hero-buttons">
            <motion.a
              href="#projects"
              whileHover={{ y: -1, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="hero-btn hero-btn-primary"
            >
              View Projects
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ y: -1, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="hero-btn hero-btn-secondary"
            >
              Contact Me
            </motion.a>
          </div>
        </div>

      </div>
    </motion.section>
  );
}


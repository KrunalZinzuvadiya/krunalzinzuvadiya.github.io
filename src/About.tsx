import React from 'react';
import { motion } from 'motion/react';
import profileImage from '../images/generated-1772222198515.png';

export function About() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-2 border-blue-400/30 p-4 flex items-center justify-center overflow-hidden">
                <img
                  src={profileImage}
                  alt="Krunal Zinzuvadiya"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 border-2 border-dashed border-blue-400/20 rounded-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 text-left"
          >
            <h3 className="text-xl md:text-2xl font-semibold leading-snug bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
              AI Engineer — building production-grade GenAI and intelligent systems
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed">
              I&apos;m an AI Engineer based in India, focused on designing end-to-end systems that
              turn raw data into reliable, real-world outcomes using machine learning and modern AI
              stacks.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              Currently, I work as an Associate AI Engineer at ProductSquads, where I build and
              deploy production-grade AI solutions — from LLM-powered workflows and RAG systems to
              scalable automation and backend AI services.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              Previously, I worked on applied AI systems at Petpooja and Canspirit AI, delivering
              machine learning and data-driven solutions for real business use cases.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-lg border border-blue-400/20"
            >
              <p className="text-blue-300 italic leading-relaxed">
                I focus on building systems that move beyond experimentation into scalable,
                reliable, and impactful applications.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'motion/react';
import { Code, Coffee, Heart } from 'lucide-react';
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
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              AI/ML Engineer passionate about data-driven intelligence
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed">
              I&apos;m an aspiring AI/ML Engineer and Data Scientist from Pune, India, with a strong
              engineering foundation. I love designing end-to-end solutions that move from raw data
              to clear, actionable decisions using machine learning and analytics.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              I completed my Bachelor&apos;s in Engineering from L.D. College of Engineering,
              Ahmedabad, and I&apos;m currently pursuing my Master&apos;s in Data Science and
              Spatial Analytics at Symbiosis International University (expected 2025). My projects
              span computer vision, predictive modeling, reinforcement learning, and AutoML.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              Outside the screen, trekking and mountaineering have taught me resilience, teamwork,
              and how to navigate uncertainty—values I bring into every AI project.
            </p>

            <div className="flex items-center space-x-6 text-gray-400">
              <div className="flex items-center space-x-2">
                <Code className="text-blue-400" size={20} />
                <span>Fluent in data &amp; algorithms</span>
              </div>
              <div className="flex items-center space-x-2">
                <Coffee className="text-purple-400" size={20} />
                <span>Powered by curiosity</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="text-pink-400" size={20} />
                <span>Passionate about AI &amp; analytics</span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-lg border border-blue-400/20"
            >
              <p className="text-blue-300 italic">
                &quot;Turning raw data into intelligent, real-world decisions.&quot;
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, GraduationCap } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: 'Associate AI Engineer',
      company: 'ProductSquads • Full-time',
      period: 'Oct 2025 – Present • On-site',
      description:
        'Building and deploying production-grade GenAI systems, including LLM workflows, agentic pipelines, and backend AI services.',
      icon: Briefcase,
      skills: ['GenAI', 'LLM systems', 'Agentic AI'],
    },
    {
      title: 'AI/ML Engineer',
      company: 'Advant AI Labs • Full-time',
      period: 'May 2025 – Oct 2025 • Ahmedabad, Gujarat, India',
      description:
        'Developed LLM-based chatbot systems, RAG pipelines, and FastAPI-based AI services for real-world use cases.',
      icon: Briefcase,
      skills: ['LLMs', 'RAG', 'FastAPI'],
    },
    {
      title: 'Data Science Trainee',
      company: 'Petpooja • Internship',
      period: 'Jan 2025 – May 2025 • Ahmedabad, Gujarat, India • On-site',
      description:
        'Applied machine learning and data analytics to solve business problems in restaurant tech systems.',
      icon: Briefcase,
      skills: ['Python', 'SQL', 'ML'],
    },
    {
      title: 'Data Science Intern',
      company: 'Canspirit Artificial Intelligence • Internship',
      period: 'May 2024 – Nov 2024',
      description:
        'Applied machine learning and analytics on real-world datasets to deliver models and insights for business stakeholders.',
      icon: Briefcase,
      skills: ['Machine Learning', 'Data Analysis', 'Python'],
    },
    {
      title: 'M.Sc. Data Science & Spatial Analytics',
      company: 'Symbiosis International University, Pune',
      period: '2023 – 2025',
      description:
        'Advanced coursework and projects across machine learning, spatial analytics, GenAI, and reinforcement learning—applied to real-world data problems.',
      icon: GraduationCap,
      skills: ['Machine Learning', 'Python', 'Deep Learning', 'GenAI', 'Reinforcement Learning'],
    },
  ] as const;

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Experience Timeline
          </h2>
          <p className="text-gray-400 text-lg">
            From applied ML and analytics to production GenAI and LLM systems.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.3 + 0.5, duration: 0.5 }}
                viewport={{ once: true }}
                className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-gray-900 z-10"
              />

              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`w-5/12 ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}
              >
                <div className="experience-card bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 hover:border-blue-400/50 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-blue-500/20 rounded-full mr-4">
                      <exp.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <p className="text-blue-400">{exp.company}</p>
                    </div>
                  </div>

                  <p className="text-purple-300 text-sm mb-3">{exp.period}</p>
                  <p className="experience-card-description text-gray-300 mb-4">{exp.description}</p>

                  <div className="experience-card-skills flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-400/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'motion/react';

type Skill = { name: string; level: number; icon: string };

export function TechStack() {
  const techCategories: { category: string; skills: Skill[] }[] = [
    {
      category: 'Programming, Scripting & Machine Learning',
      skills: [
        { name: 'Python', level: 90, icon: '🐍' },
        { name: 'R', level: 85, icon: '📊' },
        { name: 'Machine Learning', level: 88, icon: '🧠' },
        { name: 'Deep Learning', level: 88, icon: '🔬' },
        { name: 'Computer Vision', level: 85, icon: '👁️' },
      ],
    },
    {
      category: 'AI & LLMs',
      skills: [
        { name: 'OpenAI SDK', level: 88, icon: '📦' },
        { name: 'LangChain', level: 87, icon: '⛓️' },
        { name: 'LangGraph', level: 86, icon: '📈' },
        { name: 'RAG', level: 88, icon: '🔍' },
        { name: 'Prompt Engineering', level: 87, icon: '✏️' },
        { name: 'Vector Retrieval', level: 86, icon: '📚' },
        { name: 'LLM Observability', level: 85, icon: '👁️' },
      ],
    },
    {
      category: 'Backend Development',
      skills: [
        { name: 'FastAPI', level: 88, icon: '⚡' },
        { name: 'REST APIs', level: 87, icon: '🌐' },
        { name: 'API Design', level: 86, icon: '📐' },
        { name: 'Asynchronous Programming', level: 86, icon: '⏳' },
      ],
    },
    {
      category: 'Databases',
      skills: [
        { name: 'PostgreSQL', level: 86, icon: '🐘' },
        { name: 'MySQL', level: 85, icon: '🐬' },
        { name: 'MongoDB', level: 85, icon: '🍃' },
        { name: 'SQLite', level: 84, icon: '📁' },
      ],
    },
    {
      category: 'Tools & Frameworks',
      skills: [
        { name: 'Git', level: 88, icon: '🔧' },
        { name: 'GitHub', level: 86, icon: '🐙' },
        { name: 'Jupyter', level: 87, icon: '📓' },
        { name: 'Google Colab', level: 86, icon: '☁️' },
        { name: 'FastAPI', level: 88, icon: '⚡' },
        { name: 'Gradio', level: 85, icon: '🎨' },
        { name: 'Playwright', level: 84, icon: '🎭' },
      ],
    },
    {
      category: 'Soft Skills',
      skills: [
        { name: 'Critical Thinking', level: 90, icon: '💡' },
        { name: 'Problem Solving Abilities', level: 88, icon: '🧩' },
        { name: 'Teamwork', level: 87, icon: '🤝' },
        { name: 'Time Management', level: 86, icon: '⏱️' },
        { name: 'Attention to Detail', level: 88, icon: '🎯' },
        { name: 'Creativity', level: 87, icon: '✨' },
        { name: 'Continuous Learning', level: 88, icon: '📚' },
      ],
    },
  ];

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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to build intelligent, data-driven systems — including GenAI,
            LLMs, and production ML.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 hover:border-purple-400/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-6 text-center">{category.category}</h3>

              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.1 + index * 0.05,
                    }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4"
                  >
                    <motion.div whileHover={{ scale: 1.3, rotate: 15 }} className="text-2xl shrink-0">
                      {skill.icon}
                    </motion.div>

                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center mb-1 gap-2">
                        <span className="text-white font-medium truncate">{skill.name}</span>
                        <span className="text-purple-400 text-sm shrink-0">{skill.level}%</span>
                      </div>

                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{
                            duration: 1,
                            delay: categoryIndex * 0.1 + index * 0.05 + 0.5,
                          }}
                          viewport={{ once: true }}
                          className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

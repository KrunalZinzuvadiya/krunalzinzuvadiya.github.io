import React from 'react';
import { motion } from 'motion/react';
import { Github, Camera, Activity, Gamepad2, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

export function Projects() {
  const projects = [
    {
      title: 'Real-Time QR Code Scanner',
      description:
        'OpenCV-based QR scanner that detects and decodes QR codes from live webcam feeds in real time.',
      icon: Camera,
      tech: ['Python', 'OpenCV', 'Computer Vision'],
      gradient: 'from-blue-400 to-cyan-500',
      demo: 'https://krunalzinzuvadiya.github.io/',
      github: 'https://github.com/KrunalZinzuvadiya/QRCode',
    },
    {
      title: 'Diabetes Risk Prediction',
      description:
        'Supervised machine learning model that predicts the likelihood of diabetes from key clinical features.',
      icon: Activity,
      tech: ['Python', 'Pandas', 'Scikit-learn'],
      gradient: 'from-purple-400 to-pink-500',
      demo: 'https://krunalzinzuvadiya.github.io/',
      github: 'https://github.com/KrunalZinzuvadiya/DiabetesPrediction',
    },
    {
      title: 'Frozen Lake RL Agent',
      description:
        'Reinforcement learning agent trained on the Frozen Lake environment to explore policy behavior and decisions.',
      icon: Gamepad2,
      tech: ['Python', 'Reinforcement Learning', 'Gym'],
      gradient: 'from-indigo-400 to-blue-500',
      demo: 'https://krunalzinzuvadiya.github.io/',
      github: 'https://github.com/KrunalZinzuvadiya/Frozen-Lake',
    },
    {
      title: 'AutoML Streamlit Toolkit',
      description:
        'End-to-end AutoML web app that automates preprocessing, model training, and evaluation via a Streamlit interface.',
      icon: Sparkles,
      tech: ['Python', 'Streamlit', 'AutoML'],
      gradient: 'from-emerald-400 to-teal-500',
      demo: 'https://krunalzinzuvadiya.github.io/',
      github: '#',
    },
  ] as const;

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Interactive gallery of AI/ML projects that showcase my journey from experimentation to
            production-ready systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="bg-gray-900/50 border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 overflow-hidden relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`p-3 rounded-full bg-gradient-to-r ${project.gradient} bg-opacity-20`}
                    >
                      <project.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-gray-400 hover:text-blue-400"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                      </a>
                    </Button>
                  </div>
                  <CardTitle className="text-white group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="project-card-description text-gray-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


import React from 'react';
import { Hero } from './Hero';
import { About } from './About';
import { Projects } from './Projects';
import { Experience } from './Experience';
import { TechStack } from './TechStack';
import { Contact } from './Contact';
import { NeuralBackground } from './NeuralBackground';

export default function App() {
  return (
    <div className="dark min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <NeuralBackground />
      <div className="relative z-10">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}


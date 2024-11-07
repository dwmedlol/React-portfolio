
import './App.css'
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import AboutSection from './About';
import TechnologiesSection from './Technologies';
import ProjectsSection from './Project';
import SkillsSection from './Skills';
import Footer from './Footer';
import { GlobalStyles } from './GlobalStyles';

export default function App() {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div   className="bg-dark text-white" id='main'>
      <style jsx>{GlobalStyles}</style>
      <Header scrollToSection={scrollToSection} />
      <div className="container py-5">
        <AboutSection isVisible={isVisible['about']} />
        <TechnologiesSection isVisible={isVisible['technologies']} />
        <ProjectsSection isVisible={isVisible['projects']} />
        <SkillsSection isVisible={isVisible['skills']} />
      </div>
      <Footer />
    </div>
  );
}


import React from 'react';

const skills = [
  { title: "Complete website", description: "I can build a complete website and take care of everything like frontend, backend, deployment, SEO... from start to finish." },
  { title: "User friendly websites", description: "I make websites easy to use, user friendly but complex in features from design to functionality, ensuring a seamless experience." },
  { title: "SEO", description: "Basic SEO Optimization: Enhance website visibility with on-page optimization, keyword research, content improvements, internal linking, and performance tracking for better search engine ranking and user engagement." },
  { title: "Language skills", description: "I speak Arabic and English, providing clear communication and understanding in both languages." },
];

export default function SkillsSection({ isVisible }) {
  return (
    <section id="skills" className={`mb-5 ${isVisible ? 'animate__animated animate__fadeIn' : ''}`}>
      <h2 className="text-center h2 mb-5 fw-bold">Skills</h2>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {skills.map((skill, index) => (
          <div key={skill.title} className="col">
            <div className={`bg-dark rounded p-4 h-100 skill-card ${isVisible ? 'animate__animated animate__flipInX' : ''}`} style={{ animationDelay: `${index * 200}ms` }}>
              <h3 className="h5 mb-3">{skill.title}</h3>
              <p className="mb-0">{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
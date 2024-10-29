import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';

const technologies = [
  {
    name: 'HTML',
    icon: <FaHtml5 size={48} />,
    color: 'text-danger'
  },
  {
    name: 'CSS',
    icon: <FaCss3Alt size={48} />,
    color: 'text-primary'
  },
  {
    name: 'JavaScript',
    icon: <FaJs size={48} />,
    color: 'text-warning'
  },
  {
    name: 'React',
    icon: <FaReact size={48} />,
    color: 'text-info'
  },
];

export default function TechnologiesSection({ isVisible }) {
  return (
    <section id="technologies" className={`mb-5 ${isVisible ? 'animate__animated animate__fadeIn' : ''}`}>
      <h2 className="text-center h2 mb-5 fw-bold">Technologies</h2>
      <div className="row row-cols-2 row-cols-md-4 g-4">
        {technologies.map((tech, index) => (
          <div key={tech.name} className="col">
            <div className={`d-flex flex-column align-items-center tech-card ${isVisible ? 'animate__animated animate__zoomIn' : ''}`} style={{ animationDelay: `${index * 200}ms` }}>
              <div className={`bg-dark rounded-circle p-3 mb-3 d-flex align-items-center justify-content-center tech-icon ${tech.color}`} style={{width: '96px', height: '96px'}}>
                {tech.icon}
              </div>
              <span className="h5 fw-bold">{tech.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

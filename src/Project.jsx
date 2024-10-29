import React from 'react';
import { Carousel } from 'react-bootstrap';

const carouselItems = [
  {
    title: "For Everyone",
    description: "this section is for showcasing my skills that's it :)",
    bgColor: "bg-gradient-primary",
  },
  {
    title: "For Teams",
    description: "A superassistant for every member of your team",
    bgColor: "bg-gradient-success",
  },
  {
    title: "For Enterprises",
    description: "Empower your entire workforce with enterprise-grade AI",
    bgColor: "bg-gradient-info",
  },
  {
    title: "SearchGPT Prototype",
    description: "SearchGPT is a prototype of new AI search features",
    bgColor: "bg-gradient-danger",
  },
];

export default function ProjectsSection({ isVisible }) {
  return (
    <section id="projects" className={`mb-5 ${isVisible ? 'animate__animated animate__fadeIn' : ''}`}>
      <h2 className="text-center h2 mb-5 fw-bold">My Projects</h2>
      <Carousel>
        {carouselItems.map((item, index) => (
          <Carousel.Item key={index}>
            <div className={`${item.bgColor} p-5 rounded-3 text-white`}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}
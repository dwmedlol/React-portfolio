import React from 'react';

export default function Header({ scrollToSection }) {
  return (
    <header className="py-3 border-bottom border-secondary sticky-top bg-dark" id='head'>
      <nav className="container">
        <ul className="nav justify-content-end">
          <li className="nav-item"><a onClick={() => scrollToSection('about')} className="nav-link text-white">About</a></li>
          <li className="nav-item"><a onClick={() => scrollToSection('technologies')} className="nav-link text-white">Technologies</a></li>
          <li className="nav-item"><a onClick={() => scrollToSection('projects')} className="nav-link text-white">Projects</a></li>
          <li className="nav-item"><a onClick={() => scrollToSection('skills')} className="nav-link text-white">Skills</a></li>
        </ul>
      </nav>
    </header>
  );
}
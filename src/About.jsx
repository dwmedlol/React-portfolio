import React from 'react';
import { FaYoutube, FaEnvelope, FaTwitter, FaGithub } from 'react-icons/fa';
import myImg from "./imgs/me.jpg";

export default function AboutSection({ isVisible }) {
  return (
    <section id="about" className={`mb-5 ${isVisible ? 'animate__animated animate__fadeIn' : ''}`}>
      <div className="bg-black text-white rounded-3 shadow p-4 profile-card">
        <div className="row align-items-center">
          <div className="col-auto">
            <img
              src={myImg}
              alt="Mohamed Semaoune"
              className="rounded-circle"
              width="80"
              height="80"
            />
          </div>
          <div className="col">
            <h1 className="h3 mb-0 fw-bold">Mohamed Semaoune</h1>
            <p className="text-muted mb-0 job" id='title'>Front-End Developer</p>
          </div>
          <div className="col-auto">
            <a href="#" className="text-white me-3 social-icon"><FaYoutube size={24} /></a>
            <a href="#" className="text-white me-3 social-icon"><FaEnvelope size={24} /></a>
            <a href="#" className="text-white me-3 social-icon"><FaTwitter size={24} /></a>
            <a href="#" className="text-white social-icon"><FaGithub size={24} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
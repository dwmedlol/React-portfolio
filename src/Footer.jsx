import React from 'react';
import { FaGithub, FaTwitter, FaDiscord } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="py-4 border-top border-secondary">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p className="mb-0">Mohamed Semaoune | medex0731@gmail.com</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <a href="#" className="text-white me-3"><FaGithub size={20} href="https://github.com/dwmedlol" /></a>
            <a href="#" className="text-white"><FaDiscord size={20}  href="https://discordapp.com/users/m1exd"/></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
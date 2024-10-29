export const GlobalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
  @import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');

  body {
    font-family: 'Poppins', sans-serif;
  }

  .profile-card {
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .social-icon {
    transition: transform 0.3s ease, color 0.3s ease;
  }
  .social-icon:hover {
    transform: translateY(-5px);
    color: #808080 !important;
  }
  .tech-icon, .skill-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .tech-icon:hover, .skill-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(255,255,255,0.1);
  }

  .bg-gradient-primary {
    background: linear-gradient(45deg, #007bff, #00ffff);
  }
  .bg-gradient-success {
    background: linear-gradient(45deg, #28a745, #00ff00);
  }
  .bg-gradient-info {
    background: linear-gradient(45deg, #17a2b8, #00ffff);
  }
  .bg-gradient-danger {
    background: linear-gradient(45deg, #dc3545, #ff0000);
  }

  .carousel-item {
    height: 300px;
  }
`;
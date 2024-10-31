import React from 'react';

const projects = [
  {
    name: "TODO LIST",
    details: "Using Typescript",
    image: "/project1.png", 
  },
  {
    name: "ECOMMERCE WEBSITE",
    details: "Using Next.js and Tailwindcss",
    image: "/project2.png", 
  },
  {
    name: "ATM MACHINE",
    details: "Using Typescript",
    image: "/project3.png", 
  },
  {
    name: "CALCULATOR",
    details: "Using Typescript",
    image: "/project4.png", 
  },
  {
    name: "CURRENCY CONVERTER",
    details: "Using Typescript",
    image: "/project5.png", 
  },
  {
    name: "PERSONAL PORFOOLIO",
    details: "Using HTML CSS and Typescript",
    image: "/project5.png", 
  },
  
  
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <img src={project.image} alt={project.name} className="project-image" />
            <div className="project-info">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-details">{project.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
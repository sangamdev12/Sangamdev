// src/sections/Projects.jsx
import React from 'react';
import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import Todo from '../../assets/todoIcon.png'
import weather from '../../assets/weather.png'
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.projectsSection}>
      <h1 className={styles.heading}>Projects</h1>
      <div className={styles.projectsGrid}>
        <ProjectCard
          src={weather}
          h3 = "Weather app"
          p="A simple weather app to show the weather details of the places."
          liveLink="https://example.com/viberr"
          codeLink="https://github.com/sangamdev12/viberr"
        />
        <ProjectCard
          src={Todo}
          h3="Todo App"
          p="A simple to-do list built with React."
          liveLink="https://mygolist.netlify.app/"
          codeLink="https://github.com/sangamdev12/My-ToDo-Application"
        />
        <ProjectCard
          src={viberr}
          h3="Siccor, paper, rock"
          p="A gaming app built with JS and HTML5 Canvas."
          liveLink="https://example.com/spr"
          codeLink="https://github.com/sangamdev12/spr"
        />
      </div>
    </section>
  );
}

export default Projects;

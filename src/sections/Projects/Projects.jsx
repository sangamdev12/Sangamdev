// src/sections/Projects.jsx
import React from 'react';
import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.projectsSection}>
      <h1 className={styles.heading}>Projects</h1>
      <div className={styles.projectsGrid}>
        <ProjectCard
          src={viberr}
          h3 = "Viberr"
          p="Streaming app for music & video."
          liveLink="https://example.com/viberr"
          codeLink="https://github.com/sangamdev12/viberr"
        />
        <ProjectCard
          src={viberr}
          h3="Todo App"
          p="A simple to-do list built with React."
          liveLink="https://mygolist.netlify.app/"
          codeLink="https://github.com/sangamdev12/My-ToDo-Application"
        />
        <ProjectCard
          src={viberr}
          h3="SPR"
          p="A gaming app built with JS and HTML5 Canvas."
          liveLink="https://example.com/spr"
          codeLink="https://github.com/sangamdev12/spr"
        />
      </div>
    </section>
  );
}

export default Projects;

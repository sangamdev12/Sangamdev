import React from 'react'
import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
           <ProjectCard src={viberr} link='https://github.com/sangamdev12'
           h3 = "viberr"
           p = "Streaming app"
           />

           <ProjectCard src={viberr} link='https://github.com/sangamdev12/My-ToDo-Application'
           h3 = "ToDo App"
           p = "A React-based weather forecast application using OpenWeather API.,"
           />

           <ProjectCard src={viberr} link='https://github.com/sangamdev12'
           h3 = "SPR"
           p = "gaming app"
           /><br /> <br />
        </div>


    </section>
  )
}

export default Projects
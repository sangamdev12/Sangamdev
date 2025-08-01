// src/common/ProjectCard.jsx
import React from 'react';
import styles from '../sections/Projects/ProjectsStyles.module.css';

function ProjectCard({ src, h3, p, liveLink, codeLink }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImgContainer}>
        <img src={src} alt={h3} className={styles.cardImg} />
      </div>
      <div className={styles.cardContent}>
        <h3>{h3}</h3>
        <div className={styles.hoverInfo}>
          <p>{p}</p>
        </div>
      </div>
      <div className={styles.cardFooter}>
        <a href={codeLink} target="_blank" rel="noopener noreferrer">
          <button className={styles.codeBtn}>Code</button>
        </a>
        {liveLink && (
          <a href={liveLink} target="_blank" rel="noopener noreferrer" style={{ marginLeft: '10px' }}>
            <button className={styles.codeBtn}>Live</button>
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard

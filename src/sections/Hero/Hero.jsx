import React from 'react';
import styles from './HeroStyles.module.css';
import heroImg from '../../assets/heroImg.jpeg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import LinkedinLight from '../../assets/linkedin-light.svg';
import LinkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
    const { theme, toggleTheme } = useTheme();
    const themeIcon = theme === 'light' ? sun : moon;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const LinkedinIcon = theme === 'light' ? LinkedinLight : LinkedinDark;
  return (
    <section className={styles.container} id='hero'>
        <div className={styles.colorModeContainer}>
           <img className= {styles.hero} src={heroImg} alt='profile picture of Sangam Regmi' />

           <img className= {styles.colorMode} src= {themeIcon} alt='color Mode Icon' onClick={toggleTheme}/>
        </div>

        <div className={styles.info}>
            <h1>Sangam <br/> Regmi</h1>
            <h2>Software Developer</h2>

            <span>
                <a href='https://github.com/sangamdev12' target='https://github.com/sangamdev12'>
                <img src={githubIcon} alt='github icon'/>
                </a>
                <a href='https://www.linkedin.com/in/sangam-regmi-2249a228b' target='https://www.linkedin.com/in/sangam-regmi-2249a228b'>
                <img src={LinkedinIcon} alt='Linkedin icon'/>
                </a>
            </span>
            <p className={styles.description}>
                with a passion for developing modern React web apps for commercial businesses
            </p>
            <a href={CV} download>
                <button className='hover'>
                    Resume
                </button>
            </a>
        </div>

    </section>
  )
}

export default Hero
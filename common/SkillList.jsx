import React from 'react'
import Styles from '../sections/Skills/SkillsStyles.module.css';

function SkillList({src, skill}) {
  return (
    <span >
        <img className={Styles.checkMarkImg} src={src} alt='CheckMark Icon'/>
        <p>{skill}</p>
    </span>
  )
}

export default SkillList
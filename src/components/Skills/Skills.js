import React from 'react'
import SkillsTemplate from './SkillsTemplate'

function Skills() {

  return (
    <div className='main'>
      <h1 className='heading' >arsenal of Skills</h1>
      <div className='container'>
        <ul>
          <SkillsTemplate name="Javascript" />
          <SkillsTemplate name="Sass" />
          <SkillsTemplate name="Reactjs" />
          <SkillsTemplate name="Typescript" />
          <SkillsTemplate name="Java" />
          <SkillsTemplate name="SQL" />
          <SkillsTemplate name="NPM" />
        </ul>
        <ul>          
        <SkillsTemplate name="CSS3" />
        <SkillsTemplate name="HTML5" />
        <SkillsTemplate name="Bootstrap" />
        <SkillsTemplate name="Tailwind" />
        <SkillsTemplate name="MUI" />
        <SkillsTemplate name="Git" />
        <SkillsTemplate name="Github" />
        </ul>
    </div>
    </div>
  )
}

export default Skills;

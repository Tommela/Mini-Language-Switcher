import React, { useContext } from 'react'
import { LanguageContext } from '../contexts/LanguageContext'

const About = () => {
  const {t} = useContext(LanguageContext);
  return (
    <div>
      <h1>{t.about}</h1>
      <p>{t.description}</p>
    </div>
  )
}

export default About

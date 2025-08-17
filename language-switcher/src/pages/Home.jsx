import React, { useContext } from 'react'
import { LanguageContext } from '../contexts/LanguageContext'

const Home = () => {
  const {t} = useContext(LanguageContext);
  return (
    <div>
      <h1> {t.welcome} </h1>
       <p>{t.intro}</p>
    </div>
  )
}

export default Home

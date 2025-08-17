import { useState } from "react";
import en from "../locales/en.json";
import es from "../locales/es.json";
import { LanguageContext } from "../contexts/LanguageContext";

const languages = { en, es };
console.log(languages);
console.log(languages["en"])

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };
  return (
    <LanguageContext.Provider
      value={{ language, changeLanguage, t: languages[language] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
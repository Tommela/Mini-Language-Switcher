import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../contexts/LanguageContext";

const Navbar = () => {
  const { changeLanguage } = useContext(LanguageContext);
  return (
    <nav>
      <Link to="/"> Home </Link> | <Link to="/about"> About </Link>
      <button onClick={() => changeLanguage("en")}> EN </button>
      <button onClick={() => changeLanguage("es")}> ES </button>
    </nav>
  );
};

export default Navbar;

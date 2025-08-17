import React from "react";
import Navbar from "./components/Navbar";
import { LanguageProvider } from "./providers/LanguageProvider";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

const AppRoutes = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

const App = () => {
  return (
   <LanguageProvider>
      <Router>
        <Navbar />
        <AppRoutes />
      </Router>
    </LanguageProvider>
  );
};

export default App;

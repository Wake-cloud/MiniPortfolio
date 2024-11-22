import React from "react";
import AboutMe from "./components/AboutMe";
import Project from "./components/Project";
import ContactForm from "./components/ContactForm";
import HireMe from "./components/HireMe";
import Footer from "./components/Footer";
import './App.css'

const App = () => {
  return (
    <div>
      <div className="container">
        <AboutMe />
        <Project />
        <ContactForm />
        <HireMe />
      </div>
      <Footer />
    </div>
  );
};

export default App;

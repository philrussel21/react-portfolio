import React from 'react';
import { Router, Link } from '@reach/router';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <div>
      <Navbar />
      <Router>
        <Home path="/" />
        <About path="/about" />
        <Projects path="/projects" />
        <Contact path="/contact" />
        <NotFound default />
      </Router>
    </div>
  );
};

export default App;

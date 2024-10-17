import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Birds from './components/Birds';
import Charts from './components/Charts';
import CV from './components/CV';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <Link to="/home">Home</Link> | <Link to="/about">About Me</Link> | <Link to="/projects">Projects</Link> | <Link to="/contact">Contact</Link> | <Link to="/birds">Birds </Link> 
            | <Link to="/charts">Charts</Link> | <Link to="/cv">CV</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Navigate to ="/home" />}/>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/birds" element={<Birds/>}/>
          <Route path="/charts" element={<Charts/>}/>
          <Route path="/cv" element={<CV/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

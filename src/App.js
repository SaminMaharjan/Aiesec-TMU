
//npm install react-router-dom
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/team">Team</a></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
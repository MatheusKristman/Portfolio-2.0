import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/reset.css';
import './css/styles.scss';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TermosECondicoes" element={<Terms />} />
        <Route path="/PoliticaDePrivacidade" element={<Privacy />} />
      </Routes>
    </Router>
  );
}

export default App;

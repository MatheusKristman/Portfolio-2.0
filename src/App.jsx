import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/reset.css';
import './css/styles.scss';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

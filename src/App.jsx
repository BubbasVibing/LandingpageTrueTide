import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ComingSoon from './pages/ComingSoon';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ComingSoon />} />
        <Route path="/privacy" element={<ComingSoon />} />
      </Routes>
    </Router>
  );
}

export default App;

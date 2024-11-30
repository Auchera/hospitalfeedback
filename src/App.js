import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import OneriPage from './pages/OneriPage';
import SikayetPage from './pages/SikayetPage';
import MemnuniyetPage from './pages/MemnuniyetPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/oneri" element={<OneriPage />} />
        <Route path="/sikayet" element={<SikayetPage />} />
        <Route path="/memnuniyet" element={<MemnuniyetPage />} />
      </Routes>
    </Router>
  );
}

export default App;

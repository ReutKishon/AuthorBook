import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthorsPage from './pages/AuthorsPage';
import BooksPage from './pages/BooksPage';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthorsPage />} />
        <Route path="/authors/:id" element={<BooksPage />} />
      </Routes>
    </Router>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthorsPage from './pages/AuthorsPage';
import BooksPage from './pages/BooksPage';
import './index.css'; 

const App = () => {
  return (
    <div className='px-8'>
    <Router>
      <Routes>
        <Route path="/" element={<AuthorsPage />} />
        <Route path="/authors/:id/books" element={<BooksPage />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;

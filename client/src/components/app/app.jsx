import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemsList from '../item-list/item-list';
import ItemPage from '../item-page/item-page';
import Header from '../header/header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ItemsList />} />
        <Route path="/items/:id" element={<ItemPage />} />
      </Routes>
    </Router>
  );
}

export default App;

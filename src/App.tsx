import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import BankingSolutionsPage from './pages/BankingSolutionsPage/BankingSolutionsPage';

function App() {
  return (
    <div className='appWrapper'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/banking_solutions' element={<BankingSolutionsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

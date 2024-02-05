import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import BankingSolutionsPage from './pages/BankingSolutionsPage/BankingSolutionsPage';
import { DesignPage } from './pages/DesignPage/DesignPage';
import { TargetAds } from './pages/DesignPage/TargetAds/TargetAds';
import { NftTickets } from './pages/DesignPage/NftTickets/NftTickets';
import { Juno } from './pages/DesignPage/Juno/Juno';
import { TradingBots } from './pages/DesignPage/TradingBots/TradingBots';

function App() {
  return (
    <div className='appWrapper'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/banking_solutions' element={<BankingSolutionsPage />} />
          <Route path='/design' element={<DesignPage />} />
          <Route path='/design/target_ads' element={<TargetAds />} />
          <Route path='/design/nft_tickets' element={<NftTickets />} />
          <Route path='/design/juno' element={<Juno />} />
          <Route path='/design/trading_bots' element={<TradingBots />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React, { useContext } from 'react';
import { CryptoContext } from './context/CryptoContext';
import CoinList from './components/CoinList';
import './App.css';

function App() {
  const { theme, setTheme } = useContext(CryptoContext);

  return (
    <div className={theme === 'dark' ? 'dark-mode' : 'light-mode'}>
      <header>
        <h1>Crypto Tracker</h1>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          Toggle Theme
        </button>
      </header>
      <CoinList />
    </div>
  );
}

export default App;
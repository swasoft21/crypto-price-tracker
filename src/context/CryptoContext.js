// CryptoContext.js (for theme + global data)
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CryptoContext = createContext();

export const CryptoProvider = ({ children }) => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const [theme, setTheme] = useState('light');

  const fetchCoins = async () => {
    const { data } = await axios.get(
      'https://api.coingecko.com/api/v3/coins/markets',
      {
        params: {
          vs_currency: 'usd',
          order: 'market_cap_desc',
          per_page: 100,
          page: 1,
          sparkline: false,
        },
      }
    );
    setCoins(data);
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <CryptoContext.Provider value={{ coins, search, setSearch, theme, setTheme }}>
      {children}
    </CryptoContext.Provider>
  );
};
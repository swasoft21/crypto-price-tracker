import React, { useContext } from 'react';
import { CryptoContext } from '../context/CryptoContext';
import CoinCard from './CoinCard';

const CoinList = () => {
  const { coins, search, setSearch } = useContext(CryptoContext);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a coin..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid">
        {filteredCoins.map((coin) => (
          <CoinCard key={coin.id} coin={coin} />
        ))}
      </div>
    </div>
  );
};

export default CoinList;
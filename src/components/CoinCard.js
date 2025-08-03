import React from 'react';
import { Link } from 'react-router-dom';

const CoinCard = ({ coin }) => {
  return (
    <Link to={`/coin/${coin.id}`} className="coin-card">
      <img src={coin.image} alt={coin.name} />
      <h2>{coin.name}</h2>
      <p>Price: ${coin.current_price.toLocaleString()}</p>
      <p>Market Cap: ${coin.market_cap.toLocaleString()}</p>
    </Link>
  );
};

export default CoinCard;
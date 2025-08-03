import { render, screen } from '@testing-library/react';
import CoinCard from './CoinCard';

const mockCoin = {
  id: 'bitcoin',
  name: 'Bitcoin',
  image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png',
  current_price: 30000,
  market_cap: 600000000,
};

test('renders coin card', () => {
  render(<CoinCard coin={mockCoin} />);
  expect(screen.getByText(/Bitcoin/i)).toBeInTheDocument();
  expect(screen.getByText(/Price: \$30,000/i)).toBeInTheDocument();
});
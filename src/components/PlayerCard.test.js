import React from 'react';
import { render, screen } from '@testing-library/react';
import PlayerCard from './PlayerCard';

const mockPlayer = {
  image_url: 'http://example.com/image.jpg',
  name: 'LeBron James',
  rank: 1,
  team: 'Los Angeles Lakers',
  position: 'Forward',
  points_per_game: 25.7,
  assists_per_game: 7.9,
  rebounds_per_game: 8.1,
};

test('renders player card with correct information', () => {
  render(<PlayerCard player={mockPlayer} />);
  
  // Check player image
  const imgElement = screen.getByAltText(/LeBron James/i);
  expect(imgElement).toHaveAttribute('src', mockPlayer.image_url);
  
  // Check player name
  const nameElement = screen.getByText(/LeBron James/i);
  expect(nameElement).toBeInTheDocument();
  
  // Check player stats
  const statsElement = screen.getByText(/25.7 PPG, 7.9 APG, 8.1 RPG/i);
  expect(statsElement).toBeInTheDocument();
});
import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';
import PlayerCard from '../components/PlayerCard';

// Mocking PlayerCard component
jest.mock('../components/PlayerCard', () => () => <div>PlayerCard</div>);

test('renders home page with title and player cards', () => {
  render(<Home />);
  
  // Check home page title
  const titleElement = screen.getByText(/Top 100 NBA Players/i);
  expect(titleElement).toBeInTheDocument();
  
  // Check if PlayerCard component is rendered
  const playerCardElements = screen.getAllByText(/PlayerCard/i);
  expect(playerCardElements.length).toBeGreaterThan(0); // Ensure some player cards are rendered
});
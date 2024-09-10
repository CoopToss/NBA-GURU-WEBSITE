import React from 'react';
import { render, screen } from '@testing-library/react';
import PlayerProfile from './PlayerProfile';

// Mock data
const mockPlayer = {
  image_url: 'http://example.com/image.jpg',
  name: 'Stephen Curry',
  team: 'Golden State Warriors',
  position: 'Guard',
  bio: 'Stephen Curry is a professional basketball player...',
  stats_link: 'http://example.com/stats',
  social_media_link: 'http://example.com/social',
  highlights_link: 'http://example.com/highlights',
};

test('renders player profile with correct information', () => {
  render(<PlayerProfile player={mockPlayer} />);
  
  // Check player name
  const nameElement = screen.getByText(/Stephen Curry/i);
  expect(nameElement).toBeInTheDocument();
  
  // Check player bio
  const bioElement = screen.getByText(/Stephen Curry is a professional basketball player/i);
  expect(bioElement).toBeInTheDocument();
  
  // Check links
  const statsLink = screen.getByRole('link', { name: /Stats/i });
  expect(statsLink).toHaveAttribute('href', mockPlayer.stats_link);
  
  const socialMediaLink = screen.getByRole('link', { name: /Social Media/i });
  expect(socialMediaLink).toHaveAttribute('href', mockPlayer.social_media_link);
  
  const highlightsLink = screen.getByRole('link', { name: /Highlights/i });
  expect(highlightsLink).toHaveAttribute('href', mockPlayer.highlights_link);
});
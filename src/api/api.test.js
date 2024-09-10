import { fetchPlayers } from './api';
import { supabase } from '../supabaseClient';

// Mocking Supabase client
jest.mock('../supabaseClient', () => ({
  supabase: {
    from: jest.fn().mockReturnThis(),
    select: jest.fn().mockResolvedValue({
      data: [{ id: 1, name: 'Player 1' }],
      error: null
    }),
  },
}));

test('fetchPlayers returns players data', async () => {
  const players = await fetchPlayers();
  
  expect(players).toEqual([{ id: 1, name: 'Player 1' }]);
});
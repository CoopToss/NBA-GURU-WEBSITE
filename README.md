# 🏀 NBA Stats & Player Profiles Website

## Overview
Welcome to the NBA Stats & Player Profiles Website! This web application showcases the top 100 NBA players, offering detailed profiles, up-to-date statistics, player highlights, and much more. The website is designed to provide basketball enthusiasts with a visually engaging and user-friendly way to explore their favorite NBA stars.

## Features
- **Top 100 NBA Players**: Browse the current top 100 NBA players.
- **Player Profiles**: Each player has an individual profile with:
  - Personal details (name, team, position)
  - Detailed biography
  - Season stats (Points per game, Assists per game, Rebounds per game)
  - Links to social media and recent highlights
- **Responsive Design**: The app is fully responsive and works seamlessly on mobile, tablet, and desktop.
- **Cool Sports-Themed Styling**: Using custom fonts like 'Orbitron' and unique CSS, the site replicates the feel of a sports trading card.

## Technologies Used
### Frontend
- **React**: For building dynamic user interfaces.
- **Supabase**: Backend-as-a-Service for real-time database and authentication.
- **Tailwind CSS**: For easy and customizable styling.
- **JavaScript (ES6+)**: Core language for client-side functionality.

### Backend
- **Node.js & Express**: Backend API for player data and top 100 players list.
- **MongoDB**: Database for managing player data.
  
### Testing
- **Jest & React Testing Library**: For unit and integration tests across the components.

### Key Components
- **PlayerCard.js**: Displays player details like image, rank, and stats in a trading card-like layout.
- **Home.js**: Main page listing all top 100 NBA players, integrated with `PlayerCard`.
- **PlayerProfile.js**: Dynamic player profile pages showing biography, stats, and media links.

## Running the Project Locally
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/nba-stats-website.git
   cd nba-stats-website/client
2. **Install Dependencies**
   npm install


## Future Enhancements
Team Stats: Expand the app to include team-based stats.
User Authentication: Allow users to sign up and customize their player watchlist.
Live Updates: Fetch real-time stats for ongoing games.
License
This project is licensed under the MIT License. See the LICENSE file for more details.

## Acknowledgments
Inspired by:

The Ringer NBA Rankings
HoopsHype Top 100 Players

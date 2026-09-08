# Sunna-Bot v1.0.7

A Discord bot with various features including games, prayer times, AI integration, and more.

## Features

- 🎮 Games (Rock-Paper-Scissors, Tic-Tac-Toe, Guessing Game)
- 📿 Prayer times integration
- 🤖 AI/NLP capabilities
- 📊 User XP/Experience system
- 🎵 Media integration (YouTube, Pinterest)
- 🔐 Admin & permission system
- 📝 Message management

## Installation

1. Extract the ZIP file
2. Install dependencies: `npm install`
3. Configure `config/config.json`
4. Run: `node index.js`

## Project Structure

```
├── index.js           - Main entry point
├── commands/          - Bot commands
├── events/            - Event handlers
├── services/          - External service integrations
├── core/              - Core functionality
├── database/          - Database operations
├── utils/             - Utility functions
├── games/             - Game modules
├── data/              - Data storage
└── config/            - Configuration files
```

## Commands

- `!info` - Bot information
- `!prayer` - Prayer times
- `!rps <choice>` - Rock-Paper-Scissors
- `!ttt` - Tic-Tac-Toe

## License

MIT License

// Configuration management
const fs = require('fs');
const path = require('path');

let config = {};

module.exports = {
  load: () => {
    try {
      const configPath = path.join(__dirname, '../config/config.json');
      if (fs.existsSync(configPath)) {
        config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
      }
    } catch (error) {
      console.error('Error loading config:', error);
    }
  },
  
  get: (key) => config[key],
  
  set: (key, value) => {
    config[key] = value;
  },
  
  getAll: () => config
};

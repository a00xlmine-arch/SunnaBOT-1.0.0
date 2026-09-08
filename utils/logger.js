// Logger utility
const fs = require('fs');

module.exports = {
  log: (message) => {
    console.log(`[LOG] ${new Date().toISOString()}: ${message}`);
  },
  
  error: (error) => {
    console.error(`[ERROR] ${new Date().toISOString()}: ${error}`);
  },
  
  warn: (warning) => {
    console.warn(`[WARN] ${new Date().toISOString()}: ${warning}`);
  }
};

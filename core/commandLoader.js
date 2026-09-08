// Command loader
const fs = require('fs');
const path = require('path');

module.exports = {
  load: (client) => {
    const commandsPath = path.join(__dirname, '../commands');
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
    
    for (const file of commandFiles) {
      const command = require(path.join(commandsPath, file));
      if (command.name) {
        client.commands = client.commands || new Map();
        client.commands.set(command.name, command);
      }
    }
  }
};

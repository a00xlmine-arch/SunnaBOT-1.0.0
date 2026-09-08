// Message utilities
module.exports = {
  createEmbed: (title, description, color = 0x0099ff) => {
    return {
      color,
      title,
      description,
      timestamp: new Date()
    };
  },
  
  isCommand: (content, prefix) => {
    return content.startsWith(prefix);
  },
  
  getCommandName: (content, prefix) => {
    return content.slice(prefix.length).split(/\s+/)[0];
  },
  
  getCommandArgs: (content, prefix) => {
    return content.slice(prefix.length).split(/\s+/).slice(1);
  }
};

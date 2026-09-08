// Info command
module.exports = {
  name: 'info',
  description: 'Display bot information',
  execute(message, args) {
    const embed = {
      color: 0x0099ff,
      title: 'Sunna-Bot Information',
      description: 'A Discord bot with various features',
      fields: [
        { name: 'Version', value: '1.0.7', inline: true },
        { name: 'Developer', value: 'a00xlmine-arch', inline: true }
      ]
    };
    message.channel.send({ embed });
  }
};

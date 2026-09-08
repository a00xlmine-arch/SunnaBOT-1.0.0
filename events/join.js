// Member join event handler
module.exports = {
  name: 'guildMemberAdd',
  execute(member) {
    console.log(`📝 ${member.user.tag} joined the server`);
  }
};

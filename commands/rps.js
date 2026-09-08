// Rock-Paper-Scissors game command
const choices = ['rock', 'paper', 'scissors'];

module.exports = {
  name: 'rps',
  description: 'Play rock-paper-scissors',
  execute(message, args) {
    if (!args[0]) return message.reply('Please choose: rock, paper, or scissors');
    
    const userChoice = args[0].toLowerCase();
    if (!choices.includes(userChoice)) return message.reply('Invalid choice!');
    
    const botChoice = choices[Math.floor(Math.random() * choices.length)];
    
    let result;
    if (userChoice === botChoice) {
      result = 'It\'s a tie!';
    } else if (
      (userChoice === 'rock' && botChoice === 'scissors') ||
      (userChoice === 'paper' && botChoice === 'rock') ||
      (userChoice === 'scissors' && botChoice === 'paper')
    ) {
      result = 'You win!';
    } else {
      result = 'You lose!';
    }
    
    message.reply(`You chose ${userChoice}, I chose ${botChoice}. ${result}`);
  }
};

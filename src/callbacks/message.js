import { greenLog } from '../utils';

export default function(message) {
  // check if Bot user
  if (message.author.equals(Bot.user)) return;

  var prefix =
    file.prefix[message.guild.id] == undefined
      ? file.prefix['default']
      : file.prefix[message.guild.id];

  // check if starts with prefix
  if (!message.content.startsWith(prefix)) return;

  var args = message.content.substring(prefix.length).split(' ');

  switch (args[0].toLowerCase()) {
    case 'ping':
      greenLog(`${message.author.username} Used The Command ${prefix} ping`);
      message.channel.send(message.author.toString() + ' ' + 'Pong!');
      break;
    default:
      return;
  }
}

import { greenLog } from '../utils';
import en from '../../en.json';

let welcome = member => `${member.toString()} ${en['Bot.callbacks.memberAdd.welcome']}`;
let roleAdded = ({ author: { username } }) =>
  greenLog(`${username} ${en['Bot.callbacks.memberAdd.memberRole']}`);

function findMemeber(member) {
  member.addRole(member.guild.roles.find('name', 'Members')).then(() => roleAdded(message));
}

export default function(member) {
  member.guild.channels.find('name', 'general').send(welcome(member));
  findMemeber(member);
}

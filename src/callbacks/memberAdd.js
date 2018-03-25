import { greenLog } from '../utils';
import en from '../../en.json';

let welcome = member => `${member.toString()} ${en['Bot.callbacks.memberAdd.welcome']}`;
let roleAdded = ({ author: { username } }) =>
  greenLog(`${username} ${en['Bot.callbacks.memberAdd.memberRole']}`);

let addRole = member =>
  member.addRole(member.guild.roles.find('name', 'Members')).then(() => roleAdded(message));
let sendWelcome = member => member.guild.channels.find('name', 'general').send(welcome(member));

export default function(member) {
  sendWelcome(member);
  addRole(member);
}

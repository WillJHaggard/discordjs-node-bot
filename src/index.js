// event classes
import ready from './callbacks/ready';
import memberAdd from './callbacks/memberAdd';
// utilities
import { greenLog } from './utils';
// settings and configs
//import embedColors from './embedColors';
import * as settings from './settings';
// RichEmbeds
import { cross, rules } from './richEmbeds';

// discordjs bot TOKEN
import { token } from '../auth.json';

// Bots
import Bot from './bot';

// Servers
import servers from './servers';

Bot.on('ready', ready);
Bot.on('guildMemberAdd', memberAdd);

Bot.login(token);

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

Bot.on('ready', () => {
  greenLog('----------------------------------------');
  greenLog('                BOT PAGE                ');
  greenLog('             BOT NOW ACTIVE             ');
  greenLog('----------------------------------------');
});

Bot.login(token);

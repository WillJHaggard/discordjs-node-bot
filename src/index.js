// utilities
import { log } from './utils';
// settings and configs
//import embedColors from './embedColors';
import * as settings from './settings';
// RichEmbeds
import { cross, rules } from './richEmbeds';

// discordjs bot TOKEN
import { token } from '../auth.json';

log(settings.configExample, token);

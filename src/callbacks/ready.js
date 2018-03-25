import { greenLog } from '../utils';
import en from '../../en.json';

export default e => en['Bot.callbacks.ready'].map(text => greenLog(text));

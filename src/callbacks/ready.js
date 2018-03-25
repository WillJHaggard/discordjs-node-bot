import { greenLog, redLog } from '../utils';
import en from '../../en.json';

export default () => {
  return !Array.isArray(en['Bot.callbacks.ready'])
    ? redLog('Bot.callbacks.ready must be an array')
    : en['Bot.callbacks.ready'].map(text => greenLog(text));
};

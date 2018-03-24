import { green, red } from 'chalk';

export const ncLog = (...args) => console.log(...args);
export const greenLog = (...args) => console.log(...args.map(arg => green(arg)));
export const redLog = (...args) => console.log(...args.map(arg => red(arg)));

type Message = {
  success: string;
  error: string;
  warning: string;
  info: string;
};
type Color = keyof Message;
// generate color console
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  underscore: '\x1b[4m',
  blink: '\x1b[5m',
  reverse: '\x1b[7m',
  hidden: '\x1b[8m',

  black: '\x1b[30m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  orange: '\x1b[38;5;208m',

  bgBlack: '\x1b[40m',
  bgRed: '\x1b[41m',
  bgGreen: '\x1b[42m',
  bgYellow: '\x1b[43m',
  bgBlue: '\x1b[44m',
  bgMagenta: '\x1b[45m',
  bgCyan: '\x1b[46m',
  bgWhite: '\x1b[47m',
  bgOrange: '\x1b[48;5;208m',
};

// make a color full console function it have warn error and log
// for more info https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color
// Generate color console
const color = {
  success: colors.green,
  error: colors.red,
  warning: colors.yellow,
  info: colors.blue,
};

// Generate color function with icon
export const logger = (type: Color, icon: string) => {
  return (message: string) => {
    console.log(color[type], icon, message, colors.reset);
  };
};

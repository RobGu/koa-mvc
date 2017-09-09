import colors from 'colors';

colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'red',
  info: 'green',
  data: 'blue',
  help: 'cyan',
  warn: 'yellow',
  debug: 'magenta',
  error: 'red'
});

export default class {
  static i = (message) => {
    console.log(('[koa-controller][info] ' + message).info)
  }

  static d = (message) => {
    console.log(('[koa-controller][debug] ' + message).debug)
  }

  static w = (message) => {
    console.log(('[koa-controller][warn] ' + message).warn)
  }

  static e = (message) => {
    console.log(('[koa-controller][error] ' + message).error)
  }
}
//const log = require('./logger');

const emoji = require('node-emoji');
const chalk = require('chalk');
const dateTime = require('date-time');


var log = function({name, mode, status, value, clear, showTime}){

  //definition of styles to apply
  const s = {
    regular: chalk.dim.white,
    error: chalk.bold.red,
    warning: chalk.keyword('orange'),
    success: chalk.keyword('green').bold,
    info: chalk.keyword('blue').bold,
    devMode: chalk.cyan,
    prodMode: chalk.magenta,
    time: chalk.grey
  }

  //definition of emoji to display
  const e = {
    success: emoji.get('heavy_check_mark'),
    error: emoji.get('x'),
    info: emoji.get('grey_exclamation'),
    warning: emoji.get('warning'),
    waiting: emoji.get('hourglass')
  }

  var emojiToDisplay = e.warning;
  var globalStyle = s.regular;
  var modeStyle = s.regular;
  var timeStyle = s.time;

  switch(status){
    case 'ok':
      globalStyle = s.success
      emojiToDisplay = e.success
      break
    case 'warn':
      globalStyle = s.warning
      emojiToDisplay = e.warning
      break
    case 'err':
      globalStyle = s.error
      emojiToDisplay = e.error
      break
    case 'reg':
      globalStyle = s.regular
      emojiToDisplay = e.success
      break
    case 'wait':
      globalStyle = s.regular
      emojiToDisplay = e.waiting
      break
    case 'info':
      globalStyle = s.regular
      emojiToDisplay = e.waiting
      break
    default:
      globalStyle = s.info
      emojiToDisplay = e.info
    break
  }

  switch (mode){
    case 'dev':
      modeStyle = s.devMode
      break
    case 'prod':
      modeStyle = s.prodMode
      break
  }


  !mode ? mode = "" : mode = `[${mode}]`
  !name ? name = "" : name = `[${name}]`
  !value ? value = "" : value = `${value}`
  if(clear){ console.clear() }
  var time = ""
  if (process.env.loggerTime || showTime){
    time = dateTime({showMilliseconds: true})
  }

  console.log(
    timeStyle(time),
    emojiToDisplay,
    globalStyle(name),
    modeStyle(mode),
    globalStyle(value)
  )

};
module.exports = log

import emoji from 'node-emoji'
import chalk from 'chalk'
import dateTime from 'date-time'


const log = ({name, mode, status, value}) => {

  const regular = chalk.dim.white;
  const error = chalk.bold.red;
  const warning = chalk.keyword('orange');
  const success = chalk.keyword('green').bold
  const successEmoji = emoji.get('heavy_check_mark')
  const errorEmoji = emoji.get('x')
  const warningEmoji = emoji.get('zap')
  const waitingEmoji = emoji.get('hourglass')

  let style = warning
  let modestyle = warning
  let emojiToDisplay = warningEmoji

  switch (status){
    case 'ok':
      style = success
      emojiToDisplay = successEmoji
      break
    case 'warn':
      style = warning
      emojiToDisplay = warningEmoji
      break
    case 'err':
      style = error
      emojiToDisplay = errorEmoji
      break
    case 'reg':
      style = regular
      emojiToDisplay = successEmoji
      break
    case 'wait':
      style = regular
      emojiToDisplay = waitingEmoji
      break
    default:
      style = error
      emojiToDisplay = errorEmoji
      break
  }
  switch (mode){
    case 'dev':
      modestyle = chalk.cyan
      break
    case 'prod':
      modestyle = chalk.magenta
      break
  }

  !mode ? mode = "" : mode = `[${mode}]`
  !name ? name = "" : name = `[${name}]`
  !value ? value = "" : value = `${value}`

  console.log(`${dateTime({showMilliseconds: true})} - ${emojiToDisplay}${style(name)}${modestyle(mode)} ${style(value)}`)
}

export default log

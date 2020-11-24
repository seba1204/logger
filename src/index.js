import emoji from 'node-emoji'
import chalk from 'chalk'
import moment from 'moment'

const showTime = false
const setTime = 'HH:mm:ss'
const clearOnce = true
const clear = false

export const settings = {
  showTime,
  setTime,
  clearOnce,
  clear,
}

export default ({
  name, mode, status, value, clear, showTime
}) => {
  // definition of styles to apply
  const s = {
    regular: chalk.dim.white,
    error: chalk.bold.red,
    warning: chalk.keyword('orange'),
    success: chalk.greenBright.bold,
    info: chalk.cyan.bold,
    devMode: chalk.cyan,
    prodMode: chalk.magenta,
    time: chalk.grey,
  }

  // definition of emoji to display
  const e = {
    success: emoji.get('heavy_check_mark'),
    error: emoji.get('x'),
    info: emoji.get('grey_exclamation'),
    warning: emoji.get('warning'),
    waiting: emoji.get('hourglass'),
  }

  let emojiToDisplay = e.warning
  let globalStyle = s.regular
  let modeStyle = s.regular
  const timeStyle = s.time

  switch (status) {
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
      globalStyle = s.info
      emojiToDisplay = e.info
      break
    default:
      globalStyle = s.error
      emojiToDisplay = e.error
      break
  }

  switch (mode) {
    case 'dev':
      modeStyle = s.devMode
      break
    case 'prod':
      modeStyle = s.prodMode
      break
  }

  !mode ? (mode = '') : (mode = `[${mode}] `)
  !name ? (name = '') : (name = `[${name}] `)
  !value ? (value = '') : (value = value)
  if (clear || settings.clear || settings.clearOnce) {
    console.clear()
  }
  if (settings.clearOnce) settings.clearOnce = false
  let time = ''
  if (showTime || settings.showTime) {
    time = `${moment().format(settings.setTime)} `
  }

  console.log(`${timeStyle(time)}${emojiToDisplay} ${globalStyle(name)}${modeStyle(mode)}${globalStyle(value)}`)
}

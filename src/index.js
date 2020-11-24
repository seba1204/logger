import emoji from "node-emoji";
import chalk from "chalk";
import moment from "moment";

let showTime = false
let setTime = 'HH mm ss'
let clearOnce = true
let clear = false

export default ({ name, mode, status, value, clear, showTime }) => {
  // definition of styles to apply
  const s = {
    regular: chalk.dim.white,
    error: chalk.bold.red,
    warning: chalk.keyword("orange"),
    success: chalk.keyword("green").bold,
    info: chalk.keyword("blue").bold,
    devMode: chalk.cyan,
    prodMode: chalk.magenta,
    time: chalk.grey,
  }

  // definition of emoji to display
  const e = {
    success: emoji.get("heavy_check_mark"),
    error: emoji.get("x"),
    info: emoji.get("grey_exclamation"),
    warning: emoji.get("warning"),
    waiting: emoji.get("hourglass"),
  }

  let emojiToDisplay = e.warning;
  let globalStyle = s.regular;
  let modeStyle = s.regular;
  const timeStyle = s.time;

  switch (status) {
    case "ok":
      globalStyle = s.success;
      emojiToDisplay = e.success;
      break;
    case "warn":
      globalStyle = s.warning;
      emojiToDisplay = e.warning;
      break;
    case "err":
      globalStyle = s.error;
      emojiToDisplay = e.error;
      break;
    case "reg":
      globalStyle = s.regular;
      emojiToDisplay = e.success;
      break;
    case "wait":
      globalStyle = s.regular;
      emojiToDisplay = e.waiting;
      break;
    case "info":
      globalStyle = s.info;
      emojiToDisplay = e.info;
      break;
    default:
      globalStyle = s.error;
      emojiToDisplay = e.error;
      break;
  }

  switch (mode) {
    case "dev":
      modeStyle = s.devMode;
      break;
    case "prod":
      modeStyle = s.prodMode;
      break;
  }

  !mode ? (mode = "") : (mode = `[${mode}]`);
  !name ? (name = "") : (name = `[${name}]`);
  !value ? (value = "") : (value = value);
  if (clear) {
    console.clear();
  }
  let time = "";
  if (process.env.loggerTime || showTime) {
    time = dateTime({ showMilliseconds: true });
  }

  console.log(
    timeStyle(time).concat(
      emojiToDisplay,
      globalStyle(name),
      modeStyle(mode),
      globalStyle(value)
    )
  )
}

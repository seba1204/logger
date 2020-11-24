import log, {settings as setLog} from './index'

// Show time on every log
setLog.showTime = true

// clear console on the first log
setLog.clearOnce = true

// Display milliseconds
setLog.setTime = 'HH:mm:ss:SS'

// Log something
log({name: 'Server', value: 'yes', status: 'ok'})
log({name: 'Server', value: 'yes', status: 'info'})
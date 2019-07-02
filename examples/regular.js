const log = require('../index');

process.env.loggerTime = true

log({
  name: 'Express',
  status: 'reg',
  value: 'is connected on port 3000 !',
  mode: 'dev',
  clear: true
  })

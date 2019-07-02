const log = require('../index');


log({
  name: 'MongoDB',
  status: 'reg',
  value: 'is running',
  clear:true
  })

log({
  name: 'MongoDB',
  status: 'wait',
  value: 'is connecting...'
  })

log({
  name: 'MongoDB',
  status: 'ok',
  value: 'connected !'
  })

log({
  name: 'MongoDB',
  status: 'warn',
  value: 'seems to be bad...'
  })

log({
  name: 'MongoDB',
  status: 'err',
  value: 'had an issue'
  })

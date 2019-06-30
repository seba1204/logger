# logger
a personal console logger for my node.js apis

# Install
`$ npm install logger`
ou :
`$ npm i -S logger`

# Usage
`const log = require('logger');
log({
  name: 'Express',
  status: 'reg',
  value: 'is connected on port 3000 !',
  mode: 'dev'
  })`

4 parameters are expected :
* name : name of application who is talking
* status :
    - reg : regular
    - ok : success
    - warn : warning
    - err : error
    - wait : waiting
* value : message to log
* mode :
    - dev : development
    - prod : production

a NOD_ENV Boolean variable is required : `loggerTime` (default : true) : enable or disable the logging date time

# logger
a personal console logger for my node.js apis

# Install
```console
$ npm install my-own-logger
```
ou :

```console
$ npm i -S my-own-logger
```

# Usage
```js
const log = require('logger');
log({
  name: 'Express',
  status: 'reg',
  value: 'is connected on port 3000 !',
  mode: 'dev'
  })  
```
6 parameters are expected :
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
* showTime : show dateTime
* clear : clear console before logging

a **NOD_ENV** Boolean variable can be used instead of clear parameter : `loggerTime` (default : false) : enable or disable the logging date time

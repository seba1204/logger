# logger

A personal console logger for my node.js APIs.

## Install

```console
npm install my-own-logger
```

ou :

```console
npm i -S my-own-logger
```

## Usage

```js
const log = require('my-own-logger');
log({
  name: 'Express',
  status: 'reg',
  value: 'is connected on port 3000 !',
  mode: 'dev'
  });
```

### Parameters

- ``name``: name of the application which is talking
- ``status``:

|  status | description |  icon |
|:-------:|:-----------:|:-----:|
|``reg`` | regular | ✔️|
|``ok`` | success | ✔️|
|``warn`` | warning | ⚠️|
|``err`` | error | ❌|
|``wait`` | waiting | ⌛|
|``info`` | info | ❕|

- ``value``: message to log
- ``mode``:
  - ``dev``: development
  - ``prod``: production
- ``showTime``: show dateTime
- ``clear``: clear console before logging

## Global settings

You can setup some global settings that will be saved as long as yout node.js server live, so it will be applied to all your lgos.
You have to execture this commands before any logging.

|   parameter  |   type  | default value |          description         |   possible values   |
|:------------:|:-------:|:-------------:|:----------------------------:|:-------------------:|
| showTime | boolean | ``false``         | log the date time before all | ``true``, ``false`` |
| setTime | string | ``'HH mm ss'``        | set the format of the time | all kind of format that [moment.js](https://momentjs.com/docs/#/parsing/) accepts ([ISO 8601](https://en.wikipedia.org/wiki/ISO_8601))|
| clearOnce | boolean | ``false``         | clear console on the first log | ``true``, ``false`` |
| clear | boolean | ``false``         | clear console on every log | ``true``, ``false`` |

For example (in es6), if your main file is ``index.js``:

```js
// index.js
import log from 'my-own-logger'

// Show time on every log
log.showTime = true

// clear console on the first log
log.clearOnce = true

// Display milliseconds
log.setTime = 'HH mm ss SS'
```

## Example

```js
const log = require('my-own-logger');
log({
  name: 'Express',
  status: 'ok',
  value: 'is connected on port 3000!',
  })  
```

output:

```console
✔️ [Express] is connected on port 3000!
```

## Todo

- [ ] Trigger Time : Set a trigger time (for example minute), to show time only if the last log was displayed more than a minute ago

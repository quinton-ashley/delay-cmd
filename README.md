# delay-cmd

Delay your commands on the command line using human intervals.

### CLI Installation

```javascript
npm i delay-cmd -g
```

### CLI Usage

```javascript
delay-cmd five seconds
```

Put the command you want to delay after the `&&`.

```javascript
cd /c/path/to/yourProject
delay-cmd two hours && npm start
```

### node.js Usage

Must be used in an async function.

```javascript
const delayCmd = require('delay-cmd');
await delayCmd('five seconds');
```

I made `delay-cmd` as a CLI.  For node.js use I recommend implementing this:

```javascript
//setup
const delay = require('delay');
const humanInterval = require('human-interval');

async function delayCmd(time) {
  console.log('waiting for' + time);
  await delay(humanInterval(time));
}

//usage
await delayCmd('five seconds');
```

### Please consider donating!

If you appreciate this project and the work I've done so far please donate!  Any amount is accepted.  Thank you :)
 
Patreon: <https://www.patreon.com/qashto>  
Paypal: <https://www.paypal.me/qashto/5>

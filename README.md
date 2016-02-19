# simple-signal

## Example Usage

```javascript
import Signal from 'simple-signal';

const signal = new Signal();

const handler = v => console.log(v);

signal.on(handler);

// Will log 'Simple!'
signal.emit('Simple!');

signal.off(handler);

signal.emit('This will not be logged!');

```

That is literally it.

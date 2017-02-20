# path-to-params

## Installation

```bash
$ npm install --save path-to-params
```

## Example

```js
var path2params = require('path-to-params');
var parse = path2params('/:a+/:b+');
var params = parse('/hello/world');
console.log(params);

// Output:
// { a: 'hello', b: 'world' }
```

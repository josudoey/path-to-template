# path-to-template

## Installation

```bash
$ npm install --save path-to-template
```

## Example

```js
var pathT = require('path-to-template');
var tpl = pathT('/:a+/:b+');
var params = tpl.parse('/hello/world');
console.log(params);
var path = tpl.expand(params);
console.log(path);

// Output:
// { a: 'hello', b: 'world' }
// /hello/world
```

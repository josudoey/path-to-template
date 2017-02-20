/* eslint-env node, mocha */

var assert = require('assert');
var path2params = require('../');

describe('base function', function () {
  var parse = path2params('/:a+/:b+');
  it('match', function () {
    var params = parse('/hello/world');
    assert.ok(params);
    assert.deepEqual(params, {
      a: 'hello',
      b: 'world'
    });
  });

  it('not match', function () {
    var params = parse('/hello');
    assert.equal(params, null);
  });

  it('fill', function () {
    var ctx = {};
    parse('/hello/world', ctx);
    assert.deepEqual(ctx, {
      a: 'hello',
      b: 'world'
    });
  });

  it('decode', function () {
    var params = parse('/hello%20/%20world', null, {
      decode: function (text) {
        try {
          return decodeURIComponent(text);
        } catch (e) {
          return text;
        }
      }
    });
    assert.deepEqual(params, {
      a: 'hello ',
      b: ' world'
    });
  });

});


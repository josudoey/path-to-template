/* eslint-env node, mocha */

var assert = require('assert');
var pathT = require('../');

describe('template', function () {
  var tpl = pathT('/:a+/:b+');
  var parse = tpl.parse;
  var expand = tpl.expand;
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

  it('expand', function () {
    var path = expand({
      a: 'hello',
      b: 'world'
    });
    assert.equal(path, '/hello/world');
  });

});


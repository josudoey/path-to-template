var path2rex = require('path-to-regexp');

module.exports = function (rePath, reOpts) {
  var keys = [];
  var re = path2rex(rePath, keys, reOpts);
  return function (path, existingParams, opts) {
    var m = re.exec(path);
    if (!m) {
      return null;
    }
    var params = existingParams || {};
    var args = m.slice(1);
    opts = opts || {};
    var decode = opts.decode;
    if (!decode) {
      keys.forEach(function (key) {
        var c = args.shift();
        params[key.name] = c;
      });
      return params;
    }

    keys.forEach(function (key) {
      var c = args.shift();
      params[key.name] = decode(c);
    });
    return params;

  };
};


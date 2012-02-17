
jQuery.fn.countdown = function(target, options, callback) {
  var default_options, format, padding, start;
  default_options = {};
  options = $.extend({}, default_options, options);
  padding = function(value, length, str) {
    var fill, full, n;
    if (length == null) length = 2;
    if (str == null) str = '0';
    fill = ((function() {
      var _results;
      _results = [];
      for (n = 0; 0 <= length ? n <= length : n >= length; 0 <= length ? n++ : n--) {
        _results.push(str);
      }
      return _results;
    })()).join('');
    full = "" + fill + value;
    return full.substr(full.length - length, length);
  };
  format = function(now, target) {
    var dd, dh, dm, ds, hour;
    dd = Math.floor((target - now) / (24 * 60 * 60 * 1000)) * 24;
    dh = Math.floor(((target - now) % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    dm = padding(Math.floor(((target - now) % (24 * 60 * 60 * 1000)) / (60 * 1000)) % 60);
    ds = padding(Math.floor(((target - now) % (24 * 60 * 60 * 1000)) / 1000) % 60 % 60);
    hour = padding(dh + dd);
    return "" + hour + ":" + dm + ":" + ds;
  };
  start = function(el, target, options, callback) {
    var interval, once, that;
    that = $(el);
    once = false;
    that.html(format(new Date(), target));
    interval = function(ms, func) {
      return setInterval(func, ms);
    };
    interval(300, function() {
      var now;
      now = new Date();
      if (target > now) {
        return that.html(format(now, target));
      } else {
        if ((callback != null) && once === false) {
          callback();
          return once = true;
        }
      }
    });
    return null;
  };
  this.each(function() {
    start(this, target, options, callback);
    return null;
  });
  return this;
};

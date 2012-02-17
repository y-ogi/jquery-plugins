
jQuery.fn.countdown = function(target, options) {
  var default_options, padding, start_countdown;
  default_options = {
    done_func: null
  };
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
  start_countdown = function(el, target, options) {
    var interval, once, that;
    that = $(el);
    once = false;
    interval = function(ms, func) {
      return setInterval(func, ms);
    };
    interval(300, function() {
      var dd, dh, dm, ds, min, now;
      now = new Date();
      dd = padding(Math.floor((target - now) / (24 * 60 * 60 * 1000)) * 24);
      dh = padding(Math.floor(((target - now) % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)));
      dm = padding(Math.floor(((target - now) % (24 * 60 * 60 * 1000)) / (60 * 1000)) % 60);
      ds = padding(Math.floor(((target - now) % (24 * 60 * 60 * 1000)) / 1000) % 60 % 60);
      min = dh + dd;
      if (target > now) {
        return that.html("" + dd + ":" + dm + ":" + ds);
      } else {
        if ((options.done_func != null) && once === false) {
          options.done_func();
          return once = true;
        }
      }
    });
    return null;
  };
  this.each(function() {
    var that;
    that = $(this);
    start_countdown(this, target, options);
    return null;
  });
  return this;
};

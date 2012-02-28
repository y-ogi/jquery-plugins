
jQuery.fn.wizard = function(options) {
  var default_options, nextstep;
  default_options = {
    fadeout_speed: 'fast',
    fadein_speed: 'fast',
    callbacks: {}
  };
  options = $.extend({}, default_options, options);
  nextstep = function(e) {
    var key, next, that;
    that = $(this);
    next = that.attr('href');
    key = next.replace('#', '');
    if (options.callbacks[key] != null) options.callbacks[key]();
    return that.parents('.wizard').fadeOut(options.fadeout_speed, function() {
      return $(next).fadeIn(options.fadein_speed);
    });
  };
  this.each(function() {
    var that;
    that = $(this);
    that.click(nextstep);
    return null;
  });
  return this;
};

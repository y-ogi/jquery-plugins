
jQuery.fn.btclick = function(callback, options) {
  var default_options;
  default_options = {
    disabled_class: 'disabled'
  };
  options = $.extend({}, default_options, options);
  $.fn.enable = function() {
    var that;
    that = $(this);
    that.removeClass(options.disabled_class);
    return that.removeAttr('disabled');
  };
  $.fn.disable = function(interval) {
    var delay, that;
    that = $(this);
    that.addClass(options.disabled_class);
    that.attr('disabled', 'disabled');
    if (interval != null) {
      delay = function(ms, func) {
        return setTimeout(func, ms);
      };
      delay(interval, function() {
        return that.enable();
      });
    }
    return null;
  };
  $.fn.disabled = function() {
    return $(this).hasClass(options.disabled_class);
  };
  this.each(function() {
    var that;
    that = $(this);
    that.click(callback);
    return null;
  });
  return this;
};

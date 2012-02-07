
jQuery.fn.fillin = function(options) {
  var change_color, default_options, on_blur, on_focus;
  default_options = {
    border_color: 'red',
    background_color: 'red'
  };
  options = $.extend({}, default_options, options);
  change_color = function(el) {
    var that;
    that = $(el);
    if (that.val().length === 0) {
      that.css('border-color', options.border_color);
      that.css('background-color', options.background_color);
    }
    return null;
  };
  on_focus = function() {
    var that;
    that = $(this);
    that.css('border-color', '');
    that.css('background-color', '');
  };
  on_blur = function() {
    change_color(this);
    return null;
  };
  this.each(function() {
    var that;
    that = $(this);
    that.focus(on_focus);
    that.blur(on_blur);
    change_color(this);
    return null;
  });
  return this;
};

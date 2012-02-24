# jQuery btclick plugin
#
# Author: Yuta OGIHARA
#
jQuery.fn.btclick= (callback, options) ->

    default_options =
        disabled_class: 'disabled',

    # options
    options = $.extend {}, default_options, options

    $.fn.enable = ->
        that = $(@)
        that.removeClass options.disabled_class
        that.removeAttr 'disabled'

    $.fn.disable = (interval, callback) ->
        that = $(@)
        that.addClass options.disabled_class
        that.attr 'disabled', 'disabled'

        # interval 
        if interval?
            delay = (ms, func) -> setTimeout func, ms
            delay interval, -> 
                that.enable()
                if callback?
                    callback()
        null

    $.fn.disabled = ->
        $(@).hasClass options.disabled_class

    @.each(() ->
        that = $(@)
        that.click callback

        null
    )
    this

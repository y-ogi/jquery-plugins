# jQuery btclick plugin
#
# Author: Yuta OGIHARA
#
jQuery.fn.wizard = (options) ->

    default_options =
        fadeout_speed: 'fast',
        fadein_speed: 'fast',
        callbacks: {},

    # options
    options = $.extend {}, default_options, options

    nextstep = (e) ->
        that = $(@)
        next = that.attr 'href'

        key = next.replace('#', '')
        if options.callbacks[key]?
            options.callbacks[key]()

        that.parents('.wizard').fadeOut options.fadeout_speed, () ->
            $(next).fadeIn options.fadein_speed
        

    @.each(() ->
        that = $(@)
        that.click nextstep
        null
    )
    this

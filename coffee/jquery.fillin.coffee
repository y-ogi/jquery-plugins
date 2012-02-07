# jQuery fillin plugin
#
# Author: Yuta OGIHARA
#
jQuery.fn.fillin = (options) ->
    default_options =
        border_color: 'red',
        background_color: 'red'

    # options
    options = $.extend {}, default_options, options

    # change color
    change_color = (el)->
        that = $(el)
        if that.val().length is 0
            that.css 'border-color', options.border_color
            that.css 'background-color', options.background_color
        null


    # events
    on_focus = ->
        that = $(@)
        that.css 'border-color', ''
        that.css 'background-color', ''
        return

    on_blur = ->
        change_color @
        null



    @.each(() ->
        that = $(@)

        that.focus on_focus
        that.blur on_blur

        change_color @
        null
    )
    this

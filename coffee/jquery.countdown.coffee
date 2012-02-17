# jQuery countdown plugin
#
# Author: Yuta OGIHARA
#
jQuery.fn.countdown = (target, options, callback) ->

    default_options = {}

    # options
    options = $.extend {}, default_options, options

    padding = (value, length=2, str='0') ->
        fill = (str for n in [0..length]).join('')
        full = "#{fill}#{value}"

        full.substr full.length - length, length

    format = (now, target) ->
        dd = Math.floor((target - now) / (24 * 60 * 60 * 1000)) * 24
        dh = Math.floor(((target - now) % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000))
        dm = padding Math.floor(((target - now) % (24 * 60 * 60 * 1000)) / (60 * 1000)) % 60
        ds = padding Math.floor(((target - now) % (24 * 60 * 60 * 1000)) / 1000) % 60 % 60
        hour = padding dh + dd
        "#{hour}:#{dm}:#{ds}"


    start = (el, target, options, callback) ->

        # init args
        that = $(el)
        once = false

        # display
        that.html(format new Date(), target)

        # interval
        interval = (ms, func) -> setInterval func, ms
        interval 300, ->
            now = new Date()
            if target > now
                that.html(format now, target)
            else
                if callback? and once is false
                    callback()
                    once = true

        null

    @.each(() ->
        start @, target, options, callback
        null
    )
    this


# var dd = new Date.W3CDTF();
# dd.setW3CDTF($('#next_lesson_time').val());
# $('.countdown').countdown({
# 	target: dd,
# 	message: '授業中です'
# });

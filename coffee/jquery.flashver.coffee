# jQuery get flash version plugin
#
# Author: Yuta OGIHARA
#
jQuery.fn.flashver = () ->
    ver = 0
    if navigator.plugins? and navigator.mimeTypes['application/x-shockwave-flash']
        plugin = navigator.mimeTypes['application/x-shockwave-flash'].enabledPlugin
        if plugin?
            ver = parseInt plugin.description.match(/\d+\.\d+/);
    else
        try
            ocx = ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").match(/([0-9]+)/)
            if ocx?
                ver = parseInt ocx[0]
        catch error

        ver = 0 if ver <= 6

    try
        player_ver = swfobject.getFlashPlayerVersion()
        ver = "#{player_ver.major}.#{player_ver.minor}.#{player_ver.release}"
    catch error

    ver


jQuery.fn.flashver = function() {
  var ocx, player_ver, plugin, ver;
  ver = 0;
  if ((navigator.plugins != null) && navigator.mimeTypes['application/x-shockwave-flash']) {
    plugin = navigator.mimeTypes['application/x-shockwave-flash'].enabledPlugin;
    if (plugin != null) ver = parseInt(plugin.description.match(/\d+\.\d+/));
  } else {
    try {
      ocx = ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").match(/([0-9]+)/);
      if (ocx != null) ver = parseInt(ocx[0]);
    } catch (error) {

    }
    if (ver <= 6) ver = 0;
  }
  try {
    player_ver = swfobject.getFlashPlayerVersion();
    ver = "" + player_ver.major + "." + player_ver.minor + "." + player_ver.release;
  } catch (error) {

  }
  return ver;
};

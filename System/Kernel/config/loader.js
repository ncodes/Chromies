/**
 * Created by JetBrains PhpStorm.
 * User: kennedy
 * Date: 4/11/12
 * Time: 8:18 AM
 *
 * Loads all required files
 */

/* The files to load */
var _Files =
{
    /* High priority */
    highPriority:
    [
        "lib/jquery.1.7.2.min.js",
        "config/properties.js",
        "config/prerequisites.js",
        "lib/base.js",
        "base/framework/os/storage/iDB.js",
        "base/framework/os/storage/localstorage.js",
        "base/framework/os/window/winManager.js",
        "base/framework/os/objects.js",
        "base/boot/boot.js"
    ],

    /* Low priority */
    lowPriority:  [""]
}


/* Load the high priority files */
require(  _Files.highPriority , function()
{

    /* Load the low priority files */
    setTimeout(function(){  require(_Files.lowPriority); }, 100);


});


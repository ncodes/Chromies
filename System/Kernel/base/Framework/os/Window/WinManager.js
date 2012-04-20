/**
 * Created by JetBrains PhpStorm.
 * User: kennedy
 * Date: 4/11/12
 * Time: 1:46 PM
 *
 * Window Manager - The window manager handles windows
 */


var OSWindow = Base.extend(
{

    /**
     * Opens up a new OS window
     */
    open: function()
    {
        var self = this;






        chrome.windows.create(
        {
            "url": $Properties$.ROOT_DIR + "system/kernel/base/view/install/index.html",
            "focused": true,
            "type": "popup",
            "top": 0,
            "left": 0,
            "width": 1024,
            "height": 800
        },

        // Ask for permission to go full screen
        function()
        {
            self.requestFullScreen();
        });
    },


    /**
     * Request to go full screen
     */
    requestFullScreen: function()
    {
        
    }
    
});






/**
 * Created by JetBrains PhpStorm.
 * User: kennedy
 * Date: 4/11/12
 * Time: 8:24 AM
 *
 * BootManager
 */




var BootManager = Base.extend(
{

    constructor: function()
    {
        // Create window manager object
        this.winManager = new OSWindow();
    },


    /**
     * The boot function
     */
    boot: function()
    {
        /* If OS is not installed */
        if (!this.isInstalled())
        {
            /* Open OS in window */
            this.winManager.open();
        }
    },


    /**
     * Checks if OS is installed
     */
    isInstalled: function()
    {
        /* A local storage object with namespace support */
        var ls = new LocalStorage("$");
        
        /* Check for $Installed key */
        if (ls.get("Installed") == null){
            return false;
        }
        else{
            return true;
        }
    }

});


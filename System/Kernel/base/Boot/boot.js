/**
 * Created by JetBrains PhpStorm.
 * User: kennedy
 * Date: 4/10/12
 * Time: 11:33 PM
 *
 * The boot script
 */


require(["base/framework/os/BootManager.js"], function()
{
    /* Create boot manager */
    var bootMan = new BootManager();

    /* Boot the OS */
    bootMan.boot();
})


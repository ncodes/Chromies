/**
 * Created by JetBrains PhpStorm.
 * User: kennedy
 * Date: 4/11/12
 * Time: 4:13 PM
 * To change this template use File | Settings | File Templates.
 */


window.Installer = function(){};
var framework = chrome.extension.getBackgroundPage().stack;


(function(ins)
{
    var textBoxesMarkup = {
        "username": '<input type="text" id="username" class="span5" placeholder="Enter your username" style=" display: none;" />',
        "password": '<input type="password" id="password" class="span5" placeholder="Enter password"  style="display: none;" />'
    }

    var data = {}

    ins.install = function()
    {
        setTimeout(function()
        {
            // Add the text box
            $('#user_data').empty().html(textBoxesMarkup.username).find("#username").fadeIn(500);

            // Add events to text box
            ins.addEventToTextBox();

        }, 1500)
    };


    /**
     * todo Do validation and existence check
     */
    ins.addEventToTextBox = function()
    {
        var self = this;

        $('#username').keypress(function(e)
        {
            
            /* If enter was pressed */
            if (e.keyCode === 13)
            {
                // Get the current value
                data.username = $(this).val();

                // Show password field
                $('#user_data').empty().html(textBoxesMarkup.password).find("input").fadeIn(500).focus().keypress(function(e)
                {
                    if (e.keyCode == 13){
                        data.password = $(this).val();
                        self.saveUserData(data);
                    }
                });
            }
        })
    };


    ins.saveUserData = function(data)
    {
        framework.ls.set("username", data.username);
        frameElement.ls.set("password", data.password);
        return true;
    }

    
    ins.install();

})(Installer)

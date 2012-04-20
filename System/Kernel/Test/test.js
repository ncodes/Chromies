/**
 * Created by JetBrains PhpStorm.
 * User: kennedy
 * Date: 4/11/12
 * Time: 8:13 AM
 * To change this template use File | Settings | File Templates.
 */


var Person = Base.extend({

    constructor: function(name)
    {
        this.name = name;
    },

    getName: function(){
        return this.name;
    }

});


// Create a User class
var User = Person.extend({

    constructor: function(name, password){
        this.base(name);
        this.password = password;

        this.extend({
            'pShout': function(){ console.log("so cool"); }
        })

    },

    getParameter: function()
    {
        return this.pShout();
    }

}, { PA : 2 });

var u = new User("peter", "mav");
u.pShout()


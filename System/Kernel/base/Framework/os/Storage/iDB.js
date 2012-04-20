/**
 * Created by JetBrains PhpStorm.
 * User: kennedy
 * Date: 4/11/12
 * Time: 8:53 AM
 *
 * The Indexed Database Class
 */


var IDB = Base.extend(
{

    /**
     * The constructor
     */
    constructor: function()
    {
    },


    /**
     * Opens the database
     * @param callbacks The callbacks object
     */
    open: function(callbacks)
    {
        /* Open database */
        var request = indexedDB.open($Properties$.db_name);

        /* Success */
        request.onsuccess = function(e){

            /* Save a reference of the db object */
            this.db = e.target.result;

            /* Call success callback */
            if ("success" in callbacks){
                callbacks.success(this.db, e);
            }
        };

        /* Failure */
        if ("failure" in callbacks){
            request.onfailure = callbacks.failure();
        };
    },


    /**
     * Handles errors
     * @param e The error object
     */
    error: function(e)
    {
        console.log("Error: ", e)
    }
});

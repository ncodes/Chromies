/**
 * Created by JetBrains PhpStorm.
 * User: kennedy
 * Date: 4/11/12
 * Time: 12:34 PM
 *
 * Local Storage
 */

var LocalStorage = Base.extend(
{


    /**
     * The constructor
     * @param namespace
     */
    constructor: function(namespace)
    {
        /* Set the namespace */
        this.namespace = namespace;
    },




    /**
     * Get an item
     * @param key The item key
     */
    get: function(key)
    {
        return localStorage.getItem(this.namespace + key);
    },



    /**
     * Adds a new item
     * @param key The key
     * @param value The value
     */
    set: function(key, value)
    {
        localStorage.setItem(this.namespace + key, value);
    }

});

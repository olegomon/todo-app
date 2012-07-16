Ext.define('Todo.i18n.Bundle', {

    /**
     * @private
     */
    messages: null,

    /**
     *
     * @param key the key
     * @return {*} value for that key
     */
    getMsg: function(key) {
        if(key) {
            var message = this.messages[key];
            return (message ? message : null);
        }
        return null;
    }
});

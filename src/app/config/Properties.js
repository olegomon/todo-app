Ext.define('Todo.config.Properties', {

    alternateClassName: ['Services', 'Properties'],

//    singleton: true,

    properties: {

        /**
         * ToDoApp service endpoint
         */
        todoitems: '/api/todos'
    },

    constructor: function (config) {
        this.initConfig(config);
        return this;
    },

    /**
     * @private
     * @return {Object}
     */
    getProperties: function () {
        return this.properties;
    },

    getHost: function () {
        var host = config[config.mode].host;
        return host;
    },

    getTodoItemsUrl: function () {
        var properties = this.getProperties();
        var host = this.getHost();
        return host + properties.todoitems;
    }
});

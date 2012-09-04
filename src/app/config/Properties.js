Ext.define('Todo.config.Properties', {

    alternateClassName: ['Services', 'Properties'],

//    singleton: true,

    properties: {

        host: 'http://localhost:3000',

        /**
         * ToDoApp service endpoint
         */
        todolists: '/api/todolists',
        todoitems: '/api/todoitems'
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
        var properties = this.getProperties();
        var host = properties.host;
        return host;
    },

    getTodoListsUrl: function () {
        var properties = this.getProperties();
        var host = this.getHost();
        return host + properties.todolists;
    },

    getTodoItemsUrl: function () {
        var properties = this.getProperties();
        var host = this.getHost();
        return host + properties.todoitems;
    }
});

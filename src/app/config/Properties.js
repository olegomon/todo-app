Ext.define('Todo.config.Properties', {

    alternateClassName: ['Services', 'Properties'],

//    singleton: true,

    properties: {

        /**
         * Server URL
         */
        host: 'http://todows.woodly.c9.io',

        /**
         * ToDoApp service endpoint
         */
        todogroups: '/api/todogroups',
        todoitems: '/api/todoitems'
    },

    constructor: function (config) {
        this.initConfig(config);
        return this;
    },

    /**
     * @private
     * @return {*}
     */
    getProperties: function () {
        return this.properties;
    },

    getHost: function () {
        return this.getProperties().host;
    },

    getTodoGroupsUrl: function () {
        var properties = this.getProperties();
        return properties.host + properties.todogroups;
    },

    getTodoItemsUrl: function () {
        var properties = this.getProperties();
        return properties.host + properties.todoitems;
    }
});

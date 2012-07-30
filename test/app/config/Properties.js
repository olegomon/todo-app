Ext.define('Testing.config.Properties', {

    alternateClassName: ['Services', 'Properties'],

    properties: {

        /**
         * Server URL
         */
        host: '',

        /**
         * ToDoApp service endpoint
         */
        todolists: 'api/todolists',
        todoitems: 'api/todoitems'
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
        return this.getProperties().host;
    },

    getTodoListsUrl: function () {
        var properties = this.getProperties();
        return properties.host + properties.todolists;
    },

    getTodoItemsUrl: function () {
        var properties = this.getProperties();
        return properties.host + properties.todoitems;
    }
});

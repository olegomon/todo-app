Ext.define('Todo.config.Properties', {

    alternateClassName: ['Services', 'Properties'],

    singleton: true,

    properties: {

        /**
         * Server URL
         */
        host: 'http://todows.woodly.c9.io',

        /**
         * ToDo service endpoint
         */
        todos: '/api/todos'
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

    getTodosUrl: function () {
        var properties = this.getProperties();
        return properties.passwords;
    }
});

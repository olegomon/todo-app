Ext.define('Todo.proxy.TodoListProxy', {
    extend: 'Ext.data.proxy.Rest',

    alias: 'proxy.todolistproxy',

    mixins: [
        'Deft.mixin.Injectable'
    ],

    inject: {
        serviceProperties: 'properties'
    },

    config: {
        serviceProperties: null,
        reader: {
            type: 'json'
        }
    },

    constructor: function(config) {
        this.initConfig(config);
        this.setUrl(this.getServiceProperties().getTodoListsUrl());
        this.callParent(arguments);
        return this;
    }
});

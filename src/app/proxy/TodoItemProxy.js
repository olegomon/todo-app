Ext.define('Todo.proxy.TodoItemProxy', {
    extend: 'Ext.data.proxy.Rest',

    alias: 'proxy.todoitemproxy',

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
        this.setUrl(this.getServiceProperties().getTodoItemsUrl());
        this.callParent(arguments);
        return this;
    }
});

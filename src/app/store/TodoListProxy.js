Ext.define('Todo.store.TodoListProxy', {
    extend: 'Ext.data.proxy.Rest',

    mixins: [
        'Deft.mixin.Injectable'
    ],

    inject: {
        serviceProperties: 'properties'
    },

    config: {
        serviceProperties: null,
        type: 'rest',
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

Ext.define('Todo.proxy.TodoItemProxy', {
    extend: 'Ext.data.proxy.Rest',

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
//        this.setUrl(this.getServiceProperties().getTodoItemsUrl());
        this.setUrl('http://localhost:3000/api/todos');
        this.callParent(arguments);
        return this;
    }
});

Ext.define('Todo.proxy.TodoItemProxy', {
    extend: 'Ext.data.proxy.Rest',

    requires: [ 'Todo.config.Properties'],

    config: {
        type: 'rest',
        reader: {
            type: 'json'
//            rootProperty: 'data',
//            countProperty: 'count',
//            successProperty: 'success'
        }
    },

    constructor: function(config) {
        this.initConfig(config);
        this.setUrl(Properties.getTodoItemsUrl());
        this.callParent(arguments);
        return this;
    }
});

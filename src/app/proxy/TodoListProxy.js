Ext.define('Todo.proxy.TodoListProxy', {
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
        this.setUrl(Properties.getTodoListsUrl());
        this.callParent(arguments);
        return this;
    }
});

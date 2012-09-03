Ext.define('Todo.store.TodoItemStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Todo.model.TodoItemModel',
        'Todo.proxy.TodoItemProxy'
    ],

    config: {
        model: 'Todo.model.TodoItemModel',
        // TODO set TodoItemProxy instance as proxy
        // TODO set auto load true
        // TODO sort by name
        // see also web documentation
        emptyText: 'No items.'
    }
});


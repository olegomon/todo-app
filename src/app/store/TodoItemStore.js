Ext.define('Todo.store.TodoItemStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Todo.model.TodoItemModel',
        'Todo.proxy.TodoItemProxy'
    ],

    config: {
        model: 'Todo.model.TodoItemModel',
        proxy: Ext.create('Todo.proxy.TodoItemProxy'),
        sorters: 'name',
        emptyText: 'No items.'
    }
});


Ext.define('Todo.store.TodoItemStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Todo.model.TodoItemModel',
        'Todo.proxy.TodoItemProxy'
    ],

    config: {

        model: 'Todo.model.TodoItemModel',

        emptyText: 'No items.',

        sorters: 'name',

        proxy: {
            type: 'todolistproxy'
        }
    }
});


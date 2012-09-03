Ext.define('Todo.store.TodoItemStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Todo.model.TodoItemModel'
    ],

    config: {

        model: 'Todo.model.TodoItemModel',

        emptyText: 'No items.',

        sorters: 'name'

    }
});


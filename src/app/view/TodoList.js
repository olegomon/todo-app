Ext.define('Todo.view.TodoList', {
    extend: 'Ext.List',
    xtype : 'todolist',

    requires: [
        'Todo.store.TodoGroupStore'
    ],

    config: {
        title: 'My Todo Items',
        store: 'TodoItemStore',

        groupDir  : 'DESC',
        grouped: true,

        itemTpl: '{name}',

        emptyText: 'No Todo Items found.'
    }
});
Ext.define('Todo.view.TodoList', {
    extend: 'Ext.List',
    xtype : 'todolist',

    requires: [
        'Todo.store.TodoListStore'
    ],

    config: {
        title: 'My Todo Lists',
        store: 'TodoListStore',
        groupDir  : 'DESC',
        grouped: true,
        itemTpl: '{name}',
        emptyText: 'No ToDo Lists found.'
    }
});

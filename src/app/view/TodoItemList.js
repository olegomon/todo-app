Ext.define('Todo.view.TodoItemList', {
    extend: 'Ext.List',
    xtype : 'todoitemlist',

    requires: [
        'Todo.store.TodoItemStore'
    ],

    config: {
        title: 'My Todo Items',
        store: 'TodoItemStore',

        autoLoad: true,
        
        grouped: true,
        groupDir: 'ASC',

        itemTpl: '{name}',

        emptyText: 'No Todo Items found.'
    }
});
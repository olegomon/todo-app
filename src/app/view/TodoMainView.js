Ext.define('Todo.view.TodoMainView', {
    extend: 'Ext.navigation.View',
    xtype : 'todomain',

    requires: [
        'Todo.view.TodoItemListView',
        'Todo.view.TodoItemDetailView'
    ],

    config: {
        items: [
            {
                title: 'Todo',
                xtype: 'todoitemlist'
            }
        ]
    }

});

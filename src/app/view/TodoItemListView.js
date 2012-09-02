Ext.define('Todo.view.TodoItemListView', {
    extend: 'Ext.List',
    xtype : 'todoitemlist',

    config: {
        data: [
            {
                "name": "dummy entry"
            }
            // TODO paste data from 'todoitem.json'
        ],

        itemTpl: 'TODO implement me', // TODO implement, fields are referenced as follows: {fieldname}

        emptyText: 'No Todo Items found.'
    }
});
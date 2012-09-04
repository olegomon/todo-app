Ext.define('Todo.view.TodoItemListView', {
    extend: 'Ext.List',
    xtype : 'todoitemlist',

    requires: ['Ext.data.Store'],

    config: {
        data: [
            {
                "description": "My most important ToDo",
                "priority"   : 1,
                "status"     : "open",
                "name"       : "Save the world",
                "_id"        : "10"
            },
            {
                "description": "My second most important ToDo",
                "priority"   : 1,
                "status"     : "open",
                "name"       : "See the doctor",
                "_id"        : "30"
            },
            {
                "description": "One apple a day keeps the doctror away!",
                "priority"   : 3,
                "status"     : "done",
                "name"       : "Eat an apple",
                "_id"        : "20"
            }
        ],

        itemTpl: '{name}',

        emptyText: 'No Todo Items found.'
    }
});
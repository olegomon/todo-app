Ext.define('Todo.store.TodoItemStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Todo.model.TodoItemModel'
    ],

    config: {

        model: 'Todo.model.TodoItemModel',

        data: [
            {name: 'Remember the milk', status: 'done', priority: 0, description: 'get the f***ng milk please', duedate: new Date()},
            {name: 'Read the book', status: 'done', priority: 1, description: 'get the f***ng milk please', duedate: new Date()},
            {name: 'Heal the world', status: 'done', priority: 2, description: 'get the f***ng milk please', duedate: new Date()},
            {name: 'Become a president', status: 'done', priority: 3, description: 'get the f***ng milk please', duedate: new Date()}
        ],

        sorters: 'listname',

        grouper: {
            groupFn: function (record) {
                var name = record.get('name');
                return name ? name[0].toUpperCase() : '';
            }
        }
    }
});


Ext.define('Todo.store.TodoListStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Todo.model.TodoListModel'
    ],

    config: {

        model: 'Todo.model.TodoListModel',

        data: [
            {name: 'My Lifetime Todos'},
            {name: 'My Business Todos'}
        ],

        sorters: 'listname',

        grouper: {
            groupFn: function (record) {
                var title = record.get('name');
                return title ? title[0].toUpperCase() : '';
            }
        }
    }
});


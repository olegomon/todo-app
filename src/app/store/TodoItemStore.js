Ext.define('Todo.store.TodoItemStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Todo.model.TodoItemModel'
    ],

    config: {

        model: 'Todo.model.TodoItemModel',

        emptyText: 'No items.',

        sorters: 'listname',

        grouper: {
            groupFn: function (record) {
                return "";
//                var name = record.get('name');
//                return name ? name[0].toUpperCase() : '';
            }
        }
    }
});


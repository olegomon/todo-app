Ext.define('Todo.store.TodoListStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Todo.model.TodoListModel',
        'Todo.proxy.TodoListProxy'
    ],

    config: {

        model: 'Todo.model.TodoListModel',

        sorters: 'name',

        autoLoad: true,

        proxy: {
            type: 'todolistproxy'
        },

        grouper: {
            groupFn: function (record) {
                var title = record.get('name');
                return title ? title[0].toUpperCase() : '';
            }
        }
    }
});


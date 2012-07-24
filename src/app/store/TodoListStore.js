Ext.define('Todo.store.TodoListStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Todo.model.TodoListModel',
        'Todo.proxy.TodoItemProxy'
    ],

    config: {

        model: 'Todo.model.TodoListModel',

        proxy: Ext.create('Todo.proxy.TodoListProxy'),

        sorters: 'name',

        autoLoad: true,

        grouper: {
            groupFn: function (record) {
                var title = record.get('name');
                return title ? title[0].toUpperCase() : '';
            }
        }
    }
});


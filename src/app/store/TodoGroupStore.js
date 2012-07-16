Ext.define('Todo.store.TodoGroupStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Todo.model.TodoGroupModel'
    ],

    config: {

        model: 'Todo.model.TodoGroupModel',

        data: [
            {groupname: 'My Lifetime Todos'},
            {groupname: 'My Business Todos'}
        ],

        sorters: 'listname',

        grouper: {
            groupFn: function (record) {
                var title = record.get('groupname');
                return title ? title[0].toUpperCase() : '';
            }
        }
    }
});


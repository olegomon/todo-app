Ext.define('Todo.view.TodoGroupList', {
    extend: 'Ext.List',
    xtype : 'todogrouplist',

    requires: [
        'Todo.store.TodoGroupStore'
    ],

    config: {
        title: 'My Todo Lists',
        store: 'TodoGroupStore',
        groupDir  : 'DESC',
        grouped: true,
        itemTpl: '{groupname}',
        emptyText: 'No ToDo Lists found.'
    }
});

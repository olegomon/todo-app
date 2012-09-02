Ext.define('Todo.view.MainView', {
    extend: 'Ext.Panel',

    xtype: 'main',

    config: {
        title     : 'Main View',
        scrollable: true,
        cls       : 'todo-detail-panel',
        html: 'hello'
    }

});
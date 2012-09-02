Ext.define('Todo.controller.TodoItemController', {
    extend:'Ext.app.Controller',

    config:{
        refs:{
            // TODO add references to main and item list view using their xtypes
        },

        control:{
            // TODO for the item list view listen to 'itemtap' events and delegate them to onTodoListItemTap
        }
    },

    constructor:function (config) {
        this.initConfig(config);
        return this;
    },

    init:function () {
    },

    onTodoListItemTap: function (list, index, target, record, e, eOpts) {
        // TODO create instance of TodoItemDetailView (Ext.create ...)
        // TODO set title and record on detail view (detailView.set...)
        // TODO push view onto main view (this.getTodoMainView()...)
    }

});
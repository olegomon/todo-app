Ext.define('Todo.controller.TodoItemController', {
    extend:'Ext.app.Controller',

    config:{
        refs:{
            todoMainView:'todomain',
            todoItemList:'todoitemlist'
        },

        control:{
            todoItemList: {
                itemtap: 'onTodoListItemTap'
            }
        }
    },

    constructor:function (config) {
        this.initConfig(config);
        return this;
    },

    init:function () {
    },

    onTodoListItemTap: function (list, index, target, record, e, eOpts) {
        var detailView = Ext.create('Todo.view.TodoItemDetailView');
        detailView.setRecord(record);
        detailView.setTitle(record.get('name'));

        this.getTodoMainView().push(detailView);

        Ext.defer(function () {
            list.deselect(index);
        }, 100);
    }

});
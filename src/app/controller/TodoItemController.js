Ext.define('Todo.controller.TodoItemController', {
    extend:'Ext.app.Controller',

    config:{
        refs:{
            todoItemList:'todoitemlist',
            todoItemDetail:'todoitemdetail',
            detailCloseButton:'todoitemdetail button'
        },

        control:{
            todoItemList: {
                itemtap: 'onTodoListItemTap'
            },
            detailCloseButton: {
                tap: 'onDetailClose'
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

        Ext.Viewport.animateActiveItem(
                detailView,
                { type: 'slide', direction: 'left' }
        );

        Ext.defer(function () {
            list.deselect(index);
        }, 100);
    },

    onDetailClose: function() {
        Ext.Viewport.animateActiveItem(
                Ext.create('Todo.view.TodoItemListView'),
                { type: 'slide', direction: 'right' }
        );
    }

});
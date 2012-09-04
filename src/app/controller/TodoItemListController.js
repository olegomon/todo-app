Ext.define('Todo.controller.TodoItemListController', {
    extend:'Deft.mvc.ViewController',

    mixins:[
        'Deft.mixin.Injectable'
    ],

    inject:{
        eventBus:'eventBus'
    },

    config:{
        eventBus: null
    },

    control: {

    },

    init: function () {
        // register event listeners
        this.getEventBus().addListener(Todo.Event.DELETE_TODO_LIST, this.onTodoListDeleteEvent, this);
    },

    onTodoListDeleteEvent:function () {
        var me = this;
        var todoListRecord = me.getView().listRecord;
        todoListRecord.erase({
            success:function () {
                Ext.Msg.alert("Delete", "Successfully deleted list.", function() {
                    me.getEventBus().fireEvent(Todo.Event.TODO_LIST_DELETED);
                });
            },
            failure:function () {
                Ext.Msg.alert("Delete", "Failed to delete list.");
            }
        });
    }

});
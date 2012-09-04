Ext.define('Todo.controller.TodoItemDetailController', {
    extend:'Deft.mvc.ViewController',

    mixins:[
        'Deft.mixin.Injectable'
    ],

    inject:{
        eventBus:'eventBus'
    },

    config:{
        // this property stub is made for injection
        eventBus:null
    },

    control:{
    },

    init:function () {
        // register event listeners
        var eventBus = this.getEventBus();
        eventBus.addListener(Todo.Event.DELETE_TODO_ITEM, this.onTodoItemDeleteEvent, this);
    },

    onTodoItemDeleteEvent:function () {
        var me = this;
        var todoItemRecord = this.getView().getRecord();
        Ext.Msg.confirm('Delete Item?', 'Do you really want to delete?', function(buttonId, value, opt) {
            if(buttonId === 'yes') {
                todoItemRecord.erase({
                    success:function () {
                        Ext.Msg.alert("Delete", "Successfully deleted item.", function() {
                            me.getEventBus().fireEvent(Todo.Event.TODO_ITEM_DELETED);
                        });
                    },
                    failure:function () {
                        // TODO indicate error
                        Ext.Msg.alert("Delete", "Failed to delete item.");
                    }
                });
            }
        });
    }
});
Ext.define('Todo.controller.TodoItemController', {
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
        eventBus.addListener(Todo.Event.SAVE_TODO_ITEM, this.onTodoListSaveEvent, this);
    },

    onTodoListSaveEvent:function () {
        var me = this;
        var todoItemRecord = this.getView().getRecord();
        if (todoItemRecord) {
            // update record

            // undocumented API - alternatively update individual fields manually
            // do not use setData() since non-provided values will be nullified
            this.getView().updateRecord(todoItemRecord);

            todoItemRecord.save({
                success: function() {
                    Ext.Msg.alert("Save", "Successfully saved item.", function() {
                        me.getEventBus().fireEvent(Todo.Event.TODO_ITEM_SAVED);
                    });
                },
                failure: function() {
                    // TODO indicate error
                    Ext.Msg.alert("Save", "Failed to save item.");
                }
            });

        } else {
            // create new record
            var values = this.getView().getValues();
            var todoListId = this.getView().todoListId;
            values.todoListId = todoListId;
            var newRecord = Ext.create('Todo.model.TodoItemModel', values);

            // add record manually to store
            var store = Ext.getStore('TodoListStore');
            var listRecord = store.getById(todoListId);

            newRecord.save({
                success:function () {
                    listRecord.todoItems().add(newRecord);
                    Ext.Msg.alert("Save", "Successfully saved item.", function() {
                        me.getEventBus().fireEvent(Todo.Event.TODO_ITEM_SAVED);
                    });
                },
                failure:function () {
                    Ext.Msg.alert("Save", "Failed to save item.");
                }
            });
        }
    }
});
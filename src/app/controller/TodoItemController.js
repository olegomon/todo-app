Ext.define('Todo.controller.TodoItemController', {
    extend:'Ext.app.Controller',

    config:{
        refs:{
            todoItemForm:'todoitemform',
            todoItemDetail:'todoitemdetail'
        },

        control:{
        }
    },

    constructor:function (config) {
        this.initConfig(config);
        return this;
    },

    init:function () {
        // register event listeners
        Todo.EventBus.addListener(Todo.Event.SAVE_TODO_ITEM, this.onTodoItemSaveEvent, this);
        Todo.EventBus.addListener(Todo.Event.DELETE_TODO_ITEM, this.onTodoItemDeleteEvent, this);
    },

    onTodoItemSaveEvent:function () {
        var todoItemRecord = this.getTodoItemForm().getRecord();
        if (todoItemRecord) {
            // update record

            // undocumented API - alternatively update individual fields manually
            // do not use setData() since non-provided values will be nullified
            this.getTodoItemForm().updateRecord(todoItemRecord);

            todoItemRecord.save({
                success: function() {
                    Ext.Msg.alert("Save", "Successfully saved item.", function() {
                        Todo.EventBus.fireEvent(Todo.Event.TODO_ITEM_SAVED);
                    });
                },
                failure: function() {
                    Ext.Msg.alert("Save", "Failed to save item.");
                }
            });

        } else {
            // create new record
            var values = this.getTodoItemForm().getValues();
            var todoListId = this.getTodoItemForm().todoListId;
            values.todoListId = todoListId;
            var newRecord = Ext.create('Todo.model.TodoItemModel', values);

            // add record manually to store

            // TODO get TodoListStore
            // TODO get listRecord by todoListId
            // TODO add newRecord to listRecord.todoItems() if newRecord.save() call is successful

            newRecord.save({
                success:function () {


                    Ext.Msg.alert("Save", "Successfully saved item.", function() {
                        Todo.EventBus.fireEvent(Todo.Event.TODO_ITEM_SAVED);
                    });
                },
                failure:function () {
                    Ext.Msg.alert("Save", "Failed to save item.");
                }
            });
        }
    },

    onTodoItemDeleteEvent:function () {
        var todoItemRecord = this.getTodoItemDetail().getRecord();
        Ext.Msg.confirm('Delete Item?', 'Do you really want to delete?', function(buttonId, value, opt) {
            if(buttonId === 'yes') {
                todoItemRecord.erase({
                    success:function () {
                        Ext.Msg.alert("Delete", "Successfully deleted item.", function() {
                            Todo.EventBus.fireEvent(Todo.Event.TODO_ITEM_DELETED);
                        });
                    },
                    failure:function () {
                        Ext.Msg.alert("Delete", "Failed to delete item.");
                    }
                });
            }
        });
    }
});
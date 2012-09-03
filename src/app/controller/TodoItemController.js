Ext.define('Todo.controller.TodoItemController', {
    extend:'Ext.app.Controller',

    config:{
        // this property stub is made for injection
//        eventBus:null,

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
        var eventBus = this.getEventBus();
        eventBus.addListener(Todo.Event.SAVE_TODO_ITEM, this.onTodoItemSaveEvent, this);
        eventBus.addListener(Todo.Event.DELETE_TODO_ITEM, this.onTodoItemDeleteEvent, this);
    },

    getEventBus: function() {
        return Todo.app;
    },

    onTodoItemSaveEvent:function () {
        var me = this;
        var todoItemRecord = this.getTodoItemForm().getRecord();
        if (todoItemRecord) {
            // update record

            // undocumented API - alternatively update individual fields manually
            // do not use setData() since non-provided values will be nullified
            this.getTodoItemForm().updateRecord(todoItemRecord);

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
            var values = this.getTodoItemForm().getValues();
            var newRecord = Ext.create('Todo.model.TodoItemModel', values);

            // add record manually to store
            var store = Ext.getStore('TodoItemStore');

            newRecord.save({
                success:function () {
                    store.add(newRecord);
                    Ext.Msg.alert("Save", "Successfully saved item.", function() {
                        me.getEventBus().fireEvent(Todo.Event.TODO_ITEM_SAVED);
                    });
                },
                failure:function () {
                    Ext.Msg.alert("Save", "Failed to save item.");
                }
            });
        }
    },

    onTodoItemDeleteEvent:function () {
        var me = this;
        var todoItemRecord = this.getTodoItemDetail().getRecord();
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
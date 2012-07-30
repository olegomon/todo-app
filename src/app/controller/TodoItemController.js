Ext.define('Todo.controller.TodoItemController', {
    extend:'Ext.app.Controller',

    mixins:[
        'Deft.mixin.Injectable'
    ],

    inject:{
        eventBus:'eventBus'
    },

    config:{
        // this property stub is made for injection
        eventBus:null,

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
        eventBus.addListener(Todo.EventType.SAVE_TODO_ITEM, this.onTodoListDeleteEvent, this);
        eventBus.addListener(Todo.EventType.DELETE_TODO_ITEM, this.onTodoItemDeleteEvent, this);
    },

    onTodoListDeleteEvent:function () {
        var todoItemRecord = this.getTodoItemForm().getRecord();
        if (todoItemRecord) {
            // update record

            // undocumented API - alternatively update individual fields manually
            // do not use setData() since non-provided values will be nullified
            this.getTodoItemForm().updateRecord(todoItemRecord);
            todoItemRecord.save();
        } else {
            // create new record
            var values = this.getTodoItemForm().getValues();
            var todoListId = this.getTodoItemForm().todoListId;
            values.todoListId = todoListId;
            var newRecord = Ext.create('Todo.model.TodoItemModel', values);

            // add record manually to store
            var store = Ext.getStore('TodoListStore');
            var listRecord = store.getById(todoListId);

            newRecord.save({
                success:function () {
                    listRecord.todoItems().add(newRecord);
                },
                failure:function () {
                    // TODO indicate error
                }
            });
        }
    },

    onTodoItemDeleteEvent:function () {
        var todoItemRecord = this.getTodoItemDetail().getRecord();
        todoItemRecord.erase({
            success:function () {
                // TODO hide item view / fire event
            },
            failure:function () {
                // TODO indicate error
                Ext.Msg.alert("Delete", "Failed to delete item.");
            }
        });
    }

});
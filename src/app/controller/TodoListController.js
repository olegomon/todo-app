Ext.define('Todo.controller.TodoListController', {
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
            todoListForm:'todolistform',
            todoItemList:'todoitemlist'
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
        eventBus.addListener(Todo.EventType.SAVE_TODO_LIST, this.onTodoListSaveEvent, this);
        eventBus.addListener(Todo.EventType.DELETE_TODO_LIST, this.onTodoListDeleteEvent, this);
    },

    onTodoListSaveEvent:function () {
        var me = this;
        var todoItemRecord = me.getTodoListForm().getRecord();
        if (todoItemRecord) {
            Ext.Msg.alert('Info', 'Not Implemented');
        } else {
            // create new record
            var values = this.getTodoListForm().getValues();
            var newRecord = Ext.create('Todo.model.TodoListModel', values);

            // add record manually to store
            var store = Ext.getStore('TodoListStore');

            newRecord.save({
                success:function () {
                    store.add(newRecord);
                    Ext.Msg.alert("Save", "Successfully saved list.", function() {
                        me.getEventBus().fireEvent(Todo.EventType.TODO_LIST_SAVED);
                    });
                },
                failure:function () {
                    Ext.Msg.alert("Save", "Failed to save list.");
                }
            });
        }
    },

    onTodoListDeleteEvent:function () {
        var me = this;
        var todoListRecord = me.getTodoItemList().listRecord;
        todoListRecord.erase({
            success:function () {
                Ext.Msg.alert("Delete", "Successfully deleted list.", function() {
                    me.getEventBus().fireEvent(Todo.EventType.TODO_LIST_DELETED);
                });
            },
            failure:function () {
                Ext.Msg.alert("Delete", "Failed to delete list.");
            }
        });
    }

});
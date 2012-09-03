Ext.define('Todo.controller.TodoListController', {
    extend:'Ext.app.Controller',

    config:{
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

    init: function () {
        // register event listeners
        Todo.EventBus.addListener(Todo.Event.SAVE_TODO_LIST, this.onTodoListSaveEvent, this);
        Todo.EventBus.addListener(Todo.Event.DELETE_TODO_LIST, this.onTodoListDeleteEvent, this);
    },

    onTodoListSaveEvent:function () {
        var todoItemRecord = this.getTodoListForm().getRecord();
        if (todoItemRecord) {
            Ext.Msg.alert('Info', 'Not Implemented');
        } else {
            // create new record
            var values = this.getTodoListForm().getValues();
            var todoList = Ext.create('Todo.model.TodoListModel', values);

            var errors = todoList.validate();
            if(errors.isValid()) {
                // add record manually to store
                var store = Ext.getStore('TodoListStore');

                todoList.save({
                    success:function () {
                        store.add(todoList);
                        Ext.Msg.alert("Save", "Successfully saved list.", function() {
                            Todo.EventBus.fireEvent(Todo.Event.TODO_LIST_SAVED);
                        });
                    },
                    failure:function () {
                        Ext.Msg.alert("Save", "Failed to save list.");
                    }
                });
            } else {
                var message = "";
                errors.each(function (error) {
                    message = message + '<p>' + error.getMessage() + '<p/>'
                });
                Ext.Msg.alert("Validation", message);
            }

        }
    },

    onTodoListDeleteEvent:function () {
        var todoListRecord = null; // TODO get reference to current list record - see also TodoNavigationController
        todoListRecord.erase({
            success:function () {
                Ext.Msg.alert("Delete", "Successfully deleted list.", function() {
                    Todo.EventBus.fireEvent(Todo.Event.TODO_LIST_DELETED);
                });
            },
            failure:function () {
                Ext.Msg.alert("Delete", "Failed to delete list.");
            }
        });
    }

});
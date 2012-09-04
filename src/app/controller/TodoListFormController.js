Ext.define('Todo.controller.TodoListFormController', {
    // TODO extend from Deft.JS ViewController
    extend:'Ext.app.Controller',

    // TODO setup Deft.JS injection
    // TODO setup mixin for injection
    // TODO define inject block and inject event bus


    config:{

        // TODO setup up eventBus property for getters and setters

        refs:{
            todoListForm:'todolistform',
            todoItemList:'todoitemlist'
        }
    },

    // TODO define control: {} block if required
    // TODO use getters and setters where needed

    init: function () {
        // register event listeners

        // TODO use injected event bus
        Todo.app.addListener(Todo.Event.SAVE_TODO_LIST, this.onTodoListSaveEvent, this);
    },

    onTodoListSaveEvent:function () {
        var me = this;
        var todoItemRecord = me.getTodoListForm().getRecord();
        if (todoItemRecord) {
            // Edit list name is not implemented yet :(
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
                            // TODO use injected event bus
                            Todo.app.fireEvent(Todo.Event.TODO_LIST_SAVED);
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
    }
});
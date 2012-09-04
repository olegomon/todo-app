Ext.define('Todo.controller.TodoListFormController', {
    extend:'Deft.mvc.ViewController',

    mixins: ['Deft.mixin.Injectable'],

    inject: {
        eventBus: 'eventBus'
    },

    config:{
        eventBus: null
    },

    init: function () {
        // register event listeners
        this.getEventBus().addListener(Todo.Event.SAVE_TODO_LIST, this.onTodoListSaveEvent, this);
    },

    onTodoListSaveEvent:function () {
        var me = this;
        var todoItemRecord = me.getView().getRecord();
        if (todoItemRecord) {
            // Edit list name is not implemented yet :(
            Ext.Msg.alert('Info', 'Not Implemented');
        } else {
            // create new record
            var values = this.getView().getValues();
            var todoList = Ext.create('Todo.model.TodoListModel', values);

            var errors = todoList.validate();
            if(errors.isValid()) {
                // add record manually to store
                var store = Ext.getStore('TodoListStore');

                todoList.save({
                    success:function () {
                        store.add(todoList);
                        Ext.Msg.alert("Save", "Successfully saved list.", function() {
                            me.getEventBus().fireEvent(Todo.Event.TODO_LIST_SAVED);
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
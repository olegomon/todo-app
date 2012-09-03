Ext.define('Todo.controller.TodoNavigationBarController', {
    extend: 'Ext.app.Controller',

    requires: [
        'Ext.MessageBox'
    ],

    config: {
        refs: {
            todoNavigation: 'todonavigation',

            createTodoItemButton: 'todonavigation button[action=createtodoitem]',
            editTodoItemButton  : 'todonavigation button[action=edittodoitem]',
            saveTodoItemButton  : 'todonavigation button[action=savetodoitem]',
            deleteTodoItemButton: 'todonavigation button[action=deletetodoitem]'
        },

        control: {
            createTodoItemButton: {
                tap: 'onCreateTodoItemButtonTap'
            },

            editTodoItemButton: {
                tap: 'onEditTodoItemButtonTap'
            },

            saveTodoItemButton: {
                tap: 'onSaveTodoItemButtonTap'
            },

            deleteTodoItemButton: {
                tap: 'onDeleteTodoItemButtonTap'
            }
        }
    },

    launch: function () {
        // change the buttons before the animation starts
        this.getTodoNavigation().on('activeitemchange', this.onActiveItemChange, this, null, 'before');
        return this.callParent(arguments);
    },

    onEditTodoItemButtonTap: function () {
        // TODO fire item show edit event
        // Todo.EventBus.fireEvent(...)
        // see also Todo.Event
    },

    onCreateTodoItemButtonTap: function () {
        // TODO fire item show create event
    },

    onSaveTodoItemButtonTap: function () {
        // TODO fire item save event
    },

    onDeleteTodoItemButtonTap: function () {
        // TODO fire item delete event
    },

    onActiveItemChange: function (navigationview, value, oldValue, eOpts) {
        var activeItem = value;

        if (activeItem.isXType(Todo.view.TodoItemList.xtype)) {
            this.getCreateTodoItemButton().show();
            this.getEditTodoItemButton().hide();
            this.getDeleteTodoItemButton().hide();
            this.getSaveTodoItemButton().hide();
        }

        if (activeItem.isXType(Todo.view.TodoItemDetailView.xtype)) {
            this.getCreateTodoItemButton().hide();
            this.getEditTodoItemButton().show();
            this.getDeleteTodoItemButton().show();
            this.getSaveTodoItemButton().hide();
        }

        if (activeItem.isXType(Todo.view.TodoItemForm.xtype)) {
            this.getCreateTodoItemButton().hide();
            this.getEditTodoItemButton().hide();
            this.getDeleteTodoItemButton().hide();
            this.getSaveTodoItemButton().show();
        }
    }

});

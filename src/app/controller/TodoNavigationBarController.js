Ext.define('Todo.controller.TodoNavigationBarController', {
    extend: 'Ext.app.Controller',

    requires: [
        'Ext.MessageBox'
    ],

    config: {
        userNotifier: null,

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
        Todo.EventBus.fireEvent(Todo.Event.SHOW_EDIT_TODO_ITEM);
    },

    onCreateTodoItemButtonTap: function () {
        Todo.EventBus.fireEvent(Todo.Event.SHOW_CREATE_TODO_ITEM);
    },

    onSaveTodoItemButtonTap: function () {
        Todo.EventBus.fireEvent(Todo.Event.SAVE_TODO_ITEM);
    },

    onDeleteTodoItemButtonTap: function () {
        Todo.EventBus.fireEvent(Todo.Event.DELETE_TODO_ITEM);
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

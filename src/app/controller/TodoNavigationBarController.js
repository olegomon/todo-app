Ext.define('Todo.controller.TodoNavigationBarController', {
    extend: 'Ext.app.Controller',

    requires: [
        'Ext.MessageBox'
    ],

    config: {
        eventBus    : null,
        userNotifier: null,

        refs: {
            todoNavigation: 'todonavigation',

            createTodoListButton: 'todonavigation button[action=createtodolist]',
            saveTodoListButton  : 'todonavigation button[action=savetodolist]',
            deleteTodoListButton: 'todonavigation button[action=deletetodolist]',
            createTodoItemButton: 'todonavigation button[action=createtodoitem]',
            editTodoItemButton  : 'todonavigation button[action=edittodoitem]',
            saveTodoItemButton  : 'todonavigation button[action=savetodoitem]',
            deleteTodoItemButton: 'todonavigation button[action=deletetodoitem]'
        },

        control: {
            createTodoListButton: {
                tap: 'onCreateTodoListButtonTap'
            },

            saveTodoListButton: {
                tap: 'onSaveTodoListButtonTap'
            },

            deleteTodoListButton: {
                tap: 'onDeleteTodoListButtonTap'
            },

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

    onCreateTodoListButtonTap: function () {
        console.log(this.getTodoNavigation());
        Todo.EventBus.fireEvent(Todo.Event.SHOW_CREATE_TODO_LIST);
    },

    onSaveTodoListButtonTap: function () {
        Todo.EventBus.fireEvent(Todo.Event.SAVE_TODO_LIST);
    },

    onDeleteTodoListButtonTap: function () {
        Todo.EventBus.fireEvent(Todo.Event.DELETE_TODO_LIST);
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

        if (activeItem.isXType(Todo.view.TodoList.xtype)) {
            this.getCreateTodoListButton().show();
            this.getDeleteTodoListButton().hide();
            this.getSaveTodoListButton().hide();

            this.getCreateTodoItemButton().hide();
            this.getEditTodoItemButton().hide();
            this.getDeleteTodoItemButton().hide();
            this.getSaveTodoItemButton().hide();

        }

        if (activeItem.isXType(Todo.view.TodoListForm.xtype)) {
            this.getCreateTodoListButton().hide();
            this.getDeleteTodoListButton().hide();
            this.getSaveTodoListButton().show();

            this.getCreateTodoItemButton().hide();
            this.getEditTodoItemButton().hide();
            this.getDeleteTodoItemButton().hide();
            this.getSaveTodoItemButton().hide();

        }

        if (activeItem.isXType(Todo.view.TodoItemList.xtype)) {
            this.getCreateTodoListButton().hide();
            this.getDeleteTodoListButton().show();
            this.getSaveTodoListButton().hide();

            this.getCreateTodoItemButton().show();
            this.getEditTodoItemButton().hide();
            this.getDeleteTodoItemButton().hide();
            this.getSaveTodoItemButton().hide();
        }

        if (activeItem.isXType(Todo.view.TodoItemDetailView.xtype)) {
            this.getCreateTodoListButton().hide();
            this.getDeleteTodoListButton().hide();
            this.getSaveTodoListButton().hide();

            this.getCreateTodoItemButton().hide();
            this.getEditTodoItemButton().show();
            this.getDeleteTodoItemButton().show();
            this.getSaveTodoItemButton().hide();
        }

        if (activeItem.isXType(Todo.view.TodoItemForm.xtype)) {
            this.getCreateTodoListButton().hide();
            this.getDeleteTodoListButton().hide();
            this.getSaveTodoListButton().hide();

            this.getCreateTodoItemButton().hide();
            this.getEditTodoItemButton().hide();
            this.getDeleteTodoItemButton().hide();
            this.getSaveTodoItemButton().show();
        }
    }
});

Ext.define('Todo.controller.TodoNavigationBarController', {
    extend: 'Deft.mvc.ViewController',

    requires: [
        'Ext.MessageBox'
    ],

    mixins: [
        'Deft.mixin.Injectable'
    ],

    inject: {
        eventBus             : 'eventBus',
        userNotifier         : 'userNotifier'
    },

    config: {
        eventBus             : null,
        userNotifier         : null
    },

    control: {

        view: {
        },

        createTodoListButton: {
            selector : 'button[action=createtodolist]',
            listeners: {
                tap: 'onCreateTodoListButtonTap'
            }
        },

        saveTodoListButton: {
            selector : 'button[action=savetodolist]',
            listeners: {
                tap: 'onSaveTodoListButtonTap'
            }
        },

        deleteTodoListButton: {
            selector : 'button[action=deletetodolist]',
            listeners: {
                tap: 'onDeleteTodoListButtonTap'
            }
        },

        createTodoItemButton: {
            selector : 'button[action=createtodoitem]',
            listeners: {
                tap: 'onCreateTodoItemButtonTap'
            }
        },

        editTodoItemButton: {
            selector : 'button[action=edittodoitem]',
            listeners: {
                tap: 'onEditTodoItemButtonTap'
            }
        },

        saveTodoItemButton: {
            selector : 'button[action=savetodoitem]',
            listeners: {
                tap: 'onSaveTodoItemButtonTap'
            }
        },

        deleteTodoItemButton: {
            selector : 'button[action=deletetodoitem]',
            listeners: {
                tap: 'onDeleteTodoItemButtonTap'
            }
        }
    },

    init: function() {
        // change the buttons before the animation starts
        this.getView().on('activeitemchange', this.onActiveItemChange, this, null, 'before');
        return this.callParent(arguments);
    },

    onCreateTodoListButtonTap: function() {
        this.getEventBus().fireEvent(Todo.Event.SHOW_CREATE_TODO_LIST);
    },

    onSaveTodoListButtonTap: function() {
        this.getEventBus().fireEvent(Todo.Event.SAVE_TODO_LIST);
    },

    onDeleteTodoListButtonTap: function() {
        this.getEventBus().fireEvent(Todo.Event.DELETE_TODO_LIST);
    },

    onEditTodoItemButtonTap: function() {
        this.getEventBus().fireEvent(Todo.Event.SHOW_EDIT_TODO_ITEM);
    },

    onCreateTodoItemButtonTap: function() {
        this.getEventBus().fireEvent(Todo.Event.SHOW_CREATE_TODO_ITEM);
    },

    onSaveTodoItemButtonTap: function() {
        this.getEventBus().fireEvent(Todo.Event.SAVE_TODO_ITEM);
    },

    onDeleteTodoItemButtonTap: function() {
        this.getEventBus().fireEvent(Todo.Event.DELETE_TODO_ITEM);
    },

    onActiveItemChange: function(navigationview, value, oldValue, eOpts) {
        var activeItem = value;

        if(activeItem.isXType(Todo.view.TodoList.xtype)) {

            this.getCreateTodoListButton().show();
            this.getDeleteTodoListButton().hide();
            this.getSaveTodoListButton().hide();

            this.getCreateTodoItemButton().hide();
            this.getEditTodoItemButton().hide();
            this.getDeleteTodoItemButton().hide();
            this.getSaveTodoItemButton().hide();

        }

        if(activeItem.isXType(Todo.view.TodoListForm.xtype)) {

            this.getCreateTodoListButton().hide();
            this.getDeleteTodoListButton().hide();
            this.getSaveTodoListButton().show();

            this.getCreateTodoItemButton().hide();
            this.getEditTodoItemButton().hide();
            this.getDeleteTodoItemButton().hide();
            this.getSaveTodoItemButton().hide();

        }

        if(activeItem.isXType(Todo.view.TodoItemList.xtype)) {

            this.getCreateTodoListButton().hide();
            this.getDeleteTodoListButton().show();
            this.getSaveTodoListButton().hide();

            this.getCreateTodoItemButton().show();
            this.getEditTodoItemButton().hide();
            this.getDeleteTodoItemButton().hide();
            this.getSaveTodoItemButton().hide();
        }

        if(activeItem.isXType(Todo.view.TodoItemDetailView.xtype)) {
            this.getCreateTodoListButton().hide();
            this.getDeleteTodoListButton().hide();
            this.getSaveTodoListButton().hide();

            this.getCreateTodoItemButton().hide();
            this.getEditTodoItemButton().show();
            this.getDeleteTodoItemButton().show();
            this.getSaveTodoItemButton().hide();
        }

        if(activeItem.isXType(Todo.view.TodoItemForm.xtype)) {
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

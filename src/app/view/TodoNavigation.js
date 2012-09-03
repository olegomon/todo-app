Ext.define('Todo.view.TodoNavigation', {
    extend: 'Ext.navigation.View',
    xtype : 'todonavigation',

    requires: [
        'Ext.Button',

        'Todo.controller.TodoNavigationBarController',
        'Todo.view.TodoList',
        'Todo.view.TodoItemList',
        'Todo.view.TodoItemDetailView',
        'Todo.view.TodoListForm',
        'Todo.view.TodoItemForm'
    ],

    controller: 'Todo.controller.TodoNavigationBarController',

    config: {
        navigationBar: {

            defaults: {
                xtype : 'button',
                align : 'right',
                // the title is behind the button during animation
                zIndex: 1
            },

            items: [
                {
                    text  : 'New',
                    action: 'createtodolist'
                },
                {
                    text  : 'Save',
                    action: 'savetodolist',
                    hidden: true
                },
                {
                    text  : 'Delete',
                    action: 'deletetodolist',
                    hidden: true
                },
                {
                    text  : 'New',
                    action: 'createtodoitem',
                    hidden: true
                },
                {
                    text  : 'Edit',
                    action: 'edittodoitem',
                    hidden: true
                },
                {
                    text  : 'Save',
                    action: 'savetodoitem',
                    hidden: true
                },
                {
                    text  : 'Delete',
                    action: 'deletetodoitem',
                    hidden: true
                }
            ]
        },

        items: [
            {
                xtype: 'todolist'
            }
        ]
    },

    getCount: function () {
        return this.getInnerItems().length;
    }
});

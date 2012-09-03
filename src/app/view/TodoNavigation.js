Ext.define('Todo.view.TodoNavigation', {
    extend: 'Ext.navigation.View',
    xtype : 'todonavigation',

    requires: [
        'Ext.Button',

        'Todo.controller.TodoNavigationBarController',
        'Todo.view.TodoItemList',
        'Todo.view.TodoItemDetailView',
        'Todo.view.TodoItemForm'
    ],

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
                    action: 'createtodoitem', // note: buttons will be referenced in the controller by their action
                    hidden: false
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
                xtype: 'todoitemlist'
            }
        ]
    },

    getCount: function () {
        return this.getInnerItems().length;
    }
});

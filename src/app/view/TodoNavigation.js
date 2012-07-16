Ext.define('Todo.view.TodoNavigation', {
    extend: 'Ext.navigation.View',
    xtype : 'todonavigation',

    requires: [
        'Ext.Button',

        'Todo.controller.TodoNavigationBarController',
        'Todo.view.TodoGroupList',
        'Todo.view.TodoList',
        'Todo.view.TodoItemDetailView',
        'Todo.view.TodoGroupForm',
        'Todo.view.TodoItemForm'
    ],

    mixins: [
        'Deft.mixin.Controllable'
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
                    action: 'createtodolist',
//                    iconCls : 'add',
//                    iconMask: true,
                },
                {
                    text  : 'Save',
                    action: 'savetodolist',
                    hidden: true,
//                    iconCls : 'add',
//                    iconMask: true,
                },
                {
                    text  : 'Delete',
                    action: 'deletetodolist',
//                    iconCls : 'add',
//                    iconMask: true,
                },
                {
                    text  : 'New',
                    action: 'createtodoitem',
                    hidden: true
//                    iconCls : 'compose',
//                    iconMask: true,
                },
                {
                    text  : 'Edit',
                    action: 'edittodoitem',
                    hidden: true
//                    iconCls : 'compose',
//                    iconMask: true,
                },
                {
                    text  : 'Save',
                    action: 'savetodoitem',
                    hidden: true
//                    iconCls : 'check2',
//                    iconMask: true,
                },
                {
                    text  : 'Delete',
                    action: 'deletetodoitem',
                    hidden: true
//                    iconCls : 'trash',
//                    iconMask: true,
                }
            ]
        },

        items: [
            {
                xtype: 'todogrouplist'
            }
        ]
    },

    getCount: function () {
        return this.getInnerItems().length;
    }
});

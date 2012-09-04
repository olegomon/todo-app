Ext.define('Todo.view.TodoListForm', {
    extend: 'Ext.form.Panel',

    xtype: 'todolistform',

    // TODO connect Deft.JS ViewController for this view
    // TODO setup mixin
    // TODO define "controller" field

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Text'
    ],

    config: {
        title: 'New ToDo',
        defaults: {
            labelWidth: '35%'
        },
        items : [
            {
                xtype: 'fieldset',
                title: 'ToDo List Values',
                instructions: 'Fill out the ToDo List.',
                items: [
                    {
                        xtype         : 'textfield',
                        name          : 'name',
                        required      : true,
                        label         : 'Name'
                    }
                ]
            }
        ]
    }
});

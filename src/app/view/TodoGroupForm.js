Ext.define('Todo.view.TodoGroupForm', {
    extend: 'Ext.form.Panel',

    xtype: 'todogroupform',

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
                        name          : 'groupname',
                        required      : true,
                        label         : 'Name'
                    }
                ]
            }
        ]
    }
});

Ext.define('Todo.view.TodoItemForm', {
    extend: 'Ext.form.Panel',

    xtype: 'todoitemform',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Select',
        'Ext.field.Text',
        'Ext.field.TextArea',
        'Ext.field.DatePicker',
    ],

    config: {
        title: 'New ToDo',
        defaults: {
            labelWidth: '35%'
        },
        items : [
            {
                xtype: 'fieldset',
                title: 'ToDo Item Values',
                instructions: 'Fill out the ToDo values.',
                items: [
                    {
                        xtype         : 'textfield',
                        name          : 'name',
                        required      : true,
                        label         : 'Name'
                    },
                    {
                        xtype         : 'selectfield',
                        name          : 'status',
                        label         : 'Status',
                        options: [
                            {
                                text: 'Open',
//                                value: 0
                            },
                            {
                                text: 'Done',
                                value: 1
                            }
                        ]
                    },
                    {
                        xtype         : 'selectfield',
                        name          : 'priority',
                        label         : 'Priority',

                        options: [
                            {
                                text: 'None',
//                                value: 0
                            },
                            {
                                text: 'Low',
                                value: 1
                            },
                            {
                                text: 'Medium',
                                value: 2
                            },
                            {
                                text: 'High',
                                value: 3
                            }
                        ]
                    },
                    {
                        xtype         : 'datepickerfield',
                        name          : 'duedate',
                        label         : 'Due Date',
                        destroyPickerOnHide: true,
                        value: new Date()
                    },
                    {
                        xtype: 'textareafield',
                        name : 'description',
                        label: 'Description'
                    }
                ]
            }
        ]
    }
});

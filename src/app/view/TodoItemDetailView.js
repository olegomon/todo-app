Ext.define('Todo.view.TodoItemDetailView', {
    extend: 'Ext.Panel',

    xtype: 'todoitemdetail',

    requires: [

    ],

    config: {
        title     : 'Todo Detail',
        scrollable: true,
        cls       : 'todo-detail-panel',
        tpl       : [
            '<div class="todo-item-container">',
                '<div class="item-value-title">{name}</div>',
                '<div class="item-field">',
                    '<div class="item-label">Status:</div>',
                    '<div class="item-value">{[values.status === "done" ? "Done" : "Open"]}</div>',
                '</div>',
                '<div class="item-value-priority">',
                    '<div class="item-label">Priority:</div>',
                    '<tpl if="priority == 1">',
                        '<div class="priority-low"></div>',
                    '</tpl>',
                    '<tpl if="priority == 2">',
                        '<div class="priority-medium"></div>',
                    '</tpl>',
                    '<tpl if="priority == 3">',
                        '<div class="priority-high"></div>',
                    '</tpl>',
                '</div>',
                '<div class="item-field">',
                    '<div class="item-label">Due:</div>',
                    '<div class="item-value">{[values.duedate ? Ext.Date.format(values.duedate, "F j, Y, g:i a") : ""]}</div>',
                '</div>',
                '<div class="item-field">',
                    '<div class="item-label">Note:</div>',
                    '<div class="item-value-description">{description}</div>',
                '</div>',
            '</div>'
        ]
    }

});
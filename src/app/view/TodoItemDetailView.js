Ext.define('Todo.view.TodoItemDetailView', {
    extend: 'Ext.Container',

    xtype: 'todoitemdetail',

    requires: [

    ],

    config: {
        title     : 'Todo Detail',
        scrollable: true,
        cls       : 'todo-detail-panel',
        tpl       : [
            '<div class="todo-item">',
                '<div class="item-title">{name}</div>',
                '<div><span class="item-label">Status:</span><span class="item-value">{status}</span></div>',

                '<div class="item-priority">',
                    '<div class="item-label">Priority:</div>',
                    '<tpl if="priority == 1">',
                        '<div class="priority-low"/>',
                    '</tpl>',
                    '<tpl if="priority == 2">',
                        '<div class="priority-medium"/>',
                    '</tpl>',
                    '<tpl if="priority == 3">',
                        '<div class="priority-high"/>',
                    '</tpl>',
                '</div>',
            '</div>',
                '<div><span class="item-label">Due:</span><span class="item-value">{[values.duedate ? Ext.Date.format(values.duedate, "F j, Y, g:i a") : ""]}</span></div>',
                '<div><span class="item-label">Note:</span><span class="item-value">{description}</span></div>',
            '</div>'
        ]
    }

//        /**
//         * Updates the record of all sub items of this form.
//         *
//         * @param newRecord
//         * @param oldRecord
//         */
//        updateRecord: function (newRecord, oldRecord) {
//            var me = this;
//            me.callOverridden(arguments);
//            me.getItems().each(function (item) {
//                if (typeof item.setRecord == 'function') {
//                    item.setRecord(newRecord);
//                }
//
//                //set record on all subitems
//                if (typeof item.getItems == 'function') {
//                    var subItems = item.getItems();
//                    if (subItems.getCount() > 0) {
//                        me.setSubItemRecord(item, newRecord, me);
//                    }
//                }
//            });
//        },
//
//        /**
//         * @private
//         * @param subItem
//         * @param record
//         */
//        setSubItemRecord: function (subItem, record, scope) {
//            var me = scope;
//            subItem.getItems().each(function (item) {
//                if (typeof item.setRecord == 'function') {
//                    item.setRecord(record);
//                }
//
//                //set record on all subitems
//                if (typeof item.getItems == 'function') {
//                    var subItems = item.getItems();
//                    if (subItems.getCount() > 0) {
//                        me.setSubItemRecord(item, record);
//                    }
//                }
//            });
//        },
});
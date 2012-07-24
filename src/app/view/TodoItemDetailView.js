Ext.define('Todo.view.TodoItemDetailView', {
    extend: 'Ext.Container',

    xtype: 'todoitemdetail',

    requires: [

    ],

    config: {
        title: 'Todo Detail',
        scrollable: true,
        tpl  : [
            '<div style="padding: 1em">',
                // '<div><span style="font-weight: bold">Name:</span> {name}</div>',
                '<div><span style="font-weight: bold">Status:</span> {status}</div>',
                '<div><span style="font-weight: bold">Priority:</span> {priority}</div>',
                '<div><span style="font-weight: bold">Due Date:</span> {[values.duedate ? Ext.Date.format(values.duedate, "F j, Y, g:i a") : ""]}</div>',
                '<div><span style="font-weight: bold">Description:</span> {description}</div>',
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
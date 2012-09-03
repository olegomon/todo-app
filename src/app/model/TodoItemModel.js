Ext.define('Todo.model.TodoItemModel', {
    extend: 'Ext.data.Model',

    requires: ['Todo.proxy.TodoItemProxy'],

    config: {
        idProperty: '_id',
        fields: [
                // TODO add all fields of the web services (http://woodly.de:3000/api/todos)
                // _id (auto), name, status, priority (int), description, duedate (date, dateFormat: 'c')
        ]

        // TODO set TodoItemProxy instance as proxy
    }
});

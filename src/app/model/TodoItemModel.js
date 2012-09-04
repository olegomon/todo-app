Ext.define('Todo.model.TodoItemModel', {
    extend: 'Ext.data.Model',
    requires: [
        'Todo.proxy.TodoItemProxy'
    ],
    config: {
        idProperty: '_id',
        fields: [
            {name: '_id', type: 'auto'},
            {name: 'todoListId', type: 'auto'},
            {name: 'name', type: 'string'},
            {name: 'status', type: 'string'},
            {name: 'priority', type: 'int'},
            {name: 'description', type: 'string'},
            {name: 'duedate', type: 'date', dateFormat: 'c', defaultValue: 0}
        ],

        validations: [
            // TODO provide some validation messages
            {type: 'presence', field: 'name'},
            {type: 'length', field: 'name', min: 2},
            {type: 'inclusion', field: 'status', list: ['Done', 'Open']}
        ],

        associations: [
            {
                type: 'belongsTo',
                model: 'Todo.model.TodoListModel',
                primaryKey: '_id',
                foreignKey: 'todoListId'
            }
        ],
        proxy: {
            type: 'todoitemproxy'
        }
    },

    getName: function() {
        return this.get('name');
    },

    getStatus: function() {
        return this.get('status');
    },

    getPriority: function() {
        return this.get('priority');
    },

    getDescription: function() {
        return this.get('description');
    },

    getDueDate: function() {
        return this.get('duedate');
    }
});

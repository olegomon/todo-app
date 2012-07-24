Ext.define('Todo.model.TodoItemModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name: 'name', type: 'string'},
            {name: 'status', type: 'string'},
            {name: 'priority', type: 'int'},
            {name: 'description', type: 'string'},
            {name: 'duedate', type: 'date', dateFormat: 'c'}
        ],

        validations: [
            // TODO provide some validation messages
            {type: 'presence', field: 'name'},
            {type: 'length', field: 'name', min: 2},
            {type: 'inclusion', field: 'status', list: ['Done', 'Open']}
        ],

        associations: [
            { type: 'belongsTo', model: 'TodoListModel' }
        ]
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

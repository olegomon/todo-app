Ext.define('Todo.model.TodoListModel', {
    extend: 'Ext.data.Model',
    config: {

        fields: [
            {name: 'name', type: 'string'}
        ],

        validations: [
            // TODO provide some validation messages
            {field: 'name', type: 'presence'}
        ],

        associations: [
            { type: 'hasMany', model: 'Todo.model.TodoItemModel', name: 'todoItems' }
        ]
    },

    getListName: function() {
        return this.get('name');
    }
});

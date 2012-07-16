Ext.define('Todo.model.TodoGroupModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name: 'groupname', type: 'string'}
        ],

        validations: [
            // TODO provide some validation messages
            {field: 'groupname', type: 'presence'}
        ],

        associations: [
            { type: 'hasMany', model: 'Todo.model.TodoItemModel', name: 'todoItems' }
        ]
    },

    getGroupName: function() {
        return this.get('groupname');
    }
});
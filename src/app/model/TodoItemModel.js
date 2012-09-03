Ext.define('Todo.model.TodoItemModel', {
    extend: 'Ext.data.Model',

    requires: ['Todo.proxy.TodoItemProxy'],

    config: {
        idProperty: '_id',
        fields: [
            {name: '_id', type: 'auto'},

                // TODO add required foreign key field
                // see also http://woodly.de:3000/api/todoitems

            {name: 'name', type: 'string'},
            {name: 'status', type: 'string'},
            {name: 'priority', type: 'int'},
            {name: 'description', type: 'string'},
            {name: 'duedate', type: 'date', dateFormat: 'c', defaultValue: 0}
        ],

        validations: [
            {type: 'presence', field: 'name'},
            {type: 'length', field: 'name', min: 2},
            {type: 'inclusion', field: 'status', list: ['Done', 'Open']}
        ],

        associations: [
            {
                type: 'belongsTo'

                // TODO define belongsTo association with TodoListModel
                // model, primaryKey, foreignKey
            }
        ],

        proxy: Ext.create('Todo.proxy.TodoItemProxy')
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

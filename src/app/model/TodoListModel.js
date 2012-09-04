Ext.define('Todo.model.TodoListModel', {
    extend:'Ext.data.Model',

    requires: [
        'Todo.proxy.TodoListProxy'
    ],

    config:{
        idProperty:'_id',
        fields:[
            {name:'_id', type:'string'},
            {name:'name', type:'string'}
        ],

        validations:[
            { field:'name', type:'presence', message: 'The ToDo list must have a name' }
        ],

        associations:[
            {
                type:'hasMany',
                model:'Todo.model.TodoItemModel',
                name:'todoItems',
                associationKey:'todoItems',
                primaryKey:'_id',
                foreignKey:'todoListId',

                // note: since child stores are created upon request their configuration has to be done here ...
                store: {

                    grouper: {
                        groupFn: function (record) {
                            var name = record.get('name');
                            return name ? name[0].toUpperCase() : '';
                        }
                    },

                    proxy: Ext.create('Todo.proxy.TodoItemProxy')
                }

            }
        ],

        proxy:Ext.create('Todo.proxy.TodoListProxy')
    },

    getListName:function () {
        return this.get('name');
    },

    setListName:function (name) {
        this.set('name', name);
    },

    getId:function () {
        return this.get('_id');
    }
});

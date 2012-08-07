Ext.define('Todo.model.TodoListModel', {
    extend:'Ext.data.Model',
    config:{
        idProperty:'_id',
        fields:[
            {name:'_id', type:'string'},
            {name:'name', type:'string'}
        ],

        validations:[
            // TODO provide some validation messages
            { field:'name', type:'presence', message: 'The ToDo list must have a name' }
        ],

        associations:[
            {
                type:'hasMany',
                model:'Todo.model.TodoItemModel',
                name:'todoItems',
                associationKey:'todoItems',
                primaryKey:'_id',
                foreignKey:'todoListId'
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

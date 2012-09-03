Ext.define('Todo.model.TodoListModel', {
    extend:'Ext.data.Model',

    requires: ['Todo.proxy.TodoListProxy'],

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
                type:'hasMany'

                // TODO define hasMany association with TodoItemModel
                // model, name, associationKey, primaryKey, foreignKey

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

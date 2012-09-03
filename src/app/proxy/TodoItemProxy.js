Ext.define('Todo.proxy.TodoItemProxy', {
    extend: 'Ext.data.proxy.Rest',

    config: {
        type: 'rest',
        url: 'http://woodly.de:3000/api/todos', // change service URL here
        reader: {
            type: 'json'
//            rootProperty: 'data',
//            countProperty: 'count',
//            successProperty: 'success'
        }
    }

});

var assert = buster.assertions.assert;
var refute = buster.assertions.refute;

buster.testCase("TodoGroupModel", {

    "should have a name setter": function () {
        var model = Ext.create('Todo.model.TodoListModel', {name: 'some name'});
        assert.equals(model.getListName(), 'some name');
    },

    "should have a todoItems getter": function () {
        var model = Ext.create('Todo.model.TodoListModel', {name: 'some name'});
        assert(Ext.isFunction(model.todoItems), 'association method must be a function');
    },

    "should have a todoItems added": function () {
        var todoGroup = Ext.create('Todo.model.TodoListModel', {name: 'some name'});
        todoGroup.todoItems().add({name: 'my todo', status: 'Done'});
        assert.equals(todoGroup.todoItems().getCount(), 1);
    }
});

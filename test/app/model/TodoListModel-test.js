var assert = buster.assertions.assert;
var refute = buster.assertions.refute;

buster.assertions.add("instanceOf", {
    assert: function (actual, className) {
        return Ext.getClassName(actual) === className;
    },
    assertMessage: "Expected ${0} to be instance of ${1}",
    refuteMessage: "Expected ${0} not to be instance of ${1}", // Optional
    expectation: "toBeInstanceOf" // Optional
});

buster.testCase("TodoListStore", {

    "setUp" : function(done) {
        this.store = Ext.create('Todo.store.TodoListStore');
        this.store.load(function(records, operation, success) {
            done();
        });
    },

    "should be auto load enabled": function () {
        assert(this.store.getAutoLoad());
    },

    "should have three todo lists": function () {
        assert.equals(this.store.getCount(), 3);
    },

    "list model should have associated data": function() {
        var todoList = this.store.getAt(0);
        assert.equals(todoList.getId(), 1);
        console.log(Ext.getClassName(todoList));

        assert.instanceOf(todoList, 'Todo.model.TodoListModel');
        assert.isFunction(todoList.todoItems);

        assert.instanceOf(todoList.todoItems(), 'Ext.data.Store');
    }
});

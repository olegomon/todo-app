var assert = buster.assertions.assert;
var refute = buster.assertions.refute;

/**
 * Custom assertion instanceOf
 */
buster.assertions.add("instanceOf", {
    // assertion arguments
    assert: function (actual, className) {
        return Ext.getClassName(actual) === className;
    },
    assertMessage: "Expected ${0} to be instance of ${1}",
    refuteMessage: "Expected ${0} not to be instance of ${1}", // Optional
    expectation: "toBeInstanceOf" // Optional to be used with BDD test style
});

buster.testCase("TodoListStore", {

    "setUp" : function(done) {
        this.store = Ext.create('Todo.store.TodoListStore');
        this.store.load(function(records, operation, success) {
            done();
        });
    },

    "list model should have a todiItem association created": function() {
        var todoList = this.store.getAt(0);
        assert.instanceOf(todoList, 'Todo.model.TodoListModel');
        assert.isFunction(todoList.todoItems);
        assert.instanceOf(todoList.todoItems(), 'Ext.data.Store');
        assert.equals(todoList.todoItems().getCount(), 1);
    },

    "listItem model should have a todoList association created": function() {
        var todoList = this.store.getAt(0);
        var todoItem1 = todoList.todoItems().getAt(0);
        assert.instanceOf(todoItem1.getTodoListModel(), 'Todo.model.TodoListModel');
    },

    "list model should have associated data": function() {
        var todoList1 = this.store.getAt(0);
        assert.equals(todoList1.getId(), 1);
        assert.equals(todoList1.todoItems().getCount(), 1);

        var todoList2 = this.store.getAt(1);
        assert.equals(todoList2.getId(), 2);
        assert.equals(todoList2.todoItems().getCount(), 2);

        var todoList3 = this.store.getAt(2);
        assert.equals(todoList3.getId(), 3);
        assert.equals(todoList3.todoItems().getCount(), 0);
    }
});


var assert = buster.assertions.assert;
var refute = buster.assertions.refute;

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
    }
});

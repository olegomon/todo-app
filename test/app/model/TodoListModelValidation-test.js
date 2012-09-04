var assert = buster.assertions.assert;
var refute = buster.assertions.refute;

buster.assertions.add("exists", {
    assert: function (message) {
        return !!message && message.length > 0;
    },
    assertMessage: "Expected validation error message '${0}' to exist",
    expectation: "toExist" // Optional
});

describe("Todo List Model Validation of", function(){

    var todoList;

    beforeEach(function() {
        todoList = Ext.create('Todo.model.TodoListModel');
    });

    it('name field presence validation should fail', function(){
        todoList.setListName('');
        var errors = todoList.validate();
        expect(errors.length).toEqual(1);
        expect(errors.first().getMessage()).toExist();
        expect(errors.first().getMessage()).toEqual('The ToDo list must have a name');
        expect(errors.isValid()).toEqual(false);
    });

    it('name field presence validation should pass', function(){
        todoList.setListName('s');
        var errors = todoList.validate();
        expect(errors.length).toEqual(0);
        expect(errors.isValid()).toBeTruthy();
    });

});
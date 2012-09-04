var assert = buster.assertions.assert;
var refute = buster.assertions.refute;


buster.testCase("TodoNavigationDeftController",  {
    setUp: function() {
        this.navigation = Ext.create('Todo.view.TodoNavigation');
        Ext.Viewport.add(this.navigation);
    },

    "todo navigation bar controller is set" : function() {
        assert(this.navigation.getController());
        assert.equals(Ext.getClassName(this.navigation.getController()), 'Todo.controller.TodoNavigationBarController');
    }
});

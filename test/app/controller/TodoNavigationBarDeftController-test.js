var assert = buster.assertions.assert;
var refute = buster.assertions.refute;


buster.testCase("TodoNavigationDeftController",  {
    setUp: function() {
        var me = this;
        this.fireEventSpy = me.spy();
        this.addEventListenerSpy = me.spy();

        Deft.Injector.configure({
            eventBus: {
                fn: function() {
                    return {
                        fireEvent: me.fireEventSpy,
                        addEventListener: me.addEventListenerSpy
                    }
                }
            }
        });

        this.navigation = Ext.create('Todo.view.TodoNavigation');
        Ext.Viewport.add(this.navigation);
    },

    tearDown: function() {
        Ext.Viewport.remove(this.navigation);
    },

    "todo navigation bar controller is set" : function() {
        assert(this.navigation.getController());
        assert.equals(Ext.getClassName(this.navigation.getController()), 'Todo.controller.TodoNavigationBarController');
    },

    "todo navigation bar controller registers eventlisteners" : function() {
        var controller = this.navigation.getController();
        controller.onSaveTodoListButtonTap();
        assert.calledOnceWith(this.fireEventSpy, Todo.Event.SAVE_TODO_LIST);
    }
});

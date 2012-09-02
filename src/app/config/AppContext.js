Ext.define('Todo.config.AppContext', {

    alternateClassName: ['Todo.AppContext'],

    singleton: true,

    requires: [
        'Deft.ioc.Injector',
        'Deft.promise.Deferred',
        'Deft.promise.Promise',

        'Todo.proxy.TodoItemProxy',

        'Todo.config.Properties',
        'Todo.event.EventBus',
        'Todo.util.UserNotifier'
    ],

    configure: function () {
        Deft.Injector.configure({

            eventBus    : {
                fn: function () {
                    return Ext.create('Todo.event.EventBus');
                }
            },
            userNotifier: {
                className: 'Todo.util.UserNotifier'
            },
            // service URLs
            properties  : {
                className: 'Todo.config.Properties'
            }
        });
    }
});

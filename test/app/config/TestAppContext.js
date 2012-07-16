Ext.define('Testing.config.TestAppContext', {

    alternateClassName: ['Testing.TestAppContext'],

    singleton: true,

    requires: [
        'Deft.ioc.Injector',
        'Deft.promise.Deferred',
        'Deft.promise.Promise',

        'Todo.event.EventBus',
        'Todo.util.UserNotifier'
    ],

    configure: function () {
        Deft.Injector.configure({

            eventBus: {
                className: 'Todo.event.EventBus'
            },
            userNotifier: {
                className: 'Todo.util.UserNotifier'
            }
        });
    }
});

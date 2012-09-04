Ext.define('Testing.config.TestAppContext', {

    alternateClassName: ['Testing.TestAppContext'],

    singleton: true,

    requires: [
        'Deft.ioc.Injector',
        'Deft.promise.Deferred',
        'Deft.promise.Promise',
        'Testing.config.Properties',
        'Todo.event.EventBus',
        'Todo.util.UserNotifier'
    ],

    configure: function () {
        Deft.Injector.configure({

            eventBus: {
                className: 'Todo.event.EventBus'
            },

            // service URLs
            properties  : {
                className: 'Testing.config.Properties'
            }
        });
    }
});

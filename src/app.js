Ext.Loader.setConfig({
    paths         : {
        'Todo': 'app',
        'Deft'   : 'lib/DeftJS/src/js/Deft'
    }
});

Ext.syncRequire(['Todo.i18n.Messages']);

Ext.require(['Todo.config.AppContext'],
    function () {
        Todo.AppContext.configure();
    }
);

Ext.application({
    name: 'Todo',

    requires: [
        'Ext.MessageBox'
    ],

    models: [
        'TodoListModel',
        'TodoItemModel'
    ],
    stores: ['TodoListStore', 'TodoItemStore'],
    controllers: ['TodoNavigationController', 'TodoItemController'],
    views: ['TodoNavigation'],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('Todo.view.TodoNavigation'));
//        Ext.Viewport.add(Ext.create('Todo.view.TodoItemForm'));
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});

//var config = {
//    "mode" : "testing",
//    "testing": {
//        "host" : ''
//    }
//};

Ext.Loader.setConfig({
//    enabled: true,
    paths  : {
        'Todo'   : 'src/app',
        'Testing': 'test/app',
        'Deft'   : 'src/lib/DeftJS/src/js/Deft'
    }
});


Ext.syncRequire(['Testing.config.TestAppContext'], function () {
    Testing.TestAppContext.configure();
});


Ext.application({
    name: 'Todo',
    stores: ['TodoListStore', 'TodoItemStore'],
    launch: function () {
        if (buster != undefined && buster.hasOwnProperty('run')) {
            buster.run();
        }
    }
});


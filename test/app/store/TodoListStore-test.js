var assert = buster.assertions.assert;
var refute = buster.assertions.refute;
var format = buster.format;

buster.testCase("TodoListStore", {

    setUp : function(done) {
        this.store = Ext.create('Todo.store.TodoListStore');
        this.store.load(function(records, operation, success) {
            done();
        });
    },

    tearDown : function() {

    },

    "should be auto load enabled": function () {
        var store = Ext.create('Todo.store.TodoListStore');
        assert(store.getAutoLoad());
    },

    "should have three todo lists": function () {
        assert.equals(this.store.getCount(), 3);
    },

    "should load todo lists from GET: '/api/todolists'": function (done) {
        var httpServer = sinon.fakeServer.create();
        var store = Ext.create('Todo.store.TodoListStore', {autoLoad: false});
        assert.equals(store.getCount(), 0, "the store must be empty when it is created");

        store.load(function() {
            assert.equals(store.getCount(), 1, "the store must have one password after loading");
//            TODO FIX me!!!!
//            assert.equals(store.getAt(0).getListName(), 'list');
            done();
        });

        assert.equals(httpServer.requests.length, 1, "there must be one request on the server by now");

        var request = httpServer.requests[0];
        assert.match(request, {
            method: "GET",
            url   : 'api/todolists'
        });

        request.respond(
            200, { "Content-Type": "application/json" },
            buster.format.ascii([{name:  'list', _id: '1', todoLists: []}])
        );

        httpServer.restore();
    },

    "should create todo lists with POST: '/api/todolists'": function () {

        var httpServer = sinon.fakeServer.create();
        var store = Ext.create('Todo.store.TodoListStore', {autoLoad: false});

        var todolist = Ext.create('Todo.model.TodoListModel', {name: 'list'});
        store.add(todolist);
        store.sync();

        var request = httpServer.requests[0];

        assert.match(request, {
            requestHeaders: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            url   : 'api/todolists'
        });

        httpServer.restore();
    },

    "should update todo lists wit PUT: '/api/todolists/:id'": function() {
        var httpServer = sinon.fakeServer.create();
        var todolist = this.store.getAt(0);
        todolist.setListName('new name');
        this.store.sync();

        var request = httpServer.requests[0];
        assert.match(request, {
            requestHeaders: {
                'Content-Type': 'application/json'
            },
            method: "PUT",
            url   : 'api/todolists/' + todolist.getId()
        });
        httpServer.restore();
    },

    "should delete todo lists wit DELETE: '/api/todolists/:id'": function() {
        var httpServer = sinon.fakeServer.create();
        var todolist = this.store.getAt(0);
        this.store.remove(todolist);
        this.store.sync();

        var request = httpServer.requests[0];
        assert.match(request, {
            requestHeaders: {
                'Content-Type': 'application/json'
            },
            method: "DELETE",
            url   : 'api/todolists/' + todolist.getId()
        });
        httpServer.restore();
    }
});

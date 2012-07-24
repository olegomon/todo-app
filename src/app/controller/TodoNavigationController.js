Ext.define('Todo.controller.TodoNavigationController', {
    extend: 'Ext.app.Controller',

    mixins: [
        'Deft.mixin.Injectable'
    ],

    inject: {
        eventBus: 'eventBus'
    },

    config: {
        // this property stub is made for injection
        eventBus: null,

        refs: {
            todoNavigation: 'todonavigation',
            todoGroupList : 'todolist',
            todoList      : 'todoitemlist'
        },

        control: {

            todoNavigation: {
                activate: 'onTodoNavigationActivate'
            },

            todoGroupList: {
                itemtap: 'onGroupListItemTap'
            },

            todoList: {
                itemtap: 'onTodoListItemTap'
            }
        }
    },

    constructor: function (config) {
        this.initConfig(config);
        return this;
    },

    init: function () {
        // register event listeners
        var eventBus = this.getEventBus();
        eventBus.addListener(Todo.EventType.SHOW_CREATE_TODO_LIST, this.onTodoListCreateEvent, this);
        eventBus.addListener(Todo.EventType.SHOW_CREATE_TODO, this.onTodoCreateEvent, this);
        eventBus.addListener(Todo.EventType.SHOW_EDIT_TODO, this.onTodoEditEvent, this);
    },

    onTodoNavigationActivate: function (list, eOpts) {
        // TODO load todo lists
    },

    onTodoListCreateEvent: function () {
        var navigation = this.getTodoNavigation();
        navigation.push({
            xtype: 'todogroupform',
            title: 'New ToDo List'
        });
    },

    onTodoCreateEvent: function () {
        var navigation = this.getTodoNavigation();
        navigation.push({
            xtype: 'todoitemform',
            title: 'New ToDo'
        });
    },

    onTodoCreatedEvent: function () {
        this.popNavigationView();
    },

    onTodoSavedEvent: function (todo) {
        this.popNavigationView();
    },

    onShowListEvent: function () {
        var navigation = this.getTodoNavigation();
        navigation.pop(navigation.getCount());
    },

    onTodoDeletedEvent: function () {
        this.popNavigationView(2);
    },

    onTodoEditEvent: function () {
        var navigation = this.getTodoNavigation();
        var todoDetail = navigation.getActiveItem();
        navigation.push({
            xtype : 'todoitemform',
            title : 'Edit ToDo',
            record: todoDetail.getRecord()
        });
    },

    onTodoListItemTap: function (list, index, target, record, e, eOpts) {
        var navigation = this.getTodoNavigation();
        navigation.push({
            xtype : 'todoitemdetail',
            title : record.get('name'),
            record: record
        });

        Ext.defer(function () {
            list.deselect(index);
        }, 300);
    },

    onGroupListItemTap: function (list, index, target, record, e, eOpts) {
        var navigation = this.getTodoNavigation();
        navigation.push({
            xtype: 'todoitemlist',
            title: record.get('listname')
//            record: record
        });

        Ext.defer(function () {
            list.deselect(index);
        }, 300);
    },

//    onTodoCreateEvent: function (button, event, eOpts) {
//        var navigation = this.getTodoNavigation();
//        navigation.push({ xtype: 'todocreateform' });
//    },

    popNavigationView: function (count) {
        var navigation = this.getTodoNavigation();
        navigation.pop(count);
    }
});
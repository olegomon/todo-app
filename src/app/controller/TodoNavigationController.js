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
            todoList : 'todolist',
            todoItemList      : 'todoitemlist'
        },

        control: {

            todoNavigation: {
                activate: 'onTodoNavigationActivate'
            },

            todoList: {
                itemtap: 'onTodoListItemTap'
            },

            todoItemList: {
                itemtap: 'onTodoItemTap'
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
        eventBus.addListener(Todo.EventType.SHOW_CREATE_TODO_ITEM, this.onTodoCreateEvent, this);
        eventBus.addListener(Todo.EventType.SHOW_EDIT_TODO_ITEM, this.onTodoEditEvent, this);
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
        var listRecord = this.getTodoItemList().listRecord;
        var navigation = this.getTodoNavigation();
        navigation.push({
            xtype: 'todoitemform',
            title: 'New ToDo',
            todoListId: listRecord.getId()
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

    onTodoItemTap: function (list, index, target, record, e, eOpts) {
        var navigation = this.getTodoNavigation();
        navigation.push({
            xtype : 'todoitemdetail',
            record: record
        });

        Ext.defer(function () {
            list.deselect(index);
        }, 300);
    },

    onTodoListItemTap: function (list, index, target, record, e, eOpts) {
        var navigation = this.getTodoNavigation();
        navigation.push({
            xtype: 'todoitemlist',
            store: record.todoItems(),
            listRecord: record
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
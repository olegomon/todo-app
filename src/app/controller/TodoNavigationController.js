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
            todoList: 'todolist',
            todoItemList: 'todoitemlist'
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
        eventBus.addListener(Todo.Event.SHOW_CREATE_TODO_LIST, this.onTodoListCreateEvent, this);
        eventBus.addListener(Todo.Event.SHOW_CREATE_TODO_ITEM, this.onTodoCreateEvent, this);
        eventBus.addListener(Todo.Event.SHOW_EDIT_TODO_ITEM, this.onTodoEditEvent, this);

        eventBus.addListener(Todo.Event.TODO_LIST_SAVED, this.onTodoListSavedEvent, this);
        eventBus.addListener(Todo.Event.TODO_LIST_DELETED, this.onTodoListDeletedEvent, this);

        eventBus.addListener(Todo.Event.TODO_ITEM_SAVED, this.onTodoItemSavedEvent, this);
        eventBus.addListener(Todo.Event.TODO_ITEM_DELETED, this.onTodoItemDeleted, this);

    },

    onTodoNavigationActivate: function (list, eOpts) {
        // TODO load todo lists
    },

    onTodoItemSavedEvent: function() {
        this.popNavigationView();
    },

    onTodoItemDeleted: function() {
        this.popNavigationView();
    },

    onTodoListSavedEvent: function() {
        this.popNavigationView();
    },

    onTodoListDeletedEvent: function() {
        this.popNavigationView();
    },

    onTodoListCreateEvent: function () {
        var navigation = this.getTodoNavigation();
        navigation.push({
            xtype: 'todolistform',
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

    popNavigationView: function (count) {
        var navigation = this.getTodoNavigation();
        navigation.pop(count);
    }
});
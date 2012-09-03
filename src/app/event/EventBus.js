Ext.define('Todo.event.EventBus', {
    alternateClassName: 'Todo.EventBus',

    requires: ['Todo.event.Event'],

    mixins: ['Ext.mixin.Observable'],

    singleton: true
});

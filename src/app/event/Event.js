Ext.define('Todo.event.Event', {

    alternateClassName:'Todo.Event',

    statics:{
        SHOW_CREATE_TODO_LIST:'SHOW_CREATE_TODO_LIST',
        SHOW_CREATE_TODO_ITEM:'SHOW_CREATE_TODO_ITEM',
        SHOW_EDIT_TODO_ITEM:'SHOW_EDIT_TODO_ITEM',

        SAVE_TODO_ITEM:'SAVE_TODO_ITEM',
        SAVE_TODO_LIST:'SAVE_TODO_LIST',

        DELETE_TODO_ITEM:'DELETE_TODO_ITEM',
        DELETE_TODO_LIST:'DELETE_TODO_LIST',

        TODO_LIST_SAVED: 'TODO_LIST_SAVED',
        TODO_LIST_DELETED: 'TODO_LIST_DELETED',

        TODO_ITEM_SAVED: 'TODO_ITEM_SAVED',
        TODO_ITEM_DELETED: 'TODO_ITEM_DELETED'
    }
});
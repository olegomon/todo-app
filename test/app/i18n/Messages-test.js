var assert = buster.assertions.assert;
var refute = buster.assertions.refute;

buster.testCase("Messages", {

    "test class alias is created": function() {
        assert.same(Messages, Todo.i18n.Messages);
    },

    "test get value" : function() {
        var message = Messages.translate(Object.getOwnPropertyNames(Messages.getBundle().messages)[0]);
        var expected = Messages.getBundle().messages[Object.getOwnPropertyNames(Messages.getBundle().messages)[0]];
        assert.equals(message, expected);
    },

    "test Messages is a singleton" : function() {
        assert(Messages.singleton);
    },

    "test messages returns the key itself if the translation was not found" : function() {
        var messages = Messages;
        assert.equals(messages.translate('invalid'), 'invalid');
    },

    "test messages returns null if the key is not truthy" : function() {
        var messages = Messages;
        assert.equals(messages.translate(''), null);
        assert.equals(messages.translate(null), null);
        assert.equals(messages.translate(undefined), null);
    }
});
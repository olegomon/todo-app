var assert = buster.assertions.assert;
var refute = buster.assertions.refute;

buster.testCase("Bundle", {

    "test EN and DE bundles have the same message keys": function() {

        var deBundle = Ext.create('Todo.i18n.Bundle_de');
        var enBundle = Ext.create('Todo.i18n.Bundle_en');

        var enNames = Object.getOwnPropertyNames(enBundle.messages);
        var deNames = Object.getOwnPropertyNames(deBundle.messages);

        assert(enNames);
        assert(deNames);

        assert.equals(deNames, enNames);
    }
});
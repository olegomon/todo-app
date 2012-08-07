Ext.define('Todo.i18n.Messages', {

    requires: [
        'Todo.i18n.Bundle_de',
        'Todo.i18n.Bundle_en'
    ],

    alternateClassName: ['Messages'],

    singleton: true,

    /**
     * Default language to use
     *
     * @private
     */
    defaultLanguage: 'de',

    /**
     * I18n Bundle
     *
     * @private
     */
    bundle: null,

    constructor: function (config) {
        var me = this,
            language = me.getLanguageCode();
        this.bundle = Ext.create('Todo.i18n.Bundle_' + language);
        this.initConfig(config);

        return this;
    },

    /**
     * Returns the current bundle
     * @return {*}
     */
    getBundle: function () {
        return this.bundle;
    },

    /**
     *
     * @private
     * @param key the key to translate
     * @return {*} translated value or null
     */
    translate: function (key) {
        if(key) {
            var message = this.getBundle().getMsg(key);
            return message ? message : '!' + key + '!';
        }
        return null;
    },

    getLanguageCode: function() {
        return this.formatLanguageCode(this.guessLanguage());
    },

    /**
     * @private
     */
    formatLanguageCode: function (lang) {
        var langCodes = lang.split('-');
        langCodes[0] = (langCodes[0]) ? langCodes[0].toLowerCase() : '';
        return langCodes[0];
    },

    /**
     * @private
     */
    guessLanguage: function () {
        return (navigator.language || navigator.browserLanguage
            || navigator.userLanguage || this.defaultLanguage);
    }
});
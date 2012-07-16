Ext.define('Todo.util.UserNotifier', {

    alternateClassName: 'Todo.UserNotifier',

    requires: [
        'Todo.i18n.Messages',
        'Ext.MessageBox'
    ],

    constructor: function (config) {
        this.initConfig();

        /**
         * Override the default button names with our i18ned values
         *
         * see also MessageBox statics block!!!
         */
        Ext.apply(Ext.MessageBox.YESNO, [
            {text: Messages.translate('button.no'), itemId: 'no'},
            {text: Messages.translate('button.yes'), itemId: 'yes', ui: 'action'}
        ]);

        Ext.apply(Ext.MessageBox.YESNOCANCEL, [
            {text: Messages.translate('button.cancel'), itemId: 'cancel'},
            {text: Messages.translate('button.no'), itemId: 'no'},
            {text: Messages.translate('button.yes'), itemId: 'yes', ui: 'action'}
        ]);

        Ext.apply(Ext.MessageBox.OKCANCEL, [
            {text: Messages.translate('button.cancel'), itemId: 'cancel'},
            {text: Messages.translate('button.ok'), itemId: 'ok', ui: 'action'}
        ]);

        Ext.apply(Ext.MessageBox.OK, {text: Messages.translate('button.ok'), itemId: 'ok', ui: 'action'});
        Ext.apply(Ext.MessageBox.YES, {text: Messages.translate('button.yes'), itemId: 'yes', ui: 'action'});
        Ext.apply(Ext.MessageBox.NO, {text: Messages.translate('button.no'), itemId: 'no'});
        Ext.apply(Ext.MessageBox.CANCEL, {text: Messages.translate('button.cancel'), itemId: 'cancel'});

        this.callParent(arguments);

        return this;
    },

    showAnimation: 'fadeIn',
    hideAnimation: 'fadeOut',

    ui: 'dark',

    errorKey: 'msg.error',
    infoKey : 'msg.info',

    showInfoMessage: function (message) {
        return this.innerAlert(Messages.translate(this.infoKey), message);
    },

    showErrorMessage: function (message) {
        return this.innerAlert(Messages.translate(this.errorKey), message);
    },

    showMessage: function (titleKey, message) {
        return this.innerAlert(Messages.translate(titleKey), message);
    },

    alert: function (titleKey, messageKey) {
        return this.innerAlert(Messages.translate(titleKey), Messages.translate(messageKey));
    },

    info: function (messageKey) {
        return this.innerAlert(Messages.translate(this.infoKey), Messages.translate(messageKey));
    },

    error: function (messageKey) {
        return this.innerAlert(Messages.translate(this.errorKey), Messages.translate(messageKey));
    },

    confirm: function (messageKey) {
        var deferred = Ext.create('Deft.Deferred');

        Ext.Msg.show({
            title      : Messages.translate('msg.confirm'),
            message    : Messages.translate(messageKey),
            buttons    : Ext.MessageBox.YESNO,
            promtConfig: false,

            showAnimation: this.showAnimation,
            hideAnimation: this.hideAnimation,

            ui: this.ui,

            fn: function (buttonId) {
                if (buttonId === 'yes') {
                    deferred.resolve();
                } else {
                    deferred.cancel('canceled');
                }
            }
        });


        return deferred.getPromise();
    },

    /**
     * @private
     */
    innerAlert: function (title, message) {
        var deferred = Ext.create('Deft.Deferred');
        Ext.Msg.show({
            title      : title,
            message    : message,
            buttons    : Ext.MessageBox.OK,
            promtConfig: false,
            ui: this.ui,
            showAnimation: this.showAnimation,
            hideAnimation: this.hideAnimation,

            ui: this.ui,

            fn: function () {
                deferred.resolve();
            }
        });
        return deferred.getPromise();
    }
});
buster.spec.expose(); // Make some functions global

describe("deferred", function(){
    var cancelCallback, deferred, failureCallback, progressCallback, successCallback;
    deferred = null;
    successCallback = failureCallback = progressCallback = cancelCallback = null;

    beforeEach(function() {
        deferred = Ext.create('Deft.promise.Deferred');
        successCallback = this.spy('success callback');
        failureCallback = this.spy('failure callback');
        progressCallback = this.spy('progress callback');
        cancelCallback = this.spy('cancel callback');
    });

    it('should REJECT subsequent promises if the initial deferred has been rejected', function() {
        var deferred = Ext.create('Deft.promise.Deferred');
        deferred.reject('error');

        var promise = deferred.getPromise();

        promise.then(successCallback, failureCallback, progressCallback, cancelCallback);

        expect(promise.getState()).toBe('rejected');

        expect(successCallback).not.toHaveBeenCalled();
        expect(failureCallback).toHaveBeenCalledWith('error');
        expect(progressCallback).not.toHaveBeenCalled();
        expect(cancelCallback).not.toHaveBeenCalled();

    });

    it('should RESOLVE subsequent Promise when the nested Deferred is RESOLVED', function() {

        var deferred = Ext.create('Deft.promise.Deferred');
        var promise = deferred.getPromise();

        var deferredReturnValue, promiseReturnValue;

        promise.then({
            success: function (value) {
                deferredReturnValue = Ext.create('Deft.promise.Deferred');
                promiseReturnValue = deferredReturnValue.getPromise();
                return promiseReturnValue;
            }
        }).then(successCallback, failureCallback, progressCallback, cancelCallback);

        deferred.resolve('resolved');
        deferredReturnValue.resolve('resolved value');

        expect(promise.getState()).toBe('resolved');
        expect(promiseReturnValue.getState()).toBe('resolved');

        expect(successCallback).toHaveBeenCalledWith('resolved value');
        expect(failureCallback).not.toHaveBeenCalled();
        expect(progressCallback).not.toHaveBeenCalled();
        expect(cancelCallback).not.toHaveBeenCalled();
    });

    it('should REJECT subsequent Promise when the nested Deferred is REJECTED', function() {

        var deferred = Ext.create('Deft.promise.Deferred');
        var promise = deferred.getPromise();

        var deferredReturnValue, promiseReturnValue;

        promise.then({
            success: function (value) {
                deferredReturnValue = Ext.create('Deft.promise.Deferred');
                promiseReturnValue = deferredReturnValue.getPromise();
                return promiseReturnValue;
            }
        }).then(successCallback, failureCallback, progressCallback, cancelCallback);

        deferred.resolve('resolved');
        deferredReturnValue.reject('reject value');

        expect(promise.getState()).toBe('resolved');
        expect(promiseReturnValue.getState()).toBe('rejected');

        expect(successCallback).not.toHaveBeenCalled();
        expect(failureCallback).toHaveBeenCalledWith('reject value');
        expect(progressCallback).not.toHaveBeenCalled();
        expect(cancelCallback).not.toHaveBeenCalled();
    });
});

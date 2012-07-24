var config = (function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'config.json', false);
    xhr.send(null);

    var options = eval("(" + xhr.responseText + ")"),
        config = options.config || {};
    return config;
})();

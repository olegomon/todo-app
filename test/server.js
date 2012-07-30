var http = require("http");
var rs = require("buster-resources");

var middleware = rs.resourceMiddleware.create("/data");

var set = rs.resourceSet.create();
set.addResource({
    path   : "/todolists",
    content: function (promise) {
        fs.readFile("/todolists.json", function (err, data) {
            if (err) {
                promise.reject(err);
            } else {
                promise.resolve(data);
            }
        });
    }
});

middleware.mount(set);

http.createServer(function (req, res) {
    if (middleware.respond(req, res)) {
        return;
    }
    res.writeHead(404);
    res.end();
}).listen(8080);

// Test it
http.request({
    host: "localhost",
    port: 8080,
    path: "/todolists"
}, function (res) {
    res.setEncoding("utf8");
    res.on("data", function (chunk) {
        console.log(chunk);
    });
}).end();
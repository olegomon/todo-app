var config = module.exports;

config["Browser"] = {
    rootPath   : "../",
    environment: "browser", // or "node"

    autoRun  : false,
    libs     : [
        "src/sdk/sencha-touch-all.js",
    ],
    resources: [
        // some additional classes which are loaded on demand
        "src/lib/DeftJS/src/js/Deft/**/*.js",
        "test/app/config/TestAppContext.js",
        "test/app/config/Properties.js",

        {
            path: "api/todolists",
            file: "test/data/todolists.json"
        },
        {
            path: "api/todolists/1",
            file: "test/data/todolists-1.json"
        },
        {
            path: "api/todolists/2",
            file: "test/data/todolists-2.json"
        },
        {
            path: "api/todolists/3",
            file: "test/data/todolists-3.json"
        }
    ],

    sources: [
        "test/app-test.js",
        "src/app/**/*.js",
    ],

    tests: [
        "test/app/**/*-test.js"
    ]
};


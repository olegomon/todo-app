var config = module.exports;

config["Browser"] = {
    rootPath   : "../",
    environment: "browser", // or "node"

    autoRun  : false,
    libs     : [
        "src/sdk/sencha-touch-all.js"
    ],
    resources: [
        // resources which should made available on demand
        "src/lib/DeftJS/src/js/Deft/**/*.js",
        "test/app/config/TestAppContext.js",
        "test/app/config/Properties.js",

        // static resources to be accessible during the tests
        {
            path: "api/todolists",
            file: "test/api/todolists.json"
        }
    ],

    sources: [
        "test/app-test.js",
        "src/app/**/*.js"
    ],

    tests: [
        "test/app/**/*-test.js"
    ]
};


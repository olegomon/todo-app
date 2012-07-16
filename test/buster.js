var config = module.exports;

config["Browser"] = {
    rootPath: "../",
    environment: "browser", // or "node"

    autoRun: false,
    libs: [
        "src/sdk/sencha-touch-all.js",
    ],
    resources: [
        // some additional classes which are loaded on demand
        "src/lib/DeftJS/src/js/Deft/**/*.js",
        "test/app/config/TestAppContext.js",
    ],

    sources: [
        "test/app-test.js",
        "src/app/**/*.js",
    ],

    tests: [
        "test/app/**/*-test.js"
    ]
};

module.exports = {
    inputFiles: [
        "demo/angular.bundle.js",
        "demo/react.bundle.js",
        "demo/vue.bundle.js",
        "demo/angular/index.ejs.html",
        "demo/react/index.ejs.html",
        "demo/vue/index.ejs.html"
    ],
    outputFiles: [
        "demo/angular/index.html",
        "demo/react/index.html",
        "demo/vue/index.html"
    ],
    json: false,
    ejsOptions: {
        rmWhitespace: true
    },
    sha: 256,
        customNewFileName: (filePath, fileString, md5String, baseName, extensionName) => baseName + "-" + md5String + extensionName,
};
(function (global) {
    System.config({
        warnings: true,
        baseURL: './src',
        transpiler: 'plugin-babel',
        paths: {
            'npm:': './node_modules/'
        },
        map: {
            'plugin-babel': 'npm:systemjs-plugin-babel/plugin-babel.js',
            'systemjs-babel-build': 'npm:systemjs-plugin-babel/systemjs-babel-node.js'
        },
        packages: {
            module1: {
                defaultExtension: 'js'
            },
            module2: {
                defaultExtension: 'ts'
            }
        }
    });
})(this);
// lib/containter-di.js
const argList = require('args-list');

module.exports = function () {
    const dependencies = {};
    const factories = {};
    const di = {
        factory,
        register,
        inject,
        get
    };

    function factory(name, factory) {
         factories[name] = factory;
    }

    function register(name, dependency) {
        dependencies[name] = dependency;
    }

    function inject(factory) {
        const args = argList(factory)
            .map(dependency => di.get(dependency));

        console.log('______');
        console.log(factory);
        args.forEach(element => {
            console.log(element);
        });
        console.log('______');
        return factory.apply(null, args);
    }

    function get(name) {
        if (!dependencies[name]) {
            const factory = factories[name];
            dependencies[name] = factory && di.inject(factory);
            
            if (!dependencies[name]) {
                throw new Error('No existe este módulo en el CDI');
            }
        }
        return dependencies[name];
    }

    return di;
}
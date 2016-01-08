var _ = require('underscore');

module.exports = function(opts) {
    var options = _.extend({
        ignoreErrors: false
    }, opts);

    function define() {
        var factory      = _.last(arguments),
            dependencies = arguments[arguments.length - 2],
            module       = arguments.callee.caller.arguments[2],
            name         = _.isString(arguments[0]) ? arguments[0] : null;

        if (name) module.id = name;
        module.exports = factory.apply(module, _.map(dependencies, load, module));
    }

    function load(dep) {
        if (!options.ignoreErrors) return this.require(dep);
        try {
            return this.require(dep);
        } catch(e) {
            console.error('module not found: ' + dep);
        }
    }

    return define;
};
const Good = require('good');
const GoodConsole = require('good-console');

const consoleLogging = {
    plugin: Good,
    options: {
        ops: {
            interval: 1000
        },
        reporters: {
            consoleReporter: [
                {
                    module: 'good-squeeze',
                    name: 'Squeeze',
                    args: [{ response: '*', log: '*' }]
                },
                {
                    module: 'good-console'
                },
                'stdout'
            ]
        }
    }
};

module.exports = consoleLogging;
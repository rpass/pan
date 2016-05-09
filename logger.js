var logger = require('winston');

var log = function(input) {
    logger.log('info', input);
};

module.exports = {
    log: log
}

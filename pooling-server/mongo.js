var mongo = require('mongodb')

module.exports = mongo;

module.exports.open = function open(callback) {
    var server = new mongo.Server('127.0.0.1', 27017, {});
    new mongo.Db('test', server, {w:1}).open(callback);
}
var mongo = require('../mongo'),
    util = require('../util'),
    async = require('async'),
    _super = require('./baseService'),
    _ = require('underscore')


function trackService() {
    _super.apply(this, ["track"])
}

util.extend(trackService, _super)

module.exports = new trackService()








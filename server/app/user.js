var mongo = require('../mongo'),
    util = require('../util'),
    async = require('async'),
    _super = require('./baseService'),
    _ = require('underscore')


function userService() {
    _super.apply(this, ["user"])
}

util.extend(userService, _super)

module.exports = new userService()








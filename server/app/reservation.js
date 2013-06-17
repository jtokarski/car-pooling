var mongo = require('../mongo'),
    util = require('../util'),
    async = require('async'),
    _super = require('./baseService'),
    _ = require('underscore')


function reservationService() {
    _super.apply(this, ["reservation"])
}

util.extend(reservationService, _super)

module.exports = new reservationService()








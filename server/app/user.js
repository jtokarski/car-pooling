var mongo = require('../mongo');

function userService() { }

userService.prototype.list = function (req, res) {
    res.send(200);
}

module.exports = new userService();
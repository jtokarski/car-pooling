var mongo = require('../mongo');

function authService() { }

authService.prototype.login = function (req, res) {
    if (!req.is('json')) {
        res.send(415)
        return;
    }
    if (!req.body) {
        res.send(400, "Request cannot be empty")
        return;
    }
    res.send(200);
}

authService.prototype.logout = function (req, res) {
    res.send(200);
}

module.exports = new authService();
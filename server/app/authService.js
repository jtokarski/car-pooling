var mongo = require('../mongo');

function authService() { }

authService.prototype.login = function (req, res) {
    if (!req.is('json') || !req.body) {
        res.send({'status':'error'})
        return;
    }
    
    req.session.credentials = req.body
    res.send({'status':'success'});
}

authService.prototype.logout = function (req, res) {
    req.session = null
//    {status : success, incorrect, error}
    res.send({'status' : 'success'})
//    res.send(200);
}

module.exports = new authService();
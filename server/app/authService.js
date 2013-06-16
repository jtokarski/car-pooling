var mongo = require('../mongo');

function authService() { }

authService.prototype.login = function (req, res) {
    if (!req.is('json') || !req.body) {
//        console.log('malformed login request')
        res.send({'status':'error'})
        return;
    }
    
    if (!req.body.hasOwnProperty('domain') || !req.body.hasOwnProperty('user') || !req.body.hasOwnProperty('password')) {
//        console.log('missing credential info')
        res.send({'status':'error'})
        return;
    }
//    console.log(req.session)
    req.session.credentials = req.body
//    console.log(req.session)
    res.send({'status':'success'});
}

authService.prototype.logout = function (req, res) {
//    console.log(req.session)
    if (!req.session.hasOwnProperty('credentials')) {
        res.send({'status' : 'error'})
        return
    }
    
    req.session = null
//    {status : success, incorrect, error}
    res.send({'status' : 'success'})
//    res.send(200);
}

module.exports = new authService();
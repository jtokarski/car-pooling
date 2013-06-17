var user = require('./app/user'),
    track = require('./app/track'),
    reserv = require('./app/reservation'),
    authService = require('./app/authService');
    

module.exports = function (app) {
    app.post('/login/', authService.login.bind(authService));
    app.post('/logout/', authService.logout.bind(authService));
    
    app.post('/user/', user.create.bind(user));
    app.get('/user/', user.list.bind(user));
    app.get(/\/user\/(\w{24})/, user.get.bind(user));
    app.del(/\/user\/(\w{24})/, user.delete.bind(user));
    app.put(/\/user\/(\w{24})/, user.put.bind(user));
    
    app.post('/track/', user.create.bind(user));
    app.get('/track/', user.list.bind(user));
    app.get(/\/track\/(\w{24})/, user.get.bind(user));
    app.del(/\/track\/(\w{24})/, user.delete.bind(user));
    app.put(/\/track\/(\w{24})/, user.put.bind(user));
    
    app.post('/reservation/', user.create.bind(user));
    app.get('/reservation/', user.list.bind(user));
    app.get(/\/reservation\/(\w{24})/, user.get.bind(user));
    app.del(/\/reservation\/(\w{24})/, user.delete.bind(user));
    app.put(/\/reservation\/(\w{24})/, user.put.bind(user));
}
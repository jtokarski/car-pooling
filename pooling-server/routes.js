var user = require('./app/user'),
        authService = require('./app/authService');

module.exports = function (app) {
    app.post('/login/', authService.login.bind(authService));
    app.get('/logout/', authService.logout.bind(authService));
    
    app.get('/user/', user.list.bind(user));
}
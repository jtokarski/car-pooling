

var CPUserEntity = ( function() {
    function CPUserEntity(nickname, role) {
        
        if ( nickname && nickname.length > 0 )
            this.nickname = nickname;
        else
            this.nickname = ''; 
        
        if ( role && role > 0 )
            this.role = role;
        else
            this.role = this.ROLE_PUBLIC;
        
    }
    
    CPUserEntity.prototype.ROLE_PUBLIC = 1;
    CPUserEntity.prototype.ROLE_ANON = 2;
    CPUserEntity.prototype.ROLE_USER_INIT = 3;
    CPUserEntity.prototype.ROLE_USER_FULL = 4;
    CPUserEntity.prototype.ROLE_ADMIN = 5;
    
    CPUserEntity.prototype.defaultRoutes = {};
    CPUserEntity.prototype.defaultRoutes
        [CPUserEntity.prototype.ROLE_PUBLIC] = '/log-in';
    CPUserEntity.prototype.defaultRoutes
        [CPUserEntity.prototype.ROLE_ANON] = '/log-in';
    CPUserEntity.prototype.defaultRoutes
        [CPUserEntity.prototype.ROLE_USER_INIT] = '/log-in';
    CPUserEntity.prototype.defaultRoutes
        [CPUserEntity.prototype.ROLE_USER_FULL] = '/log-in';
    CPUserEntity.prototype.defaultRoutes
        [CPUserEntity.prototype.ROLE_ADMIN] = '/log-in';
    
    CPUserEntity.prototype.getDefaultRoute = function() {
        return this.defaultRoutes[this.role];
    }
    
    
    return CPUserEntity;
}).call(this);


var adclient = require('adclient')

module.exports = adclient;

module.exports.open = function open() {
//    console.log(adclient)
    this.client = new adclient({
        'url':'ldap://pgs-soft.com',
        'groupSearchFilter':'(objectclass=*)',
        'groupSearchAttributes':'sAMAccountName=%s',
        'userSearchFilter':'(objectclass=*)',
        'userSearchAttributes':['cn', 'name', 'distinguishedName', 'mail'],
        'groupSearchDN':'DC=pgs-soft, DC=com',
        'masterDn':'DC=pgs-soft, DC=com',
        'masterPw':''
    })
    
    this.client.createClients(function (err) { if (err) { console.log(err) } })
}

module.exports.close = function close(callback) {
    this.client.close(callback)
}

module.exports.authUser = function authUser(username, password, callback) {
    this.client.authUser(username, password, callback)
}

module.exports.authUserDn = function authUserDn(userDn, password, callback) {
    this.client.authUserDn(userDn, password, callback)
}


/*  
LDAP Server: ldap://pgs-soft.com
Use TLS: no
DN for binding: pgs-soft.com
Password for binding: <puste>
Base DN: DC=pgs-soft, DC=com
User Mask: sAMAccountName=%s
uid field: name
Name Field: name
DN field: distinguishedName
email field: mail
*/
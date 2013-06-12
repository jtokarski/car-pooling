var adclient = require('adclient')

module.exports = adclient;

module.exports.open = function open() {
    var client = new adclient.adclient({
        'url':'ldap://pgs-soft.com',
        'userSearchFilter':'(objectclass=*)',
        'userSearchAttributes':['cn', 'name', 'distinguishedName', 'mail'],
        
    })
    
    
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
}
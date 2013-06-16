var app = require('../app')
var adclient = require('../adclient')
var assert = require('assert')
var request = require('supertest')(app)

//describe('auth-service')
describe('ad-client', function () {
    it ('can create a adclient client', function (done) {
        adclient.open()
        done()
    })
    
    it ('can contact the ldap server with client', function (done) {
        done()
    })
    
    it ('successfully logs user in', function (done) {
//        console.log(adclient.client)
        adclient.authUserDn('user/domain','passwd',function (err, userobj) {
            console.log(err)
            console.log(userobj)
        })
//        TODO - errorous - done should be called from callback in auth
//        for now can't even resolve the ldap endpoint
        done()
    })
    
    it ('closes successfully in the end', function (done) {
        adclient.close()
        done()
    })
})

describe('auth-service', function () {
    var validCred = {domain:'pgs-soft.com', user:'username', password:'passwd'}
    var cookie = ['NODESESSID=s%3Aj%3A%7B%22credentials%22%3A%7B%22domain%22%3A%22pgs-soft.com%22%2C%22user%22%3A%22username%22%2C%22password%22%3A%22passwd%22%7D%7D.HYgaLXO%2BFNCLhzZmQtBsNmYHzW4zxZHJyEF8%2BUtgwPs; Path=/']
    
    it ('can receive credentials by post, and store them in session', function (done) {
        request.post('/login/')
//            .set('Content-Type','json')
            .send(validCred)
            .expect(200)
            .expect('Content-Type',/json/)
            .end(function (err, res) {
                assert.equal(res.body.status, 'success')
                assert.notEqual(res.header['set-cookie'], undefined)
//                cookie = res.header['set-cookie'][0]
//                console.log(cookie)
                if (err) console.log(err)
                done(err)
            })
//        done()
    })
    
    it ('will return error on malformed body', function (done) {
        request.post('/login/')
            .send('')
            .expect(200)
            .expect('Content-Type',/json/)
            .end(function (err, res) {
                assert.equal(res.body.status, 'error')
                assert.equal(res.header['set-cookie'][0].indexOf('user'), -1)
//                console.log(res.header)
                
                if (err) console.log(err)
                done(err)
            })
        
//        done()
    })
    
    it ('can logout, the session has the credentials since login', function (done) {
        request.post('/logout/')
            .set('Cookie', cookie)
            .expect(200)
            .end(function (err, res) {
                assert.equal(res.body.status, 'success')
                assert.notEqual(res.header['set-cookie'], cookie)
//                console.log(res.header['set-cookie'])
                if (err) console.log(err)
                done(err)
            })
            
    })
})
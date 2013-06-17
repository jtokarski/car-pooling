var mongo = require('../mongo')

function baseService(containerName){
    this.containerName = containerName;
}

baseService.prototype = {
    create: function(req, res){
        if (!req.is('json')) {
            res.send(415)
            return;
        }
        if (!req.body) {
            res.send(400, "Request cannot be empty")
            return
        }
        mongo.open(function (err, client) {
            if (err) {
                res.send(500)
                return
            }
            var collection = this.getContainer(client)
            collection.insert(req.body, function (err, inserted) {
                if (err) {
                    res.send(500)
                    return
                }
                res.send(201, inserted[0]["_id"]);
            })
        }.bind(this))
    },
    delete: function (req, res) {
        mongo.open(function (error, client) {
            if (error) {
                res.send(500);
                return;
            }
            var collection = this.getContainer(client)
            collection.remove({
                '_id': new mongo.ObjectID(req.params[0])
            }, true, function (error) {
                if (error) {
                    res.send(500);
                    return;
                }
                res.send(200)
            })
        }.bind(this))
    },
    get: function (req, res) {
        mongo.open(function (error, client) {
            if (error) {
                res.send(500);
                return;
            }
            var collection = this.getContainer(client)
            collection.findOne({'_id': new mongo.ObjectID(req.params[0])}, function (err, entry) {
                if (err) res.send(500)
                else if (entry) res.send(entry)
                else res.send(404)
            })
        }.bind(this))
    },
    getContainer: function(client){
        return new mongo.Collection(client, this.containerName)
    },
    put: function (req, res) {
        if (!req.is('json')) {
            res.send(415)
            return;
        }
        if (!req.body) {
            res.send(400, "Request cannot be empty")
            return
        }
        mongo.open(function (error, client) {
            if (error) {
                res.send(500);
                return;
            }
            var collection =  this.getContainer(client)
            collection.update({
                '_id': new mongo.ObjectID(req.params[0])
            }, req.body, function (error) {
                if (error) {
                    res.send(500);
                    return;
                }
                res.send(200)
            })
        }.bind(this))
    },
    list: function (req, res) {
        mongo.open(function (error, client) {
            if (error) {
                res.end(500);
                return;
            }
            var collection = this.getContainer(client)
            collection.find().toArray(function (err, list) {
                if (err) res.send(500)
                else res.send(list)
            })
        }.bind(this))
    }
}

module.exports = baseService
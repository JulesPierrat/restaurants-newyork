var express = require('express');
var router = express.Router();

async function getRestaurants(){
    var MongoClient = require('mongodb').MongoClient;

    MongoClient.connect('mongodb://localhost:27017/test', function(err, client) {
        if (err) {
            throw err;
        }
        const db = client.db('test');
        return db.collection('restaurants').find().toArray(function(err, result) {
            if (err) {
                throw err;
            }

            res.send(result);
        });
    });
}

/* GET home page. */
router.get('/', function(req, res, next) {
  var MongoClient = require('mongodb').MongoClient;

    MongoClient.connect('mongodb://localhost:27017/test', function(err, client) {
        if (err) {
            throw err;
        }
        const db = client.db('test');
        return db.collection('restaurants').find().toArray(function(err, result) {
            if (err) {
                throw err;
            }

            res.send(result);
        });
    });
});

module.exports = router;
////////////////////////////////////////////////////////////////
//
// push notification service
//
////////////////////////////////////////////////////////////////
var io;
function realtimePushService() 
{
    console.log("%s - realtimePushService\n", new Date());
	
    io = require('socket.io').listen(8000);

    // io errors
    io.on('error', function (error) 
	{
        console.error("%s - realtimePushService - ioError: %s\n", new Date(), error);
    });

    // when client connect
    io.sockets.on('connection', function (socket) 
	{
        console.log('"%s - realtimePushService - client connected!\n', new Date());
        socket.on('disconnect', function () 
		{
            console.log('"%s - realtimePushService - client disconnected!\n', new Date());
        });
        socket.on('error', function (error) 
		{
            console.error("%s - realtimePushService - socetError:  %s\n", new Date(), error);
        });
    });
};

function sendDeltaToClients(json) 
{
    // {
	// 		
	//
	//
	// }
    io.sockets.emit('notification', parsedJSON);
}	
	


////////////////////////////////////////////////////////////////
//
// Server Serviecs
//
////////////////////////////////////////////////////////////////
var collectionUsers;
var collectionDashboard;
var ConnectToMongo = function () 
{
    var MongoClient = require('mongodb').MongoClient;
    MongoClient.connect("mongodb://localhost:27017/crypto", function (err, db) 
	{
        if (err) 
		{
            return console.error("%s - Mongo - can't connect!  %s\n", new Date(), error);
        }
        console.log("%s - Mongo - connected!\n", new Date());
        collectionDashboard = db.collection('Dashboard');
        collectionCandlesticks = db.collection('Candlesticks');
    });
};

var ServerExpressListener = function () 
{
    var express = require('express');
    var server = express();
    server.listen(8011);
    console.log("%s - ServerExpressListener\n", new Date());


	
	
    server.get('/getAllBallanceData', function (req, res) 
	{
		res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
        res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
        collectionDashboard.find().toArray(function (err, results) 
		{
            res.send(results);
        });
    });
};



realtimePushService();
ConnectToMongo();
ServerExpressListener();

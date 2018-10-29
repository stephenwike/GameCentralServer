// set up ======================================================================
var express = require('express');
var tv_app = express(); // GAME CENTRAL KIOSK
var an_app = express(); // ANDROID APP
var tv_server = require('http').Server(tv_app);
var an_server = require('http').Server(an_app);
var tv_io = require('socket.io')(tv_server);
var an_io = require('socket.io')(an_server);

// configuration ================================================================
var tv_app_port = 3000;
var an_app_port = 4000;

// socket io +===================================================================
require('./app/messagebroker/TV-IO-message-broker').Load(tv_io);
require('./app/messagebroker/AN-IO-message-broker').Load(an_io, tv_io);

// routes =======================================================================
tv_app.use(express.static('app'));
tv_app.set('views', __dirname + '/app/views');
require('./app/routes/router').SetupRouting(tv_app);

// fake routes ==================================================================
an_app.use(express.static('app'));
an_app.set('views', __dirname + '/app/views');
require('./app/routes/fakeRouter').SetupRouting(an_app);

// listen (start app with node server.js) =======================================
tv_server.listen(tv_app_port, () => {console.log("Listening on port " + tv_app_port);});
an_server.listen(an_app_port, () => {console.log("Listening on port " + an_app_port);});
	
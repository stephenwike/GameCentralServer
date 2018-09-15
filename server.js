// set up ======================================================================
var express = require('express');
var tv_app = express(); // GAME CENTRAL KIOSK
var an_app = express(); // ANDROID APP
var tv_server = require('http').Server(tv_app);
var an_server = require('http').Server(an_app);
var tv_io = require('socket.io')(tv_server);
var an_io = require('socket.io')(an_server);

// configuration ===============================================================
var tv_app_port = 3000;
var an_app_port = 4000;

// socket io +===================================================================
var playercount = 0;

tv_io.on('connection', (socket) => 
{	
	console.log("TV connected, id: " + socket.id);
	
	// Start listening for android apps
	an_server.listen(an_app_port, () => {console.log("Listening on port " + an_app_port);});
	
	socket.on('disconnect', (args) =>
	{
		// Close server for android app until tv reconnects
		console.log("TV disconnected, id: " + socket.id);
		
		// Emit tv disconnect to all players
		
		
		// Close app server
		an_server.close();
		console.log("Closing app server");
	});
	
	// Forward all events to android(s)
	//var onevent = socket.onevent;
	//socket.onevent = function (packet) 
	//{
	//	var args = packet.data || [];
	//	onevent.call (this, packet);    // original call
	//	packet.data = ["*"].concat(args);
	//	onevent.call(this, packet);      // additional call to catch-all
	//};
	//
	//socket.on('*', (evt, data) =>
	//{
	//	console.log("EVENT " + evt + ", DATA: "); 
	//	console.log(data);
	//	if (data["id"] == "*") 
	//	{
	//		an_io.emit(evt, data);
	//	}
	//	else
	//	{
	//		an_io.to(data["id"]).emit(evt, data);
	//	}
	//});
});

an_io.on('connection', (socket) => 
{
	console.log("App connected, id: " + socket.id);
	playercount++;
	
	var args = { "id": socket.id, "count": playercount };
	tv_io.emit('playerconnect', args);
	
	socket.on('disconnect', (args) =>
	{
		args = { "id": socket.id, "count": playercount };
		tv_io.emit('playerdisconnect', args);
		
		console.log("App disconnected, id: " + socket.id);
		//tv_io.emit('disconnect', args);
		playercount--;
	});
	
	socket.on('test', (args) =>
	{
		console.log("Test call caught");
	});
	
	// Forward all events to tv
	var onevent = socket.onevent;
	socket.onevent = function (packet) 
	{
		var args = packet.data || [];
		onevent.call (this, packet);    // original call
		packet.data = ["*"].concat(args);
		onevent.call(this, packet);      // additional call to catch-all
	};
	
	socket.on('*', (evt, data) =>
	{
		console.log("EVENT " + evt + ", DATA: "); 
		console.log(data);
		tv_io.emit(evt, data);
	});
});

// routes =======================================================================
tv_app.use(express.static('app'));
tv_app.use('/', require('./app/routes/router').router);

// listen (start app with node server.js) =======================================
tv_server.listen(tv_app_port, () => {
  console.log("Listening on port " + tv_app_port);
});
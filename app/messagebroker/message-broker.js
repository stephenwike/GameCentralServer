
var playersService = require('./../services/ConnectionTrackingService');
var gameConfigService = require('./../services/GameConfigService');

function SetupSockets(tv_io, an_io)
{
	tv_io.on('connection', (socket) => 
	{	
		// Track connections/disconnections ==============================================================
		console.log("TV connected, id: " + socket.id);
		socket.on('disconnect', (args) => {console.log("TV disconnected, id: " + socket.id);});
		
		// Forward all events to android(s) ==============================================================
		var onevent = socket.onevent;
		socket.onevent = function (packet) 
		{
			var args = packet.data || [];
			onevent.call (this, packet);    // original call
			packet.data = ["*"].concat(args);
			onevent.call(this, packet);     // additional call to catch-all
		};

		// Player Tracking ===============================================================================
		socket.on('getconnectionslist', (args) => {
			socket.emit('updateconnectionslist', playersService.PlayerList);
		});

		// Config Tracking ===============================================================================
		socket.on('getgameconfig', (args) => {
			var gameConfig = gameConfigService.GetGameConfig();
			socket.emit('configresult', gameConfig);
		});

		socket.on('*', (evt, data) =>
		{
			console.log("EVENT " + evt + ", DATA: "); 
			console.log(data);
			if (data["id"] == "*") 
			{
				an_io.emit(evt, data);
			}
			else
			{
				an_io.to(data["id"]).emit(evt, data);
			}
		});
	});
	
	an_io.on('connection', (socket) => 
	{
		// Track connections/disconnections ==============================================================
		console.log("App connected, id: " + socket.id);
		socket.on('disconnect', (args) => {
			console.log("App disconnected, id: " + socket.id);
			var success = playersService.RemovePlayer(socket.id);
			var args = {"isRemoved": success};
			socket.emit('playerremovedresults', args);
			tv_io.emit('updateconnectionslist', playersService.PlayerList);
			console.log(playersService.PlayerCount());
		});

		// Player Tracking ===============================================================================
		socket.on('addplayer', (args) => {
			var success = playersService.AddPlayer(args.username, socket.id);
			socket.emit('playeraddedresult', success);
			tv_io.emit('updateconnectionslist', playersService.PlayerList);
			console.log(playersService.PlayerCount());
		});
		socket.on('removeplayer', (args) => {
			var success = playersService.RemovePlayer(socket.id);
			var args = {"isRemoved": success};
			socket.emit('playerremoved', args);
			tv_io.emit('updateconnectionslist', playersService.PlayerList);
			console.log(playersService.PlayerCount());
		});
		
		// Config Tracking ===============================================================================
		socket.on('loadconfig', (args) => {
			//socket.broadcast();
			gameConfigService.SetGameConfig(args);
			tv_io.emit('loadconfig'); // Can't send arguements because page redirect will lose json
		});
		socket.on('updateconfig', (args) => {
			gameConfigService.SetGameConfig(args);
		});

		// Forward all events to tv ======================================================================
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
}

module.exports.SetupSockets = SetupSockets;
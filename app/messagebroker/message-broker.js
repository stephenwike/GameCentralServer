
var playersService = require('./../services/ConnectionTrackingService');
var gameConfigService = require('./../services/GameConfigService');
var commRulesService = require('./../services/CommunicationRulesService');

function SetupSockets(tv_io, an_io)
{
	tv_io.on('connection', (socket) => 
	{	
		// Track connections/disconnections ==============================================================
		console.log("TV connected, id: " + socket.id);
		socket.on('disconnect', (args) => {
			console.log("TV disconnected, id: " + socket.id);
		});

		// Player Tracking ===============================================================================
		socket.on('getconnectionslist', (args) => {
			socket.emit('updateconnectionslist', playersService.PlayerList);
		});

		// Config Tracking ===============================================================================
		socket.on('getgameconfig', (args) => {
			var gameConfig = gameConfigService.GetGameConfig();
			socket.emit('configresult', gameConfig);
		});

		// Game Management ===============================================================================
		socket.on('getgamedata', (args) => {
			var gameData = gameConfigService.GetGameData();
			socket.emit('gamedataresult', gameData);
		});

		// Forward all events to android(s) ==============================================================
		var onevent = socket.onevent;
		socket.onevent = function (packet) 
		{
			var args = packet.data || [];
			onevent.call (this, packet);    // original call
			packet.data = ["*"].concat(args);
			onevent.call(this, packet);     // additional call to catch-all
		};		

		socket.on('*', (evt, data) =>
		{
			console.log("TV EVENT " + evt + ", DATA: "); 
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
		});

		// Player Tracking ===============================================================================
		socket.on('addplayer', (args) => {
			var success = playersService.AddPlayer(args.username, socket.id);
			socket.emit('playeraddedresult', success);
			tv_io.emit('updateconnectionslist', playersService.PlayerList);
		});
		socket.on('removeplayer', (args) => {
			var success = playersService.RemovePlayer(socket.id);
			var args = {"isRemoved": success};
			socket.emit('playerremoved', args);
			tv_io.emit('updateconnectionslist', playersService.PlayerList);
		});
		
		// Config Tracking ===============================================================================
		socket.on('loadconfig', (args) => {
			if (commRulesService.CanCommunicate(args.id))
			{
				commRulesService.LimitCommunicationsTo(args.id);
				socket.broadcast.emit('configholding', args);
				gameConfigService.SetGameConfig(args);
				tv_io.emit('loadconfig'); // Can't send arguments because page redirect will lose json
			}
		});
		socket.on('updateconfig', (args) => {
			if (commRulesService.CanCommunicate(args.id))
			{
				gameConfigService.SetGameConfig(args);
			}
		});

		// Game Management ===============================================================================
		socket.on('loadgame', (args) => {
			// Persist game configuration and initialize game data.
			if (commRulesService.CanCommunicate(args.id))
			{
				var players = playersService.PlayerList;
				gameConfigService.SetupGame(args, players);
				tv_io.emit('startgame', args);
				an_io.emit('startgame', args);
			}
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
			if (commRulesService.CanCommunicate(data.id))
			{
				console.log("APP EVENT " + evt + ", DATA: "); 
				console.log(data);
				tv_io.emit(evt, data);
			}
		});
	});
}

module.exports.SetupSockets = SetupSockets;
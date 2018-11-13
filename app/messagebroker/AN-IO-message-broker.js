var playersService = require('./../services/ConnectionTrackingService'); 
var gameConfigService = require('./../services/GameConfigService');
var commRulesService = require('./../services/CommunicationRulesService');

var AN;
var TV;

function LoadANSockets()
{
    AN.on('connection', (socket) => 
	{
		// Track connections/disconnections ==============================================================
		console.log("App connected, id: " + socket.id);
		socket.on('disconnect', (args) => {
			commRulesService.CheckDisconnectedPlayer(socket.id);
			var success = playersService.RemovePlayer(socket.id);
			var args = {"isRemoved": success};
			socket.emit('playerremovedresults', args);
			TV.emit('updateconnectionslist', playersService.GetPlayerList());
			console.log("App disconnected, id: " + socket.id);
		});

		// Player Tracking ===============================================================================
		socket.on('addplayer', (args) => {
			console.log("Here");
			var success = playersService.AddPlayer(args.username, socket.id);
			socket.emit('playeraddedresult', success);
			TV.emit('updateconnectionslist', playersService.GetPlayerList());
		});
		socket.on('removeplayer', (args) => {
			commRulesService.CheckDisconnectedPlayer(socket.id);
			var success = playersService.RemovePlayer(socket.id);
			var args = {"isRemoved": success};
			socket.emit('playerremoved', args);
			TV.emit('updateconnectionslist', playersService.GetPlayerList());
		});
		
		// Config Tracking ===============================================================================
		socket.on('loadconfig', (args) => {
			if (commRulesService.CanCommunicate(args.id))
			{
				commRulesService.LimitCommunicationsTo(args.id);

				socket.broadcast.emit('configholding', args);
				gameConfigService.SetGameConfig(args);
				TV.emit('route', 'config');
			}
		});
		socket.on('updateconfig', (args) => {
			if (commRulesService.CanCommunicate(args.id))
			{
                var gameConfig = gameConfigService.SetGameConfig(args);
                TV.emit('updateconfig', gameConfig);
			}
		});

		// Game Management ===============================================================================
		socket.on('loadgame', (args) => {
			// Persist game configuration and initialize game data.
			if (commRulesService.CanCommunicate(args.id))
			{
				var players = playersService.GetPlayerList();
				gameConfigService.SetupGame(args, players);
				var gameArgs = gameConfigService.GetGameData();
				console.log(args.gameName);
				TV.emit('route', args.gameName);
				AN.emit('startgame', gameArgs);
			}
		});
		socket.on('updategamedata', (args) => {
			var gameService = gameConfigService.Service();
			var result = {};
			if (gameService !== undefined)
			{
				result = gameService.Update(args);
			}

			socket.emit('updategamedataresult', result);
			if (result.changes.length > 0)
			{
				socket.broadcast.emit('updateturnresult', result);
				TV.emit('updategamedataresult', result);
			}
		});

		// Turn Management ===============================================================================
		socket.on('updateturn', (args) => {
			var gameService = gameConfigService.Service();
			var result = {"isValidRequest" : false, "Reason": "Game Service undefined."};
			if (gameService !== undefined)
			{
				result = gameService.UpdateTurn(args);
			}
			
			socket.emit('updateturnresult', result);
			if (result.isValidRequest) // Don't notify other users if update turn doesn't work.
			{
				socket.broadcast.emit('updateturnresult', result);
				TV.emit('updateturnresult', result);
			}
		})

		// Communication Managemenet =====================================================================
		socket.on('sendmessage', (args) => {
			
		})

		// Forward all events to tv ======================================================================
		/* var onevent = socket.onevent;
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
		}); */
	});
}

module.exports = {
    Load: function(an_io, tv_io)
    {
        AN = an_io;
        TV = tv_io;
        LoadANSockets();
    }
}
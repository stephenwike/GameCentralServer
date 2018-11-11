var playersService = require('./../services/ConnectionTrackingService'); 
var gameConfigService = require('./../services/GameConfigService');
var TV;

function LoadTVSockets()
{
    TV.on('connection', (socket) => 
	{	
		// Log connection established ====================================================================
		console.log("TV connected, id: " + socket.id);
        
        // Disconnection Tracking ========================================================================
        socket.on('disconnect', (args) => {
			console.log("TV disconnected, id: " + socket.id);
		});

		// Player Tracking ===============================================================================
		socket.on('getconnectionslist', (args) => {
			socket.emit('updateconnectionlist', playersService.GetPlayerList());
		});

		// Config Tracking ===============================================================================
		socket.on('getgameconfig', (args) => {
			var gameConfig = gameConfigService.GetGameConfig();
			socket.emit('updategameconfig', gameConfig);
		});

		// Game Management ===============================================================================
		socket.on('getgamedata', (args) => {
			var gameData = gameConfigService.GetGameData();
			socket.emit('initgamedata', gameData);
		});
	});
}

module.exports = {
    Load: function(tv_io)
    {
        TV = tv_io;
        LoadTVSockets();
    }
}
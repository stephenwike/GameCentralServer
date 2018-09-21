var playerList = {};
var droppedPlayerList = {};
var playerCount = 0;

module.exports = {
	AddPlayer: function(username, socketid){
		// Is the username long enough
		if (username.length < 4)
		{
			return { "isAdded": false, "Reason": "Username to short." };
		}

		// Is this socket already registered?
		var playerKeys = Object.keys(playerList);
		for (var index = 0; index < playerKeys.length; ++index)
		{
			if (playerList[playerKeys[index]].id == socketid)
			{
				return { "isAdded": false, "Reason": "User has already registered a username."};
			}
		}

		// Is the username on the dropped player list?
		if (droppedPlayerList[username] != undefined)
		{
			playerList[username] = droppedPlayerList[username];
			playerList[username].id = socketid;
			delete droppedPlayerList[username]

			++playerCount;
			return { "isAdded": true, "Reason": "Username was on dropped list." };
		}

		// Is the username not already in use?
		if (playerList[username] == undefined)
		{
			playerList[username] = {"username": username, "id": socketid};
			++playerCount;
			return { "isAdded": true, "Reason": "Username added." };
		}
		else
		{
			return { "isAdded": false, "Reason": "Username exists." };
		}
	},
	RemovePlayer: function(socketid)
	{
		// Are there users to drop?
		if (playerCount === 0)
		{
			console.log("Playercount equals 0");
			return false;
		}

		// Is the socket id on the player list?
		var playerKeys = Object.keys(playerList);
		for (var index = 0; index < playerKeys.length; ++index)
		{
			if (playerList[playerKeys[index]].id == socketid)
			{
				droppedPlayerList[playerKeys[index]] = playerList[playerKeys[index]]
				delete playerList[playerKeys[index]];

				--playerCount;
				return true;
			}
		}

		return false;
	},
	ClearPlayers: function()
	{
		playerList = [];
		droppedPlayerList = [];
		playerCount = 0;
	},
	PlayerCount:  function()
	{
		return playerCount;
	},
	PlayerList: playerList
}
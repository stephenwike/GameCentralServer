var PlayerList = {};
var PlayerCount = 0;
var DroppedPlayerList = {};

module.exports = {
	AddPlayer: function(username, socketid){
		// Is the username long enough
		if (username.length < 4)
		{
			return { "isAdded": false, "Reason": "Username too short." };
		}

		// Is this socket already registered?
		var playerKeys = Object.keys(PlayerList);
		for (var index = 0; index < playerKeys.length; ++index)
		{
			if (PlayerList[playerKeys[index]].id == socketid)
			{
				return { "isAdded": false, "Reason": "User has already registered a username."};
			}
		}

		// Is the username on the dropped player list?
		if (DroppedPlayerList[username] != undefined)
		{
			playerList[username] = DroppedPlayerList[username];
			playerList[username].id = socketid;
			delete DroppedPlayerList[username]

			++PlayerCount;
			return { "isAdded": true, "Reason": "Username was on dropped list." };
		}

		// Is the username not already in use?
		if (PlayerList[username] == undefined)
		{
			PlayerList[username] = {"username": username, "id": socketid};
			++PlayerCount;
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
		if (PlayerCount === 0)
		{
			console.log("Playercount equals 0");
			return false;
		}

		// Is the socket id on the player list?
		var playerKeys = Object.keys(PlayerList);
		for (var index = 0; index < playerKeys.length; ++index)
		{
			if (PlayerList[playerKeys[index]].id == socketid)
			{
				DroppedPlayerList[playerKeys[index]] = PlayerList[playerKeys[index]]
				delete PlayerList[playerKeys[index]];

				--PlayerCount;
				return true;
			}
		}

		return false;
	},
	ClearPlayers: function()
	{
		PlayerList = [];
		DroppedPlayerList = [];
		PlayerCount = 0;
	},
	PlayerCount:  PlayerCount,
	PlayerList: PlayerList
}
var PlayerList = {};
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
			var key = playerKeys[index];
			if (PlayerList[key].id == socketid)
			{
				this.RemovePlayer(socketid);
				PlayerList[username] = {"username": username, "id": socketid};
				return { "isAdded": true, "Reason": "User's username changed."};
			}
		}

		// Is the username on the dropped player list?
		if (DroppedPlayerList[username] != undefined)
		{
			PlayerList[username] = DroppedPlayerList[username];
			PlayerList[username].id = socketid;
			delete DroppedPlayerList[username]

			return { "isAdded": true, "Reason": "Username was on dropped list." };
		}

		// Is the username not already in use?
		if (PlayerList[username] == undefined)
		{
			PlayerList[username] = {"username": username, "id": socketid};
			return { "isAdded": true, "Reason": "Username added." };
		}
		else
		{
			return { "isAdded": false, "Reason": "Username exists." };
		}
	},
	RemovePlayer: function(idOrUsername)
	{
		// Are there users to drop?
		var playerKeys = Object.keys(PlayerList);
		if (playerKeys.length === 0)
		{
			console.log("Playercount equals 0.");
			return false;
		}

		// Is the socket id on the player list?
		for (var index = 0; index < playerKeys.length; ++index)
		{
			var key = playerKeys[index];
			if (key === idOrUsername || PlayerList[key].id === idOrUsername)
			{
				DroppedPlayerList[key] = PlayerList[key]
				delete PlayerList[key];

				return true;
			}
		}
		return false;
	},
	ClearPlayers: function()
	{
		PlayerList = {};
		DroppedPlayerList = {};
		PlayerCount = 0;
	},
	PlayerCount: function()
	{
		return Object.keys(PlayerList).length;
	},
	GetPlayerList: function()
	{
		return PlayerList
	}
}
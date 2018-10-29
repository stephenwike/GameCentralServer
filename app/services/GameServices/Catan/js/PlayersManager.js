var Players = {};

module.exports = {
    Init: function(number, players)
    {
        // Reset data
        Players.Data = [];
        Players.Player = {};
        Players.CustomInitOrder = [];
        Players.TurnOrder = [];
        Players.ActiveUsername;

        var playerKeys = Object.keys(players);
        // number specified doesn't match number of connections.
        if (number != playerKeys.length) return;
        // Wrong number of players.
        if (number < 3 || number > 4) return;

        // Convert player object to player array
        for (var i = 0; i < playerKeys.length; ++i)
        {
            Players.Data.push(players[playerKeys[i]]);
            console.log("***--------------------------------------------***");
            console.log("***--------------------------------------------***");
            console.log("***--------------------------------------------***");
            console.log("***--------------------------------------------***");
            console.log(players[playerKeys[i]]);
            console.log(players[playerKeys[i]].username);
            console.log("***--------------------------------------------***");
            console.log("***--------------------------------------------***");
            console.log("***--------------------------------------------***");
            console.log("***--------------------------------------------***");
            Players.Player[players[playerKeys[i]].username] = {};
            Players.Player[players[playerKeys[i]].username].AvailableCities = 4;
            Players.Player[players[playerKeys[i]].username].AvailableSettlements = 5;
            Players.Player[players[playerKeys[i]].username].AvailableRoads = 15;
            Players.Player[players[playerKeys[i]].username].ResCards = [];
            Players.Player[players[playerKeys[i]].username].DevCards = [];
        }
    },
    SetOrder: function()
    {
        var playerNum = Players.Data.length;

        // Randomize player order.
        var tempPlayers = []
        for(var i = 0; i < playerNum;){
            var rand = Math.floor(Math.random()*playerNum);
            tempPlayers.push(Players.Data[rand]);
            Players.Data.splice(rand,1);
        }
        Players.Data = tempPlayers;

        // Assign custom game setup order
        // First round forward
        for (var i = 0; i < playerNum; ++i)
        {
            Players.CustomInitOrder.push(Players.Data[i]);
        }
        //Second round reverse
        for (var i = (playerNum - 1); i >= 0; --i)
        {
            Players.CustomInitOrder.push(Players.Data[i]);
        }

        // Assign turn order
        for (var i = 0; i < playerNum; ++i)
        {
            Players.TurnOrder.push(Players.Data[i]);
        }
    },
    GetNextPlayer: function()
    {
        if(Players.CustomInitOrder.length > 0)
        {
            console.log("INIT NEXT PLAYER:");
            console.log(Players.CustomInitOrder.splice(0,1));
            var player = Players.CustomInitOrder.splice(0,1);
            Players.ActiveUsername = player[0].username;
            return Players.ActiveUsername;
        }
        else
        {
            console.log("NEXT PLAYER:");
            var playertoback = Players.TurnOrder.splice(0,1);
            console.log(playertoback);
            Players.TurnOrder.push(playertoback);
            Players.ActiveUsername = playertoback[0].username;
            return Players.ActiveUsername;
        }
    },
    GetPlayers: function()
    {
        return Players;
    }
}
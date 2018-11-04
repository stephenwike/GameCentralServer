var Players = {};

module.exports = {
    Init: function(number, players)
    {
        // Log Init
        console.log("Init players: param number: " + number + ", param players:");
        console.log(players); // passed connection object;

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
        if (number < 1 || number > 4) return;

        // Convert player object to player array
        for (var i = 0; i < playerKeys.length; ++i)
        {
            var key = playerKeys[i];
            Players.Data.push(players[key]);
            Players.Player[key] = {};
            Players.Player[key].AvailableCities = 4;
            Players.Player[key].AvailableSettlements = 5;
            Players.Player[key].AvailableRoads = 15;
            Players.Player[key].ResCards = [];
            Players.Player[key].DevCards = [];
        }
    },
    SetOrder: function()
    {
        var playerNum = Players.Data.length;

        // Randomize player order.
        var tempPlayers = []
        for(var i = 0; i < Players.Data.length;){
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
        else if(Players.TurnOrder.length > 0)
        {
            console.log("NEXT PLAYER:");
            var playertoback = Players.TurnOrder.splice(0,1);
            console.log(playertoback);
            Players.TurnOrder.push(playertoback);
            Players.ActiveUsername = playertoback[0].username;
            return Players.ActiveUsername;
        }
        else return Players.ActiveUsername = undefined;
    },
    GetPlayers: function()
    {
        return Players;
    }
}
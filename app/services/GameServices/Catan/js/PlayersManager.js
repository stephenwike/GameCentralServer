var Players = {};

function GetPlayerColor(player)
{
    if (player.color === undefined)
    {
        return Math.floor(Math.random() * 360);
    }
    else
    {
        return player.color;
    }
}

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
        Players.ActiveUser;

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
            Players.Player[key].Username = key;
            Players.Player[key].Color = GetPlayerColor(players[key]);
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
            var rand = Math.floor(Math.random()*Players.Data.length);
            tempPlayers.push(Players.Data[rand]);
            Players.Data.splice(rand,1);
        }
        Players.Data = tempPlayers;

        // Assign custom game setup order
        // First round forward
        for (var i = 0; i < playerNum; ++i)
        {
            Players.CustomInitOrder.push(Players.Player[Players.Data[i].username]);
        }
        //Second round reverse
        for (var i = (playerNum - 1); i >= 0; --i)
        {
            Players.CustomInitOrder.push(Players.Player[Players.Data[i].username]);
        }

        // Assign turn order
        for (var i = 0; i < playerNum; ++i)
        {
            Players.TurnOrder.push(Players.Player[Players.Data[i].username]);
        }

        // Set active user
        Players.ActiveUser = Players.CustomInitOrder[0];
    },
    GetNextPlayer: function()
    {
        if(Players.CustomInitOrder.length > 0)
        {
            var player = Players.CustomInitOrder.splice(0,1);
            Players.ActiveUser = player[0];
            return Players.ActiveUser;
        }
        else if(Players.TurnOrder.length > 0)
        {
            var playertoback = Players.TurnOrder.splice(0,1);
            Players.TurnOrder.push(playertoback[0]);
            Players.ActiveUser = playertoback[0];
            return Players.ActiveUser;
        }
        else return Players.ActiveUser = undefined;
    },
    GetPlayers: function()
    {
        return Players;
    },
    GetActivePlayer: function()
    {
        return Players.ActiveUser;
    },
    ClearPlayers: function()
    {
        Players = {};
    }
}
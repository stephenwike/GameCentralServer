var Players = {};
Players.Data = [];
Players.CustomInitOrder = [];
Players.TurnOrder = [];
Players.ActiveUsername;

module.exports = {
    Init: function(number, players)
    {
        // Reset data
        Players.Data = [];
        Players.CustomInitOrder = [];
        Players.TurnOrder = [];
        Players.ActiveUsername;

        // Return if number specified doesn't match the player list.
        var playerKeys = Object.keys(players);
        if (number != playerKeys.length) return;

        // Convert player object to player array
        for (var i = 0; i < playerKeys.length; ++i)
        {
            Players.Data.push(players[playerKeys[i]]);
        }

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
        for (var i = 0; i < number; ++i)
        {
            Players.CustomInitOrder.push(Players.Data[i]);
        }
        //Second round reverse
        for (var i = (number - 1); i >= 0; --i)
        {
            Players.CustomInitOrder.push(Players.Data[i]);
        }

        // Assign turn order
        for (var i = 0; i < number; ++i)
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
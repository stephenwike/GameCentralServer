var Players = {};

module.exports = {
    Init: function(number, players)
    {
        // Return if number specified doesn't match the player list.
        var playerKeys = Object.keys(players);
        if (number != playerKeys.length) return;

        // Convert player object to player array
        Players.Data = [];
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
        console.log(Players.Data);

        // Assign custom game setup order
        Players.CustomInitOrder = [];
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
        Players.TurnOrder = [];
        for (var i = 0; i < number; ++i)
        {
            Players.TurnOrder.push(Players.Data[i]);
        }
    },
    GetNextPlayer: function()
    {
        if(Players.CustomInitOrder.Length > 0)
        {
            console.log("INIT NEXT PLAYER:");
            console.log(Players.CustomInitOrder.splice(0,1));
            return Players.CustomInitOrder.splice(0,1);
        }
        else
        {
            console.log("NEXT PLAYER:");
            var playertoback = Players.TurnOrder.splice(0,1);
            console.log(playertoback);
            Players.TurnOrder.push(playertoback);
            return playertoback;
        }
    },
    GetPlayers: function()
    {
        return Players;
    }
}
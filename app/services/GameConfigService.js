var gameConfig = {}
var gameData = {};

module.exports = {
    SetGameConfig: function(args)
    {
        console.log("ARGS: " + args);
        gameConfig = args;
    },
    GetGameConfig: function()
    {
        return gameConfig;
    },
    SetupGame: function(args)
    {
        var data;
        switch(args["gameName"])
        {
            case "Catan":
                data = require('./GameServices/Catan/CatanService').InitializeGame();
                break;
        }

        // Place config and data in gamedata
        gameData = {
            "Config": gameConfig,
            "Game": data
        }
    },
    GetGameData: function()
    {
        return gameData;
    }
}
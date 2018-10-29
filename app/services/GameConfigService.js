var gameConfigSingleton = require('./Singletons/GameConfigSingleton');
var gameDataSingleton = require('./Singletons/GameDataSingleton');
var gameConfig = new gameConfigSingleton().GetInstance();
var gameData = new gameDataSingleton().GetInstance();

module.exports = {
    SetGameConfig: function(args)
    {
        gameConfig.Config = args;
    },
    GetGameConfig: function()
    {
        return gameConfig.gameConfig;
    },
    SetupGame: function(args, players)
    {
        var data;
        switch(args["gameName"]) 
        {
            case "Catan":
                data = require('./GameServices/Catan/CatanService').InitializeGame(gameConfig.GetConfig(), players);
                break;
        }

        // Place config and data in gamedata
        gameData.SetGameData(
        {
            "Config": gameConfig.gameConfig,
            "Game": data
        });
    },
    GetGameData: function()
    {
        return gameData.gameData;
    }
}
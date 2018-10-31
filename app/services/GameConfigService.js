var gameConfigSingleton = require('./Singletons/GameConfigSingleton');
var gameDataSingleton = require('./Singletons/GameDataSingleton');
var gameConfig = new gameConfigSingleton().GetInstance();
var gameData = new gameDataSingleton().GetInstance();
var GameService;

module.exports = {
    SetGameConfig: function(args)
    {
        gameConfig = args;
    },
    GetGameConfig: function()
    {
        return gameConfig;
    },
    SetupGame: function(args, players)
    {
        switch(args["gameName"]) 
        {
            case "Catan":
                GameService = require('./GameServices/Catan/CatanService');
                break;
        }

        // Initialize Game
        var data = GameService.InitializeGame(gameConfig, players);

        // Place config and data in gamedata
        gameData =
        {
            "Config": gameConfig,
            "Game": data
        };
    },
    GetGameData: function()
    {
        console.log("Returning Game Data");
        console.log(gameData);
        return gameData;
    },
    Service: function()
    {
        return GameService;
    } 
}
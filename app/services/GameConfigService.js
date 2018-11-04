var gameConfigSingleton = require('./Singletons/GameConfigSingleton');
var gameDataSingleton = require('./Singletons/GameDataSingleton');
var GameService;

module.exports = {
    SetGameConfig: function(args)
    {
        gameConfigSingleton.Set(args);
    },
    GetGameConfig: function()
    {
        return gameConfigSingleton.Instance();
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
        gameDataSingleton.Set(GameService.InitializeGame(gameConfigSingleton.Instance(), players));
    },
    GetGameData: function()
    {
        return gameDataSingleton.Instance();
    },
    Service: function()
    {
        return GameService;
    } 
}
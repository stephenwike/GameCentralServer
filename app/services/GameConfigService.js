var gameConfig = {}

module.exports = {
    SetGameConfig: function(args)
    {
        console.log("ARGS ATRGS ATH: " + args);
        gameConfig = args;
    },
    GetGameConfig: function()
    {
        return gameConfig;
    }
}
class GameConfig
{
    constructor()
    {
        this.Config = {};
    }
}

class GameConfigSingleton
{
    constructor()
    {
        if(!GameConfigSingleton.Instance)
        {
            GameConfigSingleton.Instance = new GameConfig();
        }
    }

    GetInstance()
    {
        return GameConfigSingleton.Instance;
    }
}

module.exports = GameConfigSingleton;
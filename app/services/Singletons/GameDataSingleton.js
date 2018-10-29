class GameData
{
    constructor()
    {
        this.gameData = {};
    }

    set GameData(data)
    {
        this. gameData = data;
    }

    get GameData()
    {
        return this.gameData;
    }
}

class GameDataSingleton
{
    constructor()
    {
        if (!GameDataSingleton.Instance)
        {
            GameDataSingleton.Instance = new GameData();
        }
    }

    GetInstance()
    {
        return GameDataSingleton.Instance;
    }
}

module.exports = GameDataSingleton;
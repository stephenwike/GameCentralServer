var GameDataInstance;

module.exports = {
    Instance: function()
    {
        if (!GameDataInstance) 
        {
            console.log("**************************************");
            console.log("**************************************");
            console.log("**************************************");
            console.log("New Game Data Singleton instance created");
            console.log("**************************************");
            console.log("**************************************");
            console.log("**************************************");
            GameDataInstance = new Object();
        }
        return GameDataInstance;
    },
    Set: function(obj)
    {
        GameDataInstance = obj;
    }
}
var GameConfigInstance;

module.exports = {
    Instance: function()
    {
        if (!GameConfigInstance) 
        {
            console.log("**************************************");
            console.log("**************************************");
            console.log("**************************************");
            console.log("New Game Config Singleton instance created");
            console.log("**************************************");
            console.log("**************************************");
            console.log("**************************************");
            GameConfigInstance = new Object();
        }
        return GameConfigInstance;
    },
    Set: function(obj)
    {
        GameConfigInstance = obj;
    }
}
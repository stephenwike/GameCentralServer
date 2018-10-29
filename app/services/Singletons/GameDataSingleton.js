var GameDataSingleton = (function () {
    var Instance;

    function createInstance() {
        var object = new Object();
        return object;
    }

    return {
        GetInstance: function () 
        {
            if (!Instance) 
            {
                Instance = createInstance();
            }
            return Instance;
        }
    }
});

module.exports = GameDataSingleton;
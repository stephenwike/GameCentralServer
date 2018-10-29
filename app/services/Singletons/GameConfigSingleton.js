var GameConfigSingleton = (function () {
    var Instance;

    function CreateInstance() {
        var object = new Object();
        return object;
    }

    return {
        GetInstance: function() 
        {
            if (!Instance)
            {
                Instance = CreateInstance();
            }
            return Instance;
        }
    }
});

module.exports = GameConfigSingleton;
var Cities = {}
Cities.isSettledby = [];

module.exports = {
    Init: function()
    {
        Cities.isSettledby = [54];
        {
            for (var i = 0; i < 54; ++i)
            {
                Cities.isSettledby = "empty";
            }
        }
    },
    GetCities: function()
    {
        return Cities;
    }
}
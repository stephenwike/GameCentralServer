var citiesManager = require('./../js/CitiesManager');
var testUtils = require('./../../../TestingUtilities');

function RunCityManagerTests()
{
    testUtils.SetTestSuite("CitiesManagerTests");
    testUtils.SetTest(CityManagerInitialization, "Failure Initializing City Manager.");
    testUtils.RunTests();
}

function CityManagerInitialization()
{
    // Test City Manager Initialization
    citiesManager.Init();
    var cities = citiesManager.GetCities();
    var cityKeys = Object.keys(cities);
    if (cityKeys.length !== 54)
    {
        return false;
    }
    else
    {
        return true;
    }
}

module.exports = {
    RunTests: function()
    {
        return RunCityManagerTests();
    }
}
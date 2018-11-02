var citiesManager = require('./../js/CitiesManager');
var testObject = {};
testObject.Tests = 0;
testObject.Pass = 0;
testObject.Failed = 0;

function RunCityManagerTests()
{
    console.log("  city manager test...");

    // Test City Manager Initialization
    ++testObject.Tests;
    citiesManager.Init();
    var cities = citiesManager.GetCities();
    var cityKeys = Object.keys(cities);
    if (cityKeys.length !== 54)
    {
        ++testObject.Failed;
    }
    else
    {
        ++testObject.Pass;
    }

    // Print Summary
    console.log("    Tests: " + testObject.Tests + ", Passed: " + testObject.Pass + ", Failed: " + testObject.Failed);
    return testObject;
}

module.exports = {
    RunTests: function()
    {
        return RunCityManagerTests();
    }
}
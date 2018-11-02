var roadsManager = require('./../js/RoadsManager');
var testObject = {};
testObject.Tests = 0;
testObject.Pass = 0;
testObject.Failed = 0;

function RunCityManagerTests()
{
    console.log("  road manager test...");

    // Test City Manager Initialization
    ++testObject.Tests;
    roadsManager.Init();
    var roads = roadsManager.GetRoads();
    var roadKeys = Object.keys(roads);
    if (roadKeys.length !== 72)
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
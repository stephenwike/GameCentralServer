var roadsManager = require('./../js/RoadsManager');
var testUtils = require('./../../../ServiceUnitTests/TestingUtilities');

function RunRoadManagerTests()
{
    testUtils.SetTestSuite("RoadManagerTests");
    testUtils.SetTest(RoadManagerInitializion,"Road Manager Initialization Failed.");
    testUtils.RunTests();
}

function RoadManagerInitializion()
{
    // Test City Manager Initialization
    roadsManager.Init();
    var roads = roadsManager.GetRoads();
    var roadKeys = Object.keys(roads);
    if (roadKeys.length !== 72)
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
        RunRoadManagerTests();
    }
}
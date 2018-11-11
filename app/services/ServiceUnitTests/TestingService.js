var testUtils = require('./TestingUtilities');

function RunApplicationTests()
{
    // Test Connection Tracking Service
    require('./ConnectionTrackingServiceUnitTests').RunTests();

    // Test Catan Service
    require('../GameServices/Catan/test/CatanServiceTests').RunTests();

    // Get Summary of all tests
    testUtils.LogGlobalResults();
}

module.exports = 
{
    RunTests: function()
    {
        RunApplicationTests();
    }
}

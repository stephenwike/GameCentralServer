var testUtils = require('./TestingUtilities');

function RunApplicationTests()
{
    // Test Catan Service
    require('./GameServices/Catan/test/CatanServiceTests').RunTests();

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

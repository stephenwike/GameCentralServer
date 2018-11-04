function RunCatanTests()
{   
    // Test Player Manager
    require('./PlayersManagerTests').RunTests();

    // Test Cities Manager
    require('./CitiesManagerTests').RunTests();

    // Test Road Manager
    require('./RoadManagerTests').RunTests();
}

module.exports = 
{
    RunTests: function()
    {
        return RunCatanTests();
    }
}
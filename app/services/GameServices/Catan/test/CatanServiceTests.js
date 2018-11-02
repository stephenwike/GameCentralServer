var testObject = {};
testObject.Tests = 0;
testObject.Pass = 0;
testObject.Failed = 0;

function RunCatanTests()
{
    console.log(" testing catan service...");
    
    // Test Cities Manager
    LoadResults(require('./CitiesManagerTests').RunTests());

    // Test Road Manager
    LoadResults(require('./RoadManagerTests').RunTests());

    // Print Results
    PrintTestResults();

    return testObject;
}

function LoadResults(testObj)
{
    testObject.Tests += testObj.Tests;
    testObject.Pass += testObj.Pass;
    testObject.Failed += testObj.Failed;
}

function PrintTestResults()
{
    console.log("  Tests: " + testObject.Tests + ", Passed: " + testObject.Pass + ", Failed: " + testObject.Failed);
}

module.exports = 
{
    RunTests: function()
    {
        return RunCatanTests();
    }
}
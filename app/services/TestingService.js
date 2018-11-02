var testObject = {};
testObject.Tests = 0;
testObject.Pass = 0;
testObject.Failed = 0;

function RunApplicationTests()
{
    console.log("TESTS RUNNING...");

    // Test Catan Service
    LoadResults(require('./GameServices/Catan/test/CatanServiceTests').RunTests());

    PrintTestResults();
}

function LoadResults(testObj)
{
    testObject.Tests += testObj.Tests;
    testObject.Pass += testObj.Pass;
    testObject.Failed += testObj.Failed;
}

function PrintTestResults()
{
    console.log("Tests: " + testObject.Tests + ", Passed: " + testObject.Pass + ", Failed: " + testObject.Failed);
}

module.exports = 
{
    RunTests: function()
    {
        RunApplicationTests();
    }
}

var testObject = {};
testObject.Tests = 0;
testObject.Pass = 0;
testObject.Failed = 0;
testObject.Ignored = 0;

var localTest = {};
localTest.Tests = [];
localTest.Pass = 0;
localTest.Failed = 0;
localTest.Ignored = 0;
localTest.Name = "";

function LogResults(count, tests)
{
    console.log("Tests: " + count + ", Passed: " + tests.Pass + ", Failed: " + tests.Failed + ", Ignored: " + tests.Ignored);
}

module.exports = {
    SetTestSuite: function(name)
    {
        localTest.Name = (name === undefined) ? "" : name;
        console.log("Running " + localTest.Name + "...");
    },
    SetTest: function(func, error, skip = false)
    {
        if (skip) 
        {
            ++ localTest.Ignored;
            return;
        }
        localTest.Tests.push({"function": func, "error": error});
    },
    RunTests: function()
    {
        for (var i = 0; i < localTest.Tests.length; ++i)
        {
            if (localTest.Tests[i].function())
            {
                ++localTest.Pass;
            }else
            {
                ++localTest.Failed;
                console.log(localTest.Tests[i].error);
            }
        }
        
        // log local test results
        LogResults(localTest.Tests.count, localTest);

        // Commit results to global results
        testObject.Tests += localTest.Tests.length;
        testObject.Pass += localTest.Pass;
        testObject.Failed += localTest.Failed;
        testObject.Ignored += localTest.Ignored;

        // Clear local test stats
        localTest = {};
        localTest.Tests = [];
        localTest.Pass = 0;
        localTest.Failed = 0;
        localTest.Ignored = 0;
        localTest.Name = "";
    },
    LogGlobalResults: function()
    {
        LogResults(testObject.Tests, testObject);
    }
}
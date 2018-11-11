var testObject = {};
testObject.Tests = 0;
testObject.Pass = 0;
testObject.Failed = 0;
testObject.Ignored = 0;
testObject.FailedMessages = [];

var localTest = {};
localTest.Tests = [];
localTest.Pass = 0;
localTest.Failed = 0;
localTest.Ignored = 0;
localTest.Name = "";

function LogResults(count, tests, errors)
{
    console.log("Tests: " + count + ", Passed: " + tests.Pass + ", Failed: " + tests.Failed + ", Ignored: " + tests.Ignored);
    if (errors !== undefined)
    {
        for (var i = 0; i < errors.length; ++i)
        {
            console.log(errors[i]);
        }
    } 
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
                testObject.FailedMessages.push(localTest.Name + ": " + localTest.Tests[i].error);
            }
        }
        
        // log local test results
        LogResults(localTest.Tests.length, localTest);

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
        console.log("***************************************************************");
        console.log("************************RESULTS********************************");
        console.log("***************************************************************");
        LogResults(testObject.Tests, testObject, testObject.FailedMessages);
        console.log("***************************************************************");
        console.log("***************************************************************");
        console.log("***************************************************************");
    }
}
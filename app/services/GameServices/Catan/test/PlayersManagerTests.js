var playersManager = require('../js/PlayersManager');
var connectionTrackingService = require('./../../../ConnectionTrackingService');
var testUtils = require('./../../../TestingUtilities');

var testObject = {};
testObject.Tests = 0;
testObject.Pass = 0;
testObject.Failed = 0;

function PlayersManagerTests()
{
    testUtils.SetTestSuite("PlayersManagerTests");
    testUtils.SetTest(UsernameTooShort, "Test Not Enough characters in username: requirement 4");
    testUtils.SetTest(UsernameTaken, "Failed Prohibiting username already registered.");

    testUtils.SetTest(RemovePlayerWhenThereAreNone, "A request to remove a player when the list is empty return successful.");
    testUtils.SetTest(CanRemoveAddedPlayer, "Added player could not be removed.");
    testUtils.RunTests();
}

function UsernameTooShort()
{
    var result = connectionTrackingService.AddPlayer("abc");
    connectionTrackingService.ClearPlayers();
    return (!result.isAdded);
}

function UsernameTaken()
{
    connectionTrackingService.AddPlayer("Greg");
    var result = connectionTrackingService.AddPlayer("Greg");
    connectionTrackingService.ClearPlayers();
    return (!result.isAdded);
}

function RemovePlayerWhenThereAreNone()
{
    var result = connectionTrackingService.RemovePlayer("doesntexist");
    return (!result);
}

function CanRemoveAddedPlayer()
{
    connectionTrackingService.AddPlayer("Old Bob");
    var result = connectionTrackingService.RemovePlayer("Old Bob");
    return result;
}



module.exports = {
    RunTests: function()
    {
        return PlayersManagerTests();
    }
}
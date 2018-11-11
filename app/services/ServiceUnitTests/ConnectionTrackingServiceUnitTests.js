var connectionTrackingService = require('./../ConnectionTrackingService');
var testUtils = require('./TestingUtilities');

function RunConnectionTrackerTests()
{
    testUtils.SetTestSuite("ConnectionTrackerTests");
    testUtils.SetTest(UsernameTooShort, "Test Not Enough characters in username: requirement 4");
    testUtils.SetTest(CanAddNewUser, "Could not add new user.");
    testUtils.SetTest(ListedUserAddsNewUsername, "User with user name couldn't update username with 'add player' method.");
    testUtils.SetTest(UsernameTaken, "Failed Prohibiting username already registered.");
    testUtils.SetTest(UserAddsFromDropList, "User does not get added from drop list from previous connection.");
    testUtils.SetTest(PlayerCountsShowCorrectConnectionValues, "Player counts don't reflect connection activity.");
    testUtils.SetTest(RemovePlayerWhenThereAreNone, "A request to remove a player when the list is empty return successful.");
    testUtils.SetTest(CanRemoveAddedPlayerBySocketId, "Added player could not be removed by socket id.");
    testUtils.SetTest(CanRemoveAddedPlayerByUsername, "Added player could not be removed by username.");
    testUtils.RunTests();
}

function UsernameTooShort()
{
    var result = connectionTrackingService.AddPlayer("ABC", "87654321");
    connectionTrackingService.ClearPlayers();
    return (!result.isAdded);
}

function CanAddNewUser()
{
    var result = connectionTrackingService.AddPlayer("Pep Peronni", "87654321");
    return (result.isAdded && result.Reason === "Username added.")
}

function ListedUserAddsNewUsername()
{
    connectionTrackingService.AddPlayer("Pep Peronni", "87654321");
    var result = connectionTrackingService.AddPlayer("Lucy", "87654321");
    connectionTrackingService.ClearPlayers();
    return (result.isAdded && result.Reason === "User's username changed.")
}

function UsernameTaken()
{
    connectionTrackingService.AddPlayer("Greg", "87654321");
    var result = connectionTrackingService.AddPlayer("Greg", "12345678");
    connectionTrackingService.ClearPlayers();
    return (!result.isAdded && result.Reason === "Username exists.");
}

function UserAddsFromDropList()
{
    connectionTrackingService.AddPlayer("Some Player", "87654321");
    connectionTrackingService.RemovePlayer("87654321");
    var result = connectionTrackingService.AddPlayer("Some Player", "15263489");
    return (result.isAdded && result.Reason === "Username was on dropped list.");
}

function PlayerCountsShowCorrectConnectionValues()
{
    connectionTrackingService.ClearPlayers();
    if (connectionTrackingService.PlayerCount() !== 0) return false;
    connectionTrackingService.AddPlayer("Some Player", "87654321");
    if (connectionTrackingService.PlayerCount() !== 1) return false;
    connectionTrackingService.AddPlayer("Som", "87654321"); // Too short
    if (connectionTrackingService.PlayerCount() !== 1) return false;
    connectionTrackingService.AddPlayer("SomePlayer", "87654321"); // Name change
    if (connectionTrackingService.PlayerCount() !== 1) return false;
    connectionTrackingService.RemovePlayer("SomePlayer"); // Remove by name
    if (connectionTrackingService.PlayerCount() !== 0) return false;
    connectionTrackingService.AddPlayer("Player1", "12345678");
    if (connectionTrackingService.PlayerCount() !== 1) return false;
    connectionTrackingService.AddPlayer("Player2", "56489755");
    if (connectionTrackingService.PlayerCount() !== 2) return false;
    connectionTrackingService.AddPlayer("Player3", "64973125");
    if (connectionTrackingService.PlayerCount() !== 3) return false;
    connectionTrackingService.AddPlayer("SomePlayer", "87654321");
    if (connectionTrackingService.PlayerCount() !== 4) return false;
    connectionTrackingService.RemovePlayer("87654321"); // Remove by id
    if (connectionTrackingService.PlayerCount() !== 3) return false;
    connectionTrackingService.RemovePlayer("unknown"); // shouldnt remove unknown id
    if (connectionTrackingService.PlayerCount() !== 3) return false;
    connectionTrackingService.ClearPlayers();
    if (connectionTrackingService.PlayerCount() !== 0) return false;
    return true;
}

function RemovePlayerWhenThereAreNone()
{
    var result = connectionTrackingService.RemovePlayer("doesntexist");
    return (!result);
}

function CanRemoveAddedPlayerBySocketId()
{
    connectionTrackingService.AddPlayer("Old Bob", "87654321");
    var result = connectionTrackingService.RemovePlayer("87654321");
    connectionTrackingService.ClearPlayers();
    return result;
}

function CanRemoveAddedPlayerByUsername()
{
    connectionTrackingService.AddPlayer("Old Bob", "87654321");
    var result = connectionTrackingService.RemovePlayer("Old Bob");
    connectionTrackingService.ClearPlayers();
    return result;
}

module.exports = {
    RunTests: function()
    {
        RunConnectionTrackerTests()
    }
}
var playersManager = require('../js/PlayersManager');
var connectionTrackingService = require('./../../../ConnectionTrackingService');
var testUtils = require('./../../../ServiceUnitTests/TestingUtilities');

function PlayersManagerTests()
{
    testUtils.SetTestSuite("PlayersManagerTests");
    testUtils.SetTest(PlayerManagerInitialization, "Catan Player Manager failed to initialize.");
    testUtils.SetTest(SetOrderSetsValidOrder, "Set order didn't set order up logically.");
    testUtils.SetTest(GetNextPlayer, "Does not get next player.");
    testUtils.RunTests();
}

function PlayerManagerInitialization()
{
    // Add some players
    connectionTrackingService.ClearPlayers();
    connectionTrackingService.AddPlayer("Player1", "11111111");
    connectionTrackingService.AddPlayer("Player2", "22222222");
    connectionTrackingService.AddPlayer("Player3", "33333333");
    connectionTrackingService.AddPlayer("Player4", "44444444");

    // Get player list
    var playerlist = connectionTrackingService.GetPlayerList();

    // Initialize player manager
    playersManager.Init(4, playerlist);
    var players = playersManager.GetPlayers();
    var playerKeys = Object.keys(players.Player);
    
    // Clear player list
    connectionTrackingService.ClearPlayers();
    
    if (playerKeys.length !== 4) return false;
    return true;
}

function SetOrderSetsValidOrder() // Dependency: PlayerManagerInitialization
{
    playersManager.SetOrder();
    var players = playersManager.GetPlayers();

    var custom = players.CustomInitOrder;
    if (custom[0] !== custom[7]) return false;
    if (custom[1] !== custom[6]) return false;
    if (custom[2] !== custom[5]) return false;
    if (custom[3] !== custom[4]) return false;
    
    var order = players.TurnOrder;
    if (custom[0] !== order[0]) return false;
    if (custom[1] !== order[1]) return false;
    if (custom[2] !== order[2]) return false;
    if (custom[3] !== order[3]) return false;

    return true;
}

function GetNextPlayer() // Dependency: PlayerManagerInitialization, SetOrderSetsValidOrder
{
    // Get players
    var players = playersManager.GetPlayers();
    var order = players.TurnOrder;

    // cycle through each player (4)
    var firstPlayer = playersManager.GetNextPlayer(); // Custom Init turn order starts
    var seconPlayer = playersManager.GetNextPlayer();
    var thirdPlayer = playersManager.GetNextPlayer();
    var fourtPlayer = playersManager.GetNextPlayer();
    var shouldBefourtPlayer = playersManager.GetNextPlayer();
    var shouldBethirdPlayer = playersManager.GetNextPlayer();
    var shouldBeseconPlayer = playersManager.GetNextPlayer();
    var shouldBefirstPlayer = playersManager.GetNextPlayer();

    if (firstPlayer !== order[0]) return false;
    if (seconPlayer !== order[1]) return false;
    if (thirdPlayer !== order[2]) return false;
    if (fourtPlayer !== order[3]) return false;
    if (firstPlayer !== shouldBefirstPlayer) return false;
    if (seconPlayer !== shouldBeseconPlayer) return false;
    if (thirdPlayer !== shouldBethirdPlayer) return false;
    if (fourtPlayer !== shouldBefourtPlayer) return false;

    shouldBefirstPlayer = playersManager.GetNextPlayer(); // Game turn order cycle starts
    shouldBeseconPlayer = playersManager.GetNextPlayer();
    shouldBethirdPlayer = playersManager.GetNextPlayer();
    shouldBefourtPlayer = playersManager.GetNextPlayer();

    if (firstPlayer !== shouldBefirstPlayer) return false;
    if (seconPlayer !== shouldBeseconPlayer) return false;
    if (thirdPlayer !== shouldBethirdPlayer) return false;
    if (fourtPlayer !== shouldBefourtPlayer) return false;

    shouldBefirstPlayer = playersManager.GetNextPlayer(); // First after the first completed cycle

    if (firstPlayer !== shouldBefirstPlayer) return false;
    return true;
}

module.exports = {
    RunTests: function()
    {
        PlayersManagerTests();
    }
}
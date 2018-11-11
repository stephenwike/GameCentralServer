var Players = require('./js/PlayersManager');
var Tiles = require('./js/TilesManager');
var Cards = require('./js/CardsManager');
var Ports = require('./js/PortsManager');
var Cities = require('./js/CitiesManager');
var Roads = require('./js/RoadsManager');
var Config = {};

function ValidatePlayer(data)
{
    var activePlayer = Players.GetActivePlayer();
        console.log("Active Player:");
        console.log(activePlayer);
        var result = {};
        if (activePlayer === undefined)
        {
            result = { "isValidResuest": false, "Reason": "Active Player Undefined." }
        }
        else if (data.username === activePlayer.Username && activePlayer.Username !== undefined)
        {
            result = { "isValidRequest": true, "Reason": "Valid Active Player." }
        }
        else
        {
            result = { "isValidResuest": false, "Reason": "Not Active Player." }
        }
        console.log(result);
        return result;

}

module.exports = {
    InitializeGame: function(config, connections)
    {
        // Get usernames
        var playerKeys = Object.keys(connections);

        // Capture Config
        Config.PlayerCount = (config === undefined || config.PlayerCount === undefined) ? playerKeys.length : config.PlayerCount;
        Config.Items = (config === undefined || config.Items === undefined) ? [] : config.Items;

        // Validate
        var ValidateMessage = "";
        if (connections === undefined) ValidateMessage = "connections undefined.";
        if (ValidateMessage !== "")
        {
            console.log(ValidateMessage);
            return;
        }

        // Init Assets
        console.log("Initializing Catan components...");
        Players.Init(Config.PlayerCount, connections);

        Tiles.Init();
        Cards.Init();
        Ports.Init();
        Cities.Init();
        Roads.Init();

        // SetupPlayers
        console.log("Setting up players...");
        Players.SetOrder();
        Players.GetNextPlayer();

        // Shuffle Assets
        console.log("Shuffling assets...");
        Tiles.Shuffle();
        Cards.Shuffle();
        Ports.Shuffle();

        // Get data
        console.log("capturing game data...");
        var players = Players.GetPlayers();
        var tiles = Tiles.GetTiles();
        var cards = Cards.GetCards();
        var ports = Ports.GetPorts();
        var cities = Cities.GetCities();
        var roads = Roads.GetRoads();

        // Create and return setup data
        var data = {
            "Players": players,
            "Tiles": tiles,
            "Cards": cards,
            "Ports": ports,
            "Cities": cities,
            "Roads": roads
        }
        console.log("returning game object...");

        return data;
    },
    Update: function(data)
    {
        console.log("Catan Service: Update...");

        var result = ValidatePlayer(data);

        var acceptedChanges = {};
        acceptedChanges.user = Players.GetActivePlayer();
        acceptedChanges.changes = [];
        if(result.isValidRequest)
        {
            // Parse Change Log
            for (var i = 0; i < data.changes.length; ++i)
            {
                var canChange = false;
                switch(data.changes[i].Type)
                {
                    case "AddSettlement":
                        canChange = Cities.AddSettlement(data.username, data.changes[i]);
                        break;
                    case "AddCity":
                        canChange = Cities.AddCity(data.username, data.changes[i]);
                        break;
                    case "AddRoad":
                        canChange = Roads.AddRoad(data.username, data.changes[i]);
                        break;
                }
                if (canChange) acceptedChanges.changes.push(data.changes[i]);
            }
            return acceptedChanges;
        }
        else
        {
            return acceptedChanges;
        }
    },
    UpdateTurn : function(data)
    {
        console.log("Catan Service: Update Turn...");

        var result = ValidatePlayer(data);

        if(result.isValidRequest)
        {
            var nextPlayer = Players.GetNextPlayer();
            result.username = nextPlayer.username;
            result.id = nextPlayer.id;
            console.log("Next Player");
            console.log(nextPlayer);
        }

        return result;
    }
}
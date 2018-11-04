var Players = require('./js/PlayersManager');
var Tiles = require('./js/TilesManager');
var Cards = require('./js/CardsManager');
var Ports = require('./js/PortsManager');
var Cities = require('./js/CitiesManager');
var Roads = require('./js/RoadsManager');
var Config = {};
var ChangeLog;

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
    Update(data)
    {
        ChangeLog = data;
        return ChangeLog;
    }
}
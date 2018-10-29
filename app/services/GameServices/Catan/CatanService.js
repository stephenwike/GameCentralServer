var Players = require('./js/PlayersManager');
var Tiles = require('./js/TilesManager');
var Cards = require('./js/CardsManager');
var Ports = require('./js/PortsManager');
var Cities = require('./js/CitiesManager');

module.exports = {
    InitializeGame: function(config, connections)
    {
        // Validate
        var ValidateMessage = "";
        if (config == undefined) ValidateMessage = "config undefined";
        else if (config.config == undefined) ValidateMessage = "config.config undefined";
        else if (config.config.length == 0) ValidateMessage = "configs are empty";
        else if (config.config[0].Options == undefined) ValidateMessage = "config.config[0].Options undefined";
        else if (connections == undefined) ValidateMessage = "connections undefined";
        if (ValidateMessage !== "")
        {
            console.log(ValidateMessage);
            return;
        }

        // Init Assets
        console.log("Initializing Catan components...");
        var cOpt = config.config[0];
        Players.Init(cOpt.Options[cOpt.Selected], connections);

        Tiles.Init();
        Cards.Init();
        Ports.Init();
        Cities.Init();

        // SetupPlayers
        console.log("Setting up players...");
        Players.SetOrder();
        Players.GetNextPlayer();

        // Shuffle Assets
        console.log("Shuffling assets...");
        Tiles.Shuffle();
        Cards.Shuffle();
        Ports.Shuffle();

        // Place Robber
        console.log("Placing robber...");
        Tiles.SetRobber(); 

        // Get data
        console.log("capturing game data...");
        var players = Players.GetPlayers();
        var tiles = Tiles.GetTiles();
        var cards = Cards.GetCards();
        var ports = Ports.GetPorts();
        var cities = Cities.GetCities();

        // Create and return setup data
        var data = {
            "Players": players,
            "Tiles": tiles,
            "Cards": cards,
            "Ports": ports,
            "Cities": cities
        }
        console.log("Returning Game Object:");
        console.log(data);

        return data;
    }
}
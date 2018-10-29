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
        else if (config.Options == undefined) ValidateMessage = "config.Options undefined";
        else if (connections == undefined) ValidateMessage = "connections undefined";
        if (ValidateMessage !== "")
        {
            console.log(ValidateMessage);
            return;
        }

        // Init Assets
        var cOpt = config.config[0];
        Players.Init(cOpt.Options[cOpt.Selected], connections);

        Tiles.Init();
        Cards.Init();
        Ports.Init();
        Cities.Init();

        // SetupPlayers
        Players.SetOrder();
        Players.GetNextPlayer();

        // Shuffle Assets
        Tiles.Shuffle();
        Cards.Shuffle();
        Ports.Shuffle();

        // Place Robber
        Tiles.SetRobber(); 

        // Get data
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

        return data;
    }
}
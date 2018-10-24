var Players = require('./js/PlayersManager');
var Tiles = require('./js/TilesManager');
var Cards = require('./js/CardsManager');
var Ports = require('./js/PortsManager');

module.exports = {
    InitializeGame: function(config, connections)
    {
        // Setup Players
        var cOpt = config.config[0];
        Players.Init(cOpt.Options[cOpt.Selected], connections);

        // Set Current Player
        Players.GetNextPlayer();

        // Init Assets
        Tiles.Init();
        Cards.Init();
        Ports.Init();

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

        // Create and return setup data
        var data = {
            "Players": players,
            "Tiles": tiles,
            "Cards": cards,
            "Ports": ports
        }

        return data;
    }
}
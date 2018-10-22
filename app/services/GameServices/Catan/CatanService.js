var Tiles = require('./js/TilesManager');
var Cards = require('./js/CardsManager');
var Ports = require('./js/PortsManager');

module.exports = {
    InitializeGame: function()
    {
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
        var tiles = Tiles.GetTiles();
        var cards = Cards.GetCards();
        var ports = Ports.GetPorts();

        // Create and return setup data
        var data = {
            "Tiles": tiles,
            "Cards": cards,
            "Ports": ports
        }

        return data;
    }
}
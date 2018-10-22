var Tiles = require('./js/TilesManager');
var Cards = require('./js/CardsManager');
var Ports = require('./js/PortsManager');

module.exports = {
    InitializeGame: function()
    {
        // Shuffle Assets
        var tiles = Tiles.Shuffle();
        var cards = Cards.Shuffle();
        var ports = Ports.Shuffle();

        // Create and return setup data
        var data = {
            "Tiles": tiles,
            "Cards": cards,
            "Ports": ports
        }

        return data;
    }
}
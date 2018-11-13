var Cards = {}

function InitCards()
{
    Cards = {}
    var DevCards = {};
        DevCards.types = [
        "knight","knight","knight","knight","knight","knight","knight","knight",
        "knight","knight","knight","knight","knight","knight","chapel","library",
        "market","palace","university","yearofplenty","yearofplenty",
        "roadbuilding","roadbuilding","monopoly","monopoly"];

    var ResCards = {};
    ResCards.types = ["brick","lumber","sheep","wheat","ore"];
    ResCards.counts = [19,19,19,19,19];

    Cards.Dev = DevCards;
    Cards.Res = ResCards;
}

function ShuffleDevCards()
{
    var cardsTemp = [];
    for (var i = 0; i < Cards.Dev.types.length;)
    {
        var rand = Math.floor(Math.random()*Cards.Dev.types.length);
        cardsTemp.push(Cards.Dev.types[rand]);
        Cards.Dev.types.splice(rand,1);
    }
    Cards.Dev.types = cardsTemp;
}

function RollDiceAndGiveCards(players, tiles)
{
    // Simulate two 6 sided dice
    var d1 = Math.ceil(Math.random() * 6);
    var d2 = Math.ceil(Math.random() * 6);
    var roll = d1 + d2;

    // Get Available resource tiles
    var availableResourceTileKeys = [];
    var tileKeys = Object.keys(tiles);
    for (var i = 0; i < tileKeys.length; ++i)
    {
        var key = tileKeys[i];

        // Does the tile number match the roll?
        // Does the tile have a robber?
        if (tiles[key].number === roll 
            && !tiles[key].HasRobber)
        {
            availableResourceTileKeys.push(key);
        }
    }

    // Give Cards to adjacent players
    for (var i = 0; i < availableResourceTileKeys.length; ++i)
    {
        var key = availableResourceTileKeys[i];
        var res = tiles[key].type;

        var playerKeys = Object.keys(players.Player);
        for (var j = 0; j < playerKeys.length; ++j)
        {
            var pKey = playerKeys[j];

            // Determine if player is adjacent
            //if (players[pKey].)
        }
    }
}

module.exports = {
    Init: function()
    {
        InitCards(); 
    },
    Shuffle: function()
    {
        ShuffleDevCards();
    },
    GetCards: function()
    {
        return Cards;
    },
    RollAndProduce: function(players, tiles)
    {
        return RollDiceAndGiveCards(players, tiles);
    }
}

var DevCards = {};
DevCards.types = [
    "knight","knight","knight","knight","knight","knight","knight","knight",
    "knight","knight","knight","knight","knight","knight","chapel","library",
    "market","palace","university","yearofplenty","yearofplenty",
    "roadbuilding","roadbuilding","monopoly","monopoly"];

var ResCards = {};
ResCards.types = ["brick","lumber","sheep","wheat","ore"];
ResCards.counts = [19,19,19,19,19];

function ShuffleDevCards()
{
    var cardsTemp = [];
    for (var i = 0; i < DevCards.types.length; ++i)
    {
        var rand = Math.floor(Math.random()*DevCards.types.length);
        cardsTemp.push(DevCards.types[rand]);
        DevCards.types.splice(rand,1);
    }
    DevCards.types = cardsTemp;
    return DevCards; 
}

module.exports = {
    Shuffle: function()
    {
        return ShuffleDevCards();
    }
}

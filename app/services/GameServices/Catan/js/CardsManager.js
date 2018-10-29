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
    console.log("Dev Cards:");
    console.log(Cards.Dev);
    Cards.Res = ResCards;
    console.log("Res Cards:");
    console.log(Cards.Res);
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
    console.log("New Shuffled Order:");
    console.log(Cards.Dev);
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
        console.log("Returning Cards");
        console.log(Cards);
        return Cards;
    }
}

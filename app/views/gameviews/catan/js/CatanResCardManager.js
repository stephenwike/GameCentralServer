var ResCards = {};
ResCards.types = ["brick","lumber","sheep","wheat","ore"];
ResCards.counts = [19,19,19,19,19];

function PlaceResCards()
{
    for (var i = 0; i < ResCards.types.length; ++i)
    {
        PlaceCardsOfType(i)
    }
}

function PlaceCardsOfType(index)
{
    var loc = document.getElementById("cardpile");
    for(var i = 0; i < 19; i++)
    {
		var img = document.createElement("IMG");
        img.src = "views/gameviews/catan/images/bankcard" + ResCards.types[index] + ".png";
        img.classList.add('card');
        img.setAttribute("style", "top:" + (16.5 + (16.5 * index) - (i/6)) + "%;");
        loc.appendChild(img);
	}
}
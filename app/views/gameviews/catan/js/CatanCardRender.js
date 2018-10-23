function PlaceDevCards(cards){
	var loc = document.getElementById("devcards");
	for(var i = 0; i < cards.types.length; i++){
		var img = document.createElement("IMG");
		img.src = "views/gameviews/catan/images/devcard.png";
		img.classList.add("card");
		img.setAttribute("style", "top:" + (0 - (i/2)) + "%;");
		loc.appendChild(img);
	}
}

function PlaceResCards(cards)
{
	for (var i = 0; i < cards.types.length; ++i)
    {
		var card = cards.types[i];
        PlaceCardsOfType(card, i)
    }
}

function PlaceCardsOfType(card, index)
{
	var loc = document.getElementById(card + "cards");
    for(var i = 0; i < 19; i++)
    {
		var img = document.createElement("IMG");
        img.src = "views/gameviews/catan/images/card" + card + ".png";
        img.classList.add('card');
        img.setAttribute("style", "top:" + (0 - (i/2)) + "%;");
        loc.appendChild(img);
	}
}
var DevCards = {};
DevCards.types = ["knight","knight","knight","knight","knight","knight","knight","knight","knight","knight","knight","knight","knight","knight","chapel","library","market","palace","university","yearofplenty","yearofplenty","roadbuilding","roadbuilding","monopoly","monopoly"];

function PlaceDevCards(){
	var loc = document.getElementById("cardpile");
	for(var i = 0; i < DevCards.types.length; i++){
		var img = document.createElement("IMG");
		img.src = "views/gameviews/catan/images/bankdevcard.png";
		img.classList.add("card");
		img.setAttribute("style", "top:" + (0 - (i/6)) +"%;");
		loc.appendChild(img);
	}
}
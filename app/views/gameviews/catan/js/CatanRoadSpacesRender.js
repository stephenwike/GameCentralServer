function SetRoadSpaces(roads)
{
	var loc = document.getElementById("pieces");
    var div = document.createElement("DIV");
	div.id = "roaddiv";

	var roadKeys = Object.keys(roads);
	for(var i = 0; i < 72; i++)
	{
		var key = roadKeys[i];
		var w = roads[key].width;
		var h = roads[key].height;
		var x = roads[key].xPos;
		var y = roads[key].yPos;

		var img = document.createElement("IMG");
		img.id = key;
		img.alt = roads[key].rot;
		img.src = "views/gameviews/catan/images/blank.png";
		img.setAttribute('style', "position:absolute;z-index:5;width:"+w+"%;height:"+h+"%;left:"+x+"%;top:"+y+"%;-webkit-filters:hue-rotate(100deg); filters:hue-rotate(100deg);");
		div.appendChild(img);
	}
    loc.appendChild(div);
}

function AddRoad(id)
{
	console.log("adding road...");
	var loc = document.getElementById(id);

    if(loc != undefined)
    {
		switch(loc.alt)
		{
			case "-30": 
				loc.src = "views/gameviews/catan/images/roadincline.png";
				break;
			case "30":
				loc.src = "views/gameviews/catan/images/roaddecline.png";
				break;
			case "90":
				loc.src = "views/gameviews/catan/images/roadup.png";
				break;
		}
	}
}
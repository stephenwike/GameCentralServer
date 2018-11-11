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

		var container = document.createElement("DIV");
		container.id = key + "_container";
		container.setAttribute('style', "position:absolute;z-index:5;width:"+w+"%;height:"+h+"%;left:"+x+"%;top:"+y+"%;");

		var img = document.createElement("IMG");
		img.id = key;
		img.alt = roads[key].rot;
		img.src = "views/gameviews/catan/images/blank.png";
		container.appendChild(img);
		div.appendChild(container);
	}
    loc.appendChild(div);
}

function AddRoad(user, Eid)
{
	console.log("adding road...");
	var loc = document.getElementById(Eid);
	loc.setAttribute('style', "width:100%;height:100%; -webkit-filter:hue-rotate("+ user.Color +"deg); filter:hue-rotate("+ user.Color +"deg);");

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
function SetRoadSpaces(roads)
{
    var loc = document.getElementById("pieces");
    var div = document.createElement("DIV");
	div.id = "roaddiv";
	
	var roadKeys = Object.keys(roads);
    for(var i = 0; i < roadKeys.length; i++)
    {
        var img = document.createElement("IMG");
		img.id = roadKeys[i];
		img.src = "views/gameviews/catan/images/roadblank.png";
		img.classList.add("road");
		img.setAttribute("style", "position:absolute;z-index:5;top:"+(RoadSpaces.yloc[i])+"%;left:"+(RoadSpaces.xloc[i])+"%;");
		img.style.WebkitTransform = "rotate("+RoadSpaces.rot[i]+"deg)";
		img.style.msTransform = "rotate("+RoadSpaces.rot[i]+"deg)";
		img.style.transform = "rotate("+RoadSpaces.rot[i]+"deg)";
		div.appendChild(img);
    }
    loc.appendChild(div);
}

function AddRoad(id)
{
	
}
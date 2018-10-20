var RoadSpaces = {};
RoadSpaces.yloc = [
	4.25,-0.75,4.25,
	14.25,9.25,14.25,14.25,9.25,14.25,
	24.25,19.25,24.25,24.25,19.25,24.25,24.25,19.25,24.25,
	34.25,34.25,29.25,34.25,34.25,29.25,34.25,34.25,
	44.25,39.25,44.25,44.25,39.25,44.25,44.25,39.25,44.25,
	54.25,54.25,49.25,54.25,54.25,49.25,54.25,54.25,
	64.25,59.25,64.25,64.25,59.25,64.25,64.25,59.25,64.25,
	74.25,74.25,69.25,74.25,74.25,69.25,74.25,74.25,
	79.25,84.25,84.25,79.25,84.25,84.25,79.25,
	89.25,94.25,94.25,89.25,
	99.25];
RoadSpaces.xloc = [
	34,43.25,52.5,
	16,25,34,52.5,62.5,71.5,
	-3,6.25,16,34,43.25,52.5,71.5,81.25,90.5,
	-3,16,25,34,52.5,62.5,71.5,90.5,
	-3,6.25,16,34,43.25,52.5,71.5,81.25,90.5,
	-3,16,25,34,52.5,62.5,71.5,90.5,
	-3,6.25,16,34,43.25,52.5,71.5,81.25,90.5,
	-3,16,25,34,52.5,62.5,71.5,90.5,
	6.25,16,34,43.25,52.5,71.5,81.25,
	25,34,52.5,62.5,
	43.25];
RoadSpaces.rot = [-60,0,60,-60,0,60,-60,0,60,-60,0,60,-60,0,60,-60,0,60,60,-60,0,60,-60,0,60,-60,-60,0,60,-60,0,60,-60,0,60,60,-60,0,60,-60,0,60,-60,-60,0,60,-60,0,60,-60,0,60,60,-60,0,60,-60,0,60,-60,0,60,-60,0,60,-60,0,0,60,-60,0,0];
RoadSpaces.canBuild = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
RoadSpaces.ownedBy = ["blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank"];

function SetRoadSpaces()
{
    var loc = document.getElementById("pieces");
    var div = document.createElement("DIV");
    div.id = "roaddiv";
    for(var i = 0; i < 72; i++)
    {
        var img = document.createElement("IMG");
		img.alt = [i];
		img.src = "views/gameviews/catan/images/p3road.png";
		img.classList.add("road");
		img.setAttribute("style", "position:absolute;z-index:5;top:"+(RoadSpaces.yloc[i])+"%;left:"+(RoadSpaces.xloc[i])+"%;");
		img.style.WebkitTransform = "rotate("+RoadSpaces.rot[i]+"deg)";
		img.style.msTransform = "rotate("+RoadSpaces.rot[i]+"deg)";
		img.style.transform = "rotate("+RoadSpaces.rot[i]+"deg)";
		div.appendChild(img);
    }
    loc.appendChild(div);
}
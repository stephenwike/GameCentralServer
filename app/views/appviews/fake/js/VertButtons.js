function MakeButtons(data)
{
    console.log("Making Buttons");
    SetRoadSpaces(data.Roads);
    SetCitySpaces(data.Cities);    
}

function SetRoadSpaces(roads)
{
    var loc = document.getElementById("ButtonBox");
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

		var btn = document.createElement("BUTTON");
		btn.id = key;
		btn.alt = roads[key].rot;
        btn.innerHTML = "---";
        btn.setAttribute('style', "background-color: rgba(255, 0, 0, 0.3); border:none;");
        btn.addEventListener("click", AppendTextOfEdge); 
		container.appendChild(btn);
		div.appendChild(container);
	}
    loc.appendChild(div);
}

function SetCitySpaces(cities)
{
    console.log(cities);
    var loc = document.getElementById("ButtonBox");
    var div = document.createElement("DIV");
    div.id = "citydiv";

    var cityKeys = Object.keys(cities);
    for(var i = 0; i < cityKeys.length; i++){

        var key = cityKeys[i];
		var w = cities[key].width;
		var h = cities[key].height;
		var x = cities[key].xPos;
        var y = cities[key].yPos;
        
        var container = document.createElement("DIV");
        container.id = key + "_container";
        container.setAttribute('style', "position:absolute;z-index:5;width:"+w+"%;height:"+h+"%;left:"+x+"%;top:"+y+"%;");

        var btn = document.createElement("BUTTON");
        btn.id = key;
        btn.innerHTML = "x";
        btn.setAttribute('style', "background-color: rgba(0, 0, 255, 0.5); border:none");
        btn.addEventListener("click", AppendTextOfVert)
        container.appendChild(btn);
		div.appendChild(container);
    }
    loc.appendChild(div);
}

function AppendTextOfEdge(evt)
{
    var id = evt.target.id;
    console.log(evt.target.id);
    var loc = document.getElementById("roadID");
    loc.value = id;
}

function AppendTextOfVert(evt)
{
    var id = evt.target.id;
    var loc1 = document.getElementById("settlementID");
    var loc2 = document.getElementById("cityID");
    loc1.value = id;
    loc2.value = id;
}
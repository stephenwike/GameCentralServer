function SetCitySpaces(cities)
{
    var loc = document.getElementById("pieces");
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

        var img = document.createElement("IMG");
        img.id = key;
        img.src = "views/gameviews/catan/images/blank.png";

        container.appendChild(img);
		div.appendChild(container);
    }
    loc.appendChild(div);
}

function AddSettlement(user, Eid)
{
    console.log("adding settlement...");
    var loc = document.getElementById(Eid);
    loc.setAttribute('style', "width:100%;height:100%; -webkit-filter:hue-rotate("+ user.Color +"deg); filter:hue-rotate("+ user.Color +"deg);");

    if(loc != undefined)
    {
        loc.src = "views/gameviews/catan/images/settlement.png";
    }
}

function AddCity(user, Eid)
{
    console.log("adding city...");
    var loc = document.getElementById(Eid);
    loc.setAttribute('style', "width:100%;height:100%; -webkit-filter:hue-rotate("+ user.Color +"deg); filter:hue-rotate("+ user.Color +"deg);");

    if(loc != undefined)
    {
        loc.src = "views/gameviews/catan/images/city.png";
    }
}
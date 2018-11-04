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

        var img = document.createElement("IMG");
        img.id = key;
        img.src = "views/gameviews/catan/images/blank.png";
		img.setAttribute('style', "position:absolute;z-index:5;width:"+w+"%;height:"+h+"%;left:"+x+"%;top:"+y+"%;filter:hue-rotate(250deg);webkit-filter:hue-rotate(250deg);background:rgba(255,0,0,0);");

		div.appendChild(img);
    }
    loc.appendChild(div);
}

function AddSettlement(id)
{
    console.log("adding settlement...");
    var loc = document.getElementById(id);
    if(loc != undefined)
    {
        loc.src = "views/gameviews/catan/images/settlement.png";
    }
}

function AddCity(id)
{
    console.log("adding city...");
    console.log(id);
    var loc = document.getElementById(id);
    console.log(loc);
    if(loc != undefined)
    {
        
        loc.src = "views/gameviews/catan/images/city.png";
    }
}
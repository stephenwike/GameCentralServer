var Tiles = new Object();
Tiles.yloc = ["20","10","0","40","30","20","10","60","50","40","30","20","70","60","50","40","80","70","60"];
Tiles.xloc = ["0","18.75","37.5","0","18.75","37.5","56.25","0","18.75","37.5","56.25","75","18.75","37.5","56.25","75","37.5","56.25","75"];
Tiles.types = ["desert","forest1","forest2","forest3","forest4","mountain1","mountain2","mountain3","pasture1","pasture2","pasture3","pasture4","field1","field2","field3","field4","hill1","hill2","hill3"];
Tiles.number = [2,3,3,4,4,5,5,6,6,8,8,9,9,10,10,11,11,12];
Tiles.robber = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];

function ShuffleTilesAndNumbers()
{
    // Randomize tile types
    var tiletemp = [];
    for(var i = 0; i < Tiles.types.length;)
    {
	    var rand = Math.floor(Math.random()*Tiles.types.length);
	    tiletemp.push(Tiles.types[rand]);
	    Tiles.types.splice(rand,1);
    }
    Tiles.types = tiletemp;

    // Randomize tile numbers
    var numbtemp = [];
    for(var i = 0; i < Tiles.number.length;)
    {
        var rand = Math.floor(Math.random()*Tiles.number.length);
        numbtemp.push(Tiles.number[rand]);
        Tiles.number.splice(rand,1);
    }
    Tiles.number = numbtemp;
}

function PlaceTiles()
{
    var loc = document.getElementById("pieces");
    var div = document.createElement('div');
    div.id = "tilediv";
    for(var i = 0; i < 19; i++)
    {
		var img = document.createElement("IMG");
        img.src = "views/gameviews/catan/images/" + Tiles.types[i] + ".png";
        img.classList.add("tile");
        img.setAttribute("style", "top:"+(Tiles.yloc[i])+"%;left:"+(Tiles.xloc[i])+"%;");
		img.alt = Tiles.types[i];
		div.appendChild(img);
    }
    loc.appendChild(div);
}
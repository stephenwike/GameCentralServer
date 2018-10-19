var tile = new Object();
tile.yloc = ["291","194","97","485","388","291","194","679","582","485","388","291","776","679","582","485","873","776","679"];
tile.xloc = ["112","280","448","112","280","448","616","112","280","448","616","784","280","448","616","784","448","616","784"];
tile.types = ["desert","forest1","forest2","forest3","forest4","mountain1","mountain2","mountain3","pasture1","pasture2","pasture3","pasture4","field1","field2","field3","field4","hill1","hill2","hill3"];
tile.number = [2,3,3,4,4,5,5,6,6,8,8,9,9,10,10,11,11,12];
tile.robber = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];

function ShuffleTilesAndNumbers()
{
    // Randomize tile types
    var tiletemp = [];
    for(var i = 0; i < tile.types.length;)
    {
	    var rand = Math.floor(Math.random()*tile.types.length);
	    tiletemp.push(tile.types[rand]);
	    tile.types.splice(rand,1);
    }
    tile.types = tiletemp;

    // Randomize tile numbers
    var numbtemp = [];
    for(var i = 0; i < tile.number.length;)
    {
        var rand = Math.floor(Math.random()*tile.number.length);
        numbtemp.push(tile.number[rand]);
        tile.number.splice(rand,1);
    }
    tile.number = numbtemp;
}

function PlaceTiles()
{
    var loc = document.getElementById("tileregion");
    for(var i = 0; i < 19; i++)
    {
		var img = document.createElement("IMG");
		img.src = "views/gameviews/catan/images/" + tile.types[i] + ".png";
        //img.classList.add("Tile");
        img.setAttribute("style", "position:absolute;z-index:2;top:"+(tile.yloc[i]-97)+"px;left:"+(tile.xloc[i]-112)+"px;");
		img.alt = tile.types[i];
		loc.appendChild(img);
	}
}
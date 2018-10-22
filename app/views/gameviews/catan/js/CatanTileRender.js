var TilePos = {};
TilePos.y = ["20","10","0","40","30","20","10","60","50","40","30","20","70","60","50","40","80","70","60"];
TilePos.x = ["0","18.75","37.5","0","18.75","37.5","56.25","0","18.75","37.5","56.25","75","18.75","37.5","56.25","75","37.5","56.25","75"];

function PlaceTiles(tiles)
{
    console.log(tiles);
    var loc = document.getElementById("pieces");
    var div = document.createElement('div');
    div.id = "tilediv";
    for(var i = 0; i < tiles.types.length; i++)
    {
		var img = document.createElement("IMG");
        img.src = "views/gameviews/catan/images/" + tiles.types[i] + ".png";
        img.classList.add("tile");
        img.setAttribute("style", "top:"+(TilePos.y[i])+"%;left:"+(TilePos.x[i])+"%;");
		img.alt = tiles.types[i];
		div.appendChild(img);
    }
    loc.appendChild(div);
}
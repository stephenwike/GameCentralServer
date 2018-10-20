var Robber = {};

function PlaceRobber()
{
    // get desert location
    for(var i = 0; i < Tiles.types.length; i++){
        if(Tiles.types[i] === "desert")
        {
            Robber.TileIndex = i;
        }
    }

    // create and set image
    var div = document.createElement("DIV");
    div.id = "robberdiv";

    var img = document.createElement("IMG");
    img.src = "views/gameviews/catan/images/robber.png";
    img.classList.add("tile");
    var top = Tiles.yloc[Robber.TileIndex];
    var left = Tiles.xloc[Robber.TileIndex];
	img.setAttribute("style", "z-index:3; top:"+top+"%; left:"+left+"%;");
	div.appendChild(img);

    var loc = document.getElementById("pieces");
    loc.appendChild(div);	
}
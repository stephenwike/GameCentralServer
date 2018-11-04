var Robber;

function PlaceTiles(tiles)
{
    var loc = document.getElementById("pieces");
    var div = document.createElement('div');
    div.id = "tilediv";

    var tileKeys = Object.keys(tiles);
    for(var i = 0; i < tileKeys.length; i++)
    {
        var key = tileKeys[i];
		var img = document.createElement("IMG");
        img.src = "views/gameviews/catan/images/" + tiles[key].type + ".png";
        img.id = tiles[key].type;
        img.setAttribute("style", "position:absolute;height:"+tiles[key].height+"%;width:"+tiles[key].width+"%;top:"+(tiles[key].yPos)+"%;left:"+(tiles[key].xPos)+"%;");
		div.appendChild(img);
    }
    loc.appendChild(div);
}

function PlaceNumbers(tiles)
{
    var loc = document.getElementById("pieces");
    var div = document.createElement('div');
    div.id = "numberdiv";

    var tileKeys = Object.keys(tiles);
    for(var i = 0; i < tileKeys.length; i++)
    {
        var key = tileKeys[i];
        var img = document.createElement("IMG");
        if (tiles[key].number !== 0)
        {
            img.src = "views/gameviews/catan/images/" + tiles[key].number + ".png";
        }
        else
        {
            img.src = "views/gameviews/catan/images/blank.png";
        }
        img.id = tiles[key].number;
        var l = (tiles[key].xPos) + (tiles[key].width * 0.3);
        var t = (tiles[key].yPos) + (tiles[key].height * 0.3);
        var w = tiles[key].width * 0.4;
        var h = tiles[key].height * 0.4;
        img.setAttribute("style", "position:absolute;height:"+h+"%;width:"+w+"%;top:"+t+"%;left:"+l+"%;");
		div.appendChild(img);
    }
    loc.appendChild(div);
}

function PlaceRobber(tiles)
{
    var loc = document.getElementById("pieces");
    var div = document.createElement("DIV");
    div.id = "robberdiv";

    var tileKeys = Object.keys(tiles);
    for(var i = 0; i < tileKeys.length; i++)
    {
        var key = tileKeys[i];
        if (tiles[key].HasRobber)
        {
            var img = document.createElement("IMG");
            img.src = "views/gameviews/catan/images/robber.png";
            img.id = "robber";
            img.setAttribute("style", "position:absolute;height:"+tiles[key].height+"%;width:"+tiles[key].width+"%;top:"+(tiles[key].yPos)+"%;left:"+(tiles[key].xPos)+"%;");
            div.appendChild(img);
        }
    }
    loc.appendChild(div);	
}
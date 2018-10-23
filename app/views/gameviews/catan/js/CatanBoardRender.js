var ContainerContent = {};

function RenderBoard(data)
{
    console.log("ALL DATA");
    console.log(data);

    // Size html containers
    SizeGameBoard();
    SizeCardPile();

    // place static game pieces
    //PlaceShores(); // Shore are static and don't really need to be initialized
    PlaceTiles(data.Game.Tiles);
    PlacePorts(data.Game.Ports);

    // place dynamic game peices
<<<<<<< HEAD
    PlaceRobber(data.Game.Tiles);
=======
>>>>>>> 873b4f8a53a6fa8decf9a9764b02445455261d18
    //PlaceDevCards();
    //PlaceResCards();

    // Todo:  Remove when done
    //SetCitySpaces();
    //SetRoadSpaces();
}

function SizeGameBoard()
{
    var gb = document.getElementById("gameboard");

    // Set width based on gameboard ratio
    var gbWidth = gb.clientHeight * (8 / (5 * Math.sqrt(3))); // Math based on hexagon board
    gb.style.width = gbWidth + 'px';

    // Set absolute left
    ContainerContent.SideGap = ((window.innerWidth / 2) - (gb.clientHeight / 2)) + 'px';
    gb.style.left = ContainerContent.SideGap;
}

function SizeCardPile()
{
    var cp = document.getElementById("cardcontainer");

    // Set width based to side gap size
    cp.style.width = ContainerContent.SideGap;
}

//function PlaceShores()
//{
//	var loc = document.getElementById("pieces");
//	var img = document.createElement("IMG");
//    img.src = "views/gameviews/catan/images/shores.png";
//    img.setAttribute("style", "position:absolute;z-index:2;width:114%;height:114%;top:-7.2%;left:-7.6%;");
//    loc.appendChild(img);
//}
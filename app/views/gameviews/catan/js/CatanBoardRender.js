var ContainerContent = {};

function RenderBoard()
{
    SizeGameBoard();
    SizeCardPile();
    PlaceShores();
    PlaceTiles();
    PlacePorts();
    PlaceRobber();
    PlaceDevCards();
    PlaceResCards();

    // Todo:  Remove when done
    SetCitySpaces();
    SetRoadSpaces();
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
    var cp = document.getElementById("cardpile");

    // Set width based to side gap size
    cp.style.width = ContainerContent.SideGap;
}

function PlaceShores()
{
	var loc = document.getElementById("pieces");
	var img = document.createElement("IMG");
    img.src = "views/gameviews/catan/images/shores.png";
    img.setAttribute("style", "position:absolute;z-index:2;width:114%;height:114%;top:-7.2%;left:-7.6%;");
    loc.appendChild(img);
}
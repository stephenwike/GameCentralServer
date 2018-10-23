var ContainerContent = {};

function RenderBoard(data)
{
    console.log("ALL DATA");
    console.log(data);

    // Size html containers

    //SizeCardPile();
    //SizePlayerRoster();
    
    SizeGameBoard();
    

    // place static game pieces
    //PlaceShores(); // Shore are static and don't really need to be initialized
    PlaceTiles(data.Game.Tiles);
    PlacePorts(data.Game.Ports);

    // place dynamic game peices
    PlaceRobber(data.Game.Tiles);
    PlaceDevCards(data.Game.Cards.Dev);
    PlaceResCards(data.Game.Cards.Res);

    // Todo:  Remove when done
    //SetCitySpaces();
    //SetRoadSpaces();
}

function SizeGameBoard()
{
    var gb = document.getElementById("gameboard");
    var gbp = document.getElementById("gameboardpadding");

    // Set width based on gameboard ratio
    
    var gbpHeight = gbp.clientWidth / (8 / (5 * Math.sqrt(3))); // Math based on hexagon board
    gbp.style.height = gbpHeight + 'px';
    
    // Set margins based on width percent

    var marginsides = (gb.clientWidth - gbp.clientWidth) / 2;
    var marginvertical = (gb.clientHeight - gbp.clientHeight) / 2; 
    //console.log("margin: " + margin);
    //var margin = (widthperc / 2) + '%';
    //console.log(margin);
    gbp.style.marginLeft = marginsides + 'px';
    gbp.style.marginRight = marginsides + 'px';
    gbp.style.marginTop = marginvertical + 'px';
    gbp.style.marginBottom = marginvertical + 'px';
    // Set absolute left
    //ContainerContent.SideGap = ((window.innerWidth / 2) - (gb.clientHeight / 2)) + 'px';
    //gb.style.left = ContainerContent.SideGap;
}

function SizeCardPile()
{
    var cp = document.getElementById("cardcontainer");

    // Set width based to side gap size
    cp.style.width = ContainerContent.SideGap;
}

function SizePlayerRoster()
{
    var pr = document.getElementById("cardcontainer");

    // Set width based to side gap size
    pr.style.width = ContainerContent.SideGap;
}

//function PlaceShores()
//{
//	var loc = document.getElementById("pieces");
//	var img = document.createElement("IMG");
//    img.src = "views/gameviews/catan/images/shores.png";
//    img.setAttribute("style", "position:absolute;z-index:2;width:114%;height:114%;top:-7.2%;left:-7.6%;");
//    loc.appendChild(img);
//}
var ContainerContent = {};

function RenderBoard(data)
{
    console.log("ALL DATA");
    console.log(data);

    //Validate data
    var ValidateMessage = "";
    if (data == undefined) ValidateMessage = "data undefined";
    else if (data.Game == undefined) ValidateMessage = "data.Game undefined";
    else if (data.Game.Tiles == undefined) ValidateMessage = "data.Game.Tiles undefined";
    else if (data.Game.Ports == undefined) ValidateMessage = "data.Game.Ports undefined";
    else if (data.Game.Cards == undefined) ValidateMessage = "data.Game.Cards undefined";
    else if (data.Game.Cards.Dev == undefined) ValidateMessage = "data.Game.Cards.Dev undefined";
    else if (data.Game.Cards.Res == undefined) ValidateMessage = "data.Game.Cards.Res undefined";
    if (ValidateMessage !== "")
    {
        console.log(ValidateMessage);
        // TODO: Display failure here
        return;
    }

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
    SetCitySpaces();
    SetRoadSpaces();
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

    gbp.style.marginLeft = marginsides + 'px';
    gbp.style.marginRight = marginsides + 'px';
    gbp.style.marginTop = marginvertical + 'px';
    gbp.style.marginBottom = marginvertical + 'px';
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
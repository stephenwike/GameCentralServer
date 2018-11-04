var ContainerContent = {};

function RenderBoard(data)
{
    console.log("ALL DATA");
    console.log(data);

    //Validate data
    var ValidateMessage = "";
    if (data == undefined) ValidateMessage = "data undefined";
    else if (data.Tiles == undefined) ValidateMessage = "data.Tiles undefined";
    else if (data.Ports == undefined) ValidateMessage = "data.Ports undefined";
    else if (data.Cards == undefined) ValidateMessage = "data.Cards undefined";
    else if (data.Cards.Dev == undefined) ValidateMessage = "data.Cards.Dev undefined";
    else if (data.Cards.Res == undefined) ValidateMessage = "data.Cards.Res undefined";
    else if (data.Cities == undefined) ValidateMessage = "data.Citied undefined";
    else if (data.Roads == undefined) ValidateMessage = "data.Roads undefined";
    if (ValidateMessage !== "")
    {
        console.log(ValidateMessage);
        // TODO: Display failure here
        return;
    }

    SizeGameBoard();
    
    // place static game pieces
    //PlaceShores(); // Shore are static and don't really need to be initialized
    PlaceTiles(data.Tiles);
    PlaceNumbers(data.Tiles);
    //PlacePorts(data.Ports);

    // place dynamic game peices
    PlaceRobber(data.Tiles);
    PlaceDevCards(data.Cards.Dev);
    PlaceResCards(data.Cards.Res);

    // Set img items to be set on subsequent update calls
    SetRoadSpaces(data.Roads);
    SetCitySpaces(data.Cities);
}

function SizeGameBoard()
{
    var gb = document.getElementById("gameboard");
    var gbp = document.getElementById("gameboardpadding");

    // Set width based on gameboard ratio
    var gbpHeight = gbp.clientWidth;
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
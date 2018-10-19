function RenderBoard()
{
    SizeGameBoard();
    PlaceShores();
    PlaceTiles();
    SetRobber();
}

function SizeGameBoard()
{
    //var gb = document.getElementById("gameboard");
    //console.log("Width: " + gb.clientWidth);
    //console.log("Height: " + gb.clientHeight);
    //gb.style.width = gb.clientHeight + 'px';
    //gb.style.left = ((gb.clientWidth / 2) - (gb.clientHeight / 2)) + 'px';
    //gb.style.right = ((gb.clientWidth / 2) - (gb.clientHeight / 2)) + 'px';
}

function PlaceShores()
{
	var loc = document.getElementById("shoreregion");
	var img = document.createElement("IMG");
	img.src = "views/gameviews/catan/images/shores.png";
    img.classList.add("Shores");
    //mg.setAttribute('style', 'position:relative; z-index:1; top: -72px; left: -69px;');
    loc.appendChild(img);
}
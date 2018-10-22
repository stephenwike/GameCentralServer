var PortLoc = {};
PortLoc.y = ["-8","13","51","81","100","81","51","13","-8"];
PortLoc.x = ["62","98","102","82","44","6","-14","-10","25.0"];

function PlacePorts(ports)
{
    var loc = document.getElementById("pieces");
    var div = document.createElement('div');
    div.id = "portdiv";
	for(var i = 0; i < ports.types.length; i++){
		var img = document.createElement("IMG");
        img.src = "views/gameviews/catan/images/port" + ports.types[i] + ".png";
        img.classList.add("port");
		img.setAttribute("style", "position:absolute;z-index:4;top:" + (PortLoc.y[i]) + "%; left:" + (PortLoc.x[i]) + "%;");
        div.appendChild(img);
    }
    loc.appendChild(div);
}


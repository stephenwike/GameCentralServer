var Ports = {};
Ports.yloc = ["-8","13","51","81","100","81","51","13","-8"];
Ports.xloc = ["62","98","102","82","44","6","-14","-10","25.0"];
Ports.types = ["ore","wheat","lumber","brick","sheep","general","general","general","general"];

var porttemp = [];
for(var i = 0; i < Ports.types.length;){
	var rand = Math.floor(Math.random()*Ports.types.length);
	porttemp.push(Ports.types[rand]);
	Ports.types.splice(rand,1);
}

Ports.types = porttemp;

function PlacePorts()
{
    var loc = document.getElementById("pieces");
    var div = document.createElement('div');
    div.id = "portdiv";
	for(var i = 0; i < Ports.types.length; i++){
		var img = document.createElement("IMG");
        img.src = "views/gameviews/catan/images/port" + Ports.types[i] + ".png";
        img.classList.add("port");
		img.setAttribute("style", "position:absolute;z-index:4;top:" + (Ports.yloc[i]) + "%; left:" + (Ports.xloc[i]) + "%;");
        div.appendChild(img);
    }
    loc.appendChild(div);
}


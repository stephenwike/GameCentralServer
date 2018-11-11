var HexVectors = 
[
	{"startx" : 4, "starty" : 4, "startnum" : 1, "iterate" : 3},
	{"startx" : 3, "starty" : 7, "startnum" : 4, "iterate" : 4},
	{"startx" : 2, "starty" : 10, "startnum" : 8, "iterate" : 5},
	{"startx" : 3, "starty" : 13, "startnum" : 13, "iterate" : 4},
	{"startx" : 4, "starty" : 16, "startnum" : 17, "iterate" : 3}
];

function DrawHexes()
{
	for (var i = 0; i < HexVectors.length; ++i)
	{
		for(var j = 0; j < HexVectors[i].iterate; ++j)
		{
			var startx = HexVectors[i].startx;
			var starty = HexVectors[i].starty;
			var startnum = HexVectors[i].startnum;
			DrawHex(startx + (j * 2), starty, startnum + j);	
		}
	}
}

function DrawHex(initx, inity, num)
{
	// Get context
	var canvas = document.getElementById("LayoutCanvas");
	var context = canvas.getContext('2d');
	var w = canvas.clientWidth;
	var h = canvas.clientHeight;
	
	// New Path
	context.beginPath();
	context.setLineDash([5,0]);
	context.fillStyle = "rgba(0, 155, 155, 0.8)";
	
	var nextx = (initx / 14) * w;
	var nexty = (((inity/22) * r) * h) + (p * h);
	context.moveTo(nextx, nexty);
	nextx = ((initx + 1) / 14) * w;
	nexty = ((((inity - 1)/22) * r) * h) + (p * h);
	context.lineTo(nextx, nexty);
	nextx = ((initx + 2) / 14) * w;
	nexty = (((inity/22) * r) * h) + (p * h);
	context.lineTo(nextx, nexty);
	nexty = ((((inity + 2)/22) * r) * h) + (p * h);
	context.lineTo(nextx, nexty);
	nextx = ((initx + 1) / 14) * w;
	nexty = ((((inity + 3)/22) * r) * h) + (p * h);
	context.lineTo(nextx, nexty);
	nextx = (initx / 14) * w;
	nexty = ((((inity + 2)/22) * r) * h) + (p * h);
	context.lineTo(nextx, nexty);
	nexty = (((inity/22) * r) * h) + (p * h);
	context.lineTo(nextx, nexty);
	
	// Make solid lines
	context.stroke();
	context.fill();
	
	// Fill Text
	nextx = ((initx + 1) / 14) * w;
	nexty = ((((inity + 1)/22) * r) * h) + (p * h);
	context.font = "30px Arial";
	context.textAlign = "center";
	context.textBaseline="middle"; 
	context.fillStyle = "black";
	context.fillText(num,nextx,nexty);
}
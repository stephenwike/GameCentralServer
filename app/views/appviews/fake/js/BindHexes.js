var BindHexVectors = 
[
	{"startx" : 3, "starty" : 1, "iterate" : 4},
	{"startx" : 2, "starty" : 4, "iterate" : 5},
	{"startx" : 1, "starty" : 7, "iterate" : 6},
	{"startx" : 0, "starty" : 10, "iterate" : 7},
	{"startx" : 1, "starty" : 13, "iterate" : 6},
	{"startx" : 2, "starty" : 16, "iterate" : 5},
	{"startx" : 3, "starty" : 19, "iterate" : 4}
];

function DrawBindHexes()
{
	for (var i = 0; i < BindHexVectors.length; ++i)
	{
		for(var j = 0; j < BindHexVectors[i].iterate; ++j)
		{
			var startx = BindHexVectors[i].startx;
			var starty = BindHexVectors[i].starty;
			DrawBindingHex(startx + (j * 2), starty);	
		}
	}
}

function DrawBindingHex(initx, inity)
{
	// Get context
	var canvas = document.getElementById("LayoutCanvas");
	var context = canvas.getContext('2d');
	var w = canvas.clientWidth;
	var h = canvas.clientHeight;
	
	// New Path
	context.beginPath();
	context.setLineDash([5,0]);
	context.fillStyle = "rgba(0, 0, 155, 0.2)";
	
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
}
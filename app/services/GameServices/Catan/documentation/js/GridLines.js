function DrawGridLines()
{
	// Get context
	var canvas = document.getElementById("LayoutCanvas");
	var context = canvas.getContext('2d');
	var w = canvas.clientWidth;
	var h = canvas.clientHeight;
		
	context.beginPath();
	context.setLineDash([5,5]);
		
	// Draw Vertical Lines
	for (var i = 0; i < 15; ++i)
	{
		var iter = (i / 14) * w
		context.moveTo(iter, 0);
		context.lineTo(iter, h);
	}
	
	// Draw Horizontal Lines
	for (var i = 0; i < 23; ++i)
	{
		var iter = (((i/22) * r) * h) + (p * h);
		context.moveTo(0, iter);
		context.lineTo(w, iter);
	}
	
	// Make dashed lines
	context.stroke();
}
function DrawBottomPercentages()
{
	// Get context
	var canvas = document.getElementById("BottomAxisCanvas");
	var context = canvas.getContext('2d');
	var w = canvas.clientWidth;
	var h = canvas.clientHeight;
	
	context.beginPath();
	context.setLineDash([5,5]);
	
	// Draw Vertical Lines
	for (var i = 0; i < 15; ++i)
	{
		var percentage = (i / 14);
		var iter = percentage * w
		var end = 5;
		context.moveTo(iter, 0);
		context.lineTo(iter, end);
		
		FillPercentageText(percentage, iter, end);
	}
	// Make dashed lines
	context.stroke();
}

function FillPercentageText(perc, iter, end)
{
	var canvas = document.getElementById("BottomAxisCanvas");
	var context = canvas.getContext('2d');
	
	context.save();
	context.translate(iter, end);
	context.rotate(90*Math.PI/180);
	context.font = "12px Arial";
	context.textBaseline = "middle";
	context.fillText((perc * 100).toFixed(4) + "%", 0, 0);
	
	context.restore();
}
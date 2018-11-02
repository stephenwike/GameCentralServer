function DrawRightRightPercentages()
{
	// Get context
	var canvas = document.getElementById("RightRightAxisCanvas");
	var context = canvas.getContext('2d');
	var w = canvas.clientWidth;
	var h = canvas.clientHeight;
	
	context.beginPath();
	context.setLineDash([1,2]);
	
	// Draw Vertical Lines
	for (var i = 1; i < 45;)
	{
		var percentage = (i / 44) * r;
		var iter = percentage * h + (p * h);
		
		var end = 20;
		context.moveTo(0, iter);
		context.lineTo(end, iter);
		
		FillRightRightPercentageText(percentage, iter, end);
		FillRightRightMessageText(iter, end, "((" + i + "/44) * r) + p");
		
		i = i + 6;
	}
	
	// Make dashed lines
	context.stroke();
}

function FillRightRightPercentageText(perc, iter, end)
{
	var canvas = document.getElementById("RightRightAxisCanvas");
	var context = canvas.getContext('2d');
	
	context.font = "12px Arial";
	context.textBaseline = "middle";
	context.textAlign = "left";
	context.fillText((((perc + p) * 100)).toFixed(4) + "%", end, iter);
}

function FillRightRightMessageText(iter, end, msg)
{
	var canvas = document.getElementById("RightRightAxisCanvas");
	var context = canvas.getContext('2d');
	var w = canvas.clientWidth;
	
	context.font = "12px Arial";
	context.textBaseline = "middle";
	context.textAlign = "right";
	context.fillText(msg, w - end, iter);
}
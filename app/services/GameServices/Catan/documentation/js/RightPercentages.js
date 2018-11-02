function DrawRightPercentages()
{
	// Get context
	var canvas = document.getElementById("RightAxisCanvas");
	var context = canvas.getContext('2d');
	var w = canvas.clientWidth;
	var h = canvas.clientHeight;
	
	context.beginPath();
	context.setLineDash([5,5]);
	
	// Draw Vertical Lines
	for (var i = 0; i < 23; ++i)
	{
		var percentage = (i / 22) * r;
		var padd = (p * h);
		var iter = percentage * h + (p * h);
		
		var end = 20;
		context.moveTo(0, iter);
		context.lineTo(end, iter);
		
		FillRightPercentageText(percentage, iter, end);
		FillRightMessageText(iter, end, "((" + i + "/22) * r) + p");
	}
	
	// Make dashed lines
	context.stroke();
	
	// Make difference dashed lines
	context.beginPath();
	context.setLineDash([1,2]);
	
	// Draw Horizontal Road Lines
	for (var i = 1; i < 45;)
	{
		var iter = (((i/44) * r) * h) + (p * h);
		context.moveTo(0, iter);
		context.lineTo(w, iter);
		i = i + 6;
	}
	
	// Make dashed lines
	context.stroke();
}

function FillRightPercentageText(perc, iter, end)
{
	var canvas = document.getElementById("RightAxisCanvas");
	var context = canvas.getContext('2d');
	
	context.font = "12px Arial";
	context.textBaseline = "middle";
	context.textAlign = "left";
	context.fillText((((perc + p) * 100)).toFixed(4) + "%", end, iter);
}

function FillRightMessageText(iter, end, msg)
{
	var canvas = document.getElementById("RightAxisCanvas");
	var context = canvas.getContext('2d');
	var w = canvas.clientWidth;
	
	context.font = "12px Arial";
	context.textBaseline = "middle";
	context.textAlign = "right";
	context.fillText(msg, w - end, iter);
}
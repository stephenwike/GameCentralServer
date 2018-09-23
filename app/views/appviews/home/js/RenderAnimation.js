function RenderAnimation()
{
	DrawLines();
	RenderCoins();
	RenderNames();
}

function RenderCoins()
{
	for (var i = 0; i < Clusters.length; ++i)
	{
		RenderCoinsInCluster(Clusters[i]);
	}
}

function RenderCoinsInCluster(cluster)
{
	for (var i = 0; i < cluster.Coins.length; ++i)
	{
		RenderCoin(cluster.Coins[i]);
	}
}

function RenderCoin(coin)
{
	var ctx = getContext();
	ctx.beginPath();
	ctx.arc(coin.X, coin.Y, coin.R, 0, 2*Math.PI);
	
	var grd = ctx.createLinearGradient(coin.X - coin.R, coin.Y - coin.R, coin.X + coin.R, coin.Y + coin.R);
	grd.addColorStop(0, "rgba(0, 255, 85, 0.8)");
	grd.addColorStop(1, "rgba(0, 128, 43, 0.8)");
	ctx.fillStyle = grd;
	ctx.fill();

	ctx.lineWidth = 4;
	ctx.strokeStyle = "#444";
	ctx.stroke();
}

function DrawLines()
{
	try
	{
		for (var i = 0; i < Clusters.length; ++i)
		{
			DrawIntraLines(Clusters[i]);
		}
		
		//DrawInterLines
		for (var i = 0; i < Clusters.length; ++i)
		{
			for (var j = 1; j < Clusters.length; ++j)
			{
				if (i != j)
				{	
					DrawInterLines(Clusters[i].Coins, Clusters[j].Coins)
				}
			}
		}
	}
	catch (err)
	{
		alert("DrawLines(): " + err.Message);
	}
}

function DrawIntraLines(clust)
{
	try
	{
		for (var i = 0; i < clust.Coins.length; ++i)
		{
			for (var j = 1; j < clust.Coins.length; ++j)
			{
				var currCircle = clust.Coins[i];
				var targetCircle = clust.Coins[j];
				if (i != j)
				{
					DrawLine(currCircle, targetCircle);
				}
			}
		}
	}
	catch (err)
	{
		alert("DrawIntraLines(): " + err.Message);
	}
}

function DrawInterLines(c1, c2)
{
	try
	{
		for (var i = 0; i < c1.length; ++i)
		{
			if (c1[i].ExtConnect == 1)
			{
				for (var j = 0; j < c2.length; ++j)
				{
					if (c2[j].ExtConnect == 1)
					{
						DrawCenterLine(c1[i], c2[j]);
						//DrawLine(c1[i], c2[j]);
					}
				}
			} 
		}
	}
	catch (err)
	{
		alert("DrawInterLines(): " + err.Message);
	}
}

function DrawLine(currCircle, targetCircle)
{
	try
	{
		var context = getContext();
		context.beginPath();
	
		var TargetX = targetCircle.X;// + targetCircle.xOffset;
		var TargetY = targetCircle.Y;// + targetCircle.yOffset;
		var CurrentX = currCircle.X;// + currCircle.xOffset;
		var CurrentY = currCircle.Y;// + currCircle.yOffset;
		
		//alert(TargetX + " : " + TargetY + " : " + CurrentX + " : " + CurrentY);
		
		var Length = Math.abs(TargetX - CurrentX);
		var Height = Math.abs(TargetY - CurrentY);
		//alert(Length + " : " + Height);
	
		var theta = Math.atan(Length / Height);
		//alert("Theta" + theta);
		
		//alert("Target R: " + targetCircle.r);
		var TargetXOffset = Math.cos(theta) * targetCircle.R;
		var TargetYOffset = Math.sin(theta) * targetCircle.R;
		//alert("TargetOffsets: " + TargetXOffset + " : " + TargetYOffset);
		
		var CurrXOffset = Math.cos(theta) * currCircle.R;
		var CurrYOffset = Math.sin(theta) * currCircle.R;
		//alert("CurrOffsets: " + TargetXOffset + " : " + TargetYOffset);
		
		context.moveTo(CurrentX + CurrXOffset, CurrentY + CurrYOffset);
		context.lineTo(TargetX + TargetXOffset, TargetY + TargetYOffset);
		
		context.lineWidth = 0.2;
		context.strokeStyle = '#CCC';
		context.stroke();
		
		context.beginPath();
		context.moveTo(CurrentX - CurrXOffset, CurrentY - CurrYOffset);
		context.lineTo(TargetX - TargetXOffset, TargetY - TargetYOffset);
		
		context.lineWidth = 0.2;
		context.strokeStyle = "black";
		context.stroke();
	}
	catch (err)
	{
		alert(err.Message);
	}
}

function DrawCenterLine(currCircle, targetCircle)
{
    try
    {
        var context = getContext();
        context.beginPath();

        context.moveTo(currCircle.X, currCircle.Y);
        context.lineTo(targetCircle.X, targetCircle.Y);
       
        context.lineWidth = 0.2;
        context.strokeStyle = '#AAA';
        context.stroke();
    }
    catch (err)
    {
        alert("DrawCenterLine(): " + err.Message);
    }
}

function RenderNames()
{
	for (var i = 0; i < Clusters.length; ++i)
	{
		RenderName(Clusters[i]);
	}
}

function RenderName(cluster)
{
	var ctx = getContext();
	ctx.font = "30px Arial";
	ctx.textAlign = "center";
	ctx.fillStyle = "Green";
	ctx.fillText(cluster.Name, cluster.X, cluster.Y + cluster.R);
}
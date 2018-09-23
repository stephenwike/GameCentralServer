function RenderGrids()
{
	DrawCanvasBorder();
	DrawMotionPath();
	DrawClusters();
}

function DrawCanvasBorder()
{
	var context = getContext();
	var w = CanvasWidth;
	var h = CanvasHeight;
	
	context.setLineDash([5,5]);
	context.beginPath();
	context.moveTo(0, 0);
	context.lineTo(w,0);
	context.lineTo(w,h);
	context.lineTo(0,h);
	context.lineTo(0,0);
	context.stroke();
}

function DrawMotionPath()
{
	var context = getContext();
	var x = CanvasWidth / 2;
	var y = CanvasHeight / 2;
	var w = x - ClusterMaxRadius;
	var h = y - ClusterMaxRadius;
	
	context.setLineDash([5, 5]);
	context.beginPath();
	context.ellipse(x, y, w, h, 0, 0, 2 * Math.PI);
	context.stroke();
}

function DrawClusters()
{
	for (var i = 0; i < Clusters.length; ++i)
	{
		DrawCluster(Clusters[i]);
	}
}

function DrawCluster(cluster)
{
	DrawClusterCenter(cluster);
	DrawClusterArea(cluster);
	DrawCoins(cluster);
}

function DrawClusterCenter(cluster)
{
	var ctx = getContext();
	ctx.beginPath();
	ctx.arc(cluster.X, cluster.Y, 5, 0, 2*Math.PI);
	ctx.fillStyle = "red";
	ctx.fill();
}

function DrawClusterArea(cluster)
{
	var ctx = getContext();
	ctx.beginPath();
	ctx.arc(cluster.X, cluster.Y, cluster.R, 0, 2*Math.PI);
	ctx.stroke();
}

function DrawCoins(cluster)
{
	for (var i = 0; i < cluster.Coins.length; ++i)
	{
		DrawCoinAnimationRadius(cluster, cluster.Coins[i]);
		DrawCoin(cluster.Coins[i]);
	}
}

function DrawCoinAnimationRadius(cluster, coin)
{
	var ctx = getContext();
	ctx.beginPath();
	ctx.arc(cluster.X + coin.AnimationX, cluster.Y + coin.AnimationY, coin.AnimationRadius, 0, 2*Math.PI);
	ctx.stroke();
}

function DrawCoin(coin)
{
	var ctx = getContext();
	ctx.beginPath();
	ctx.arc(coin.X, coin.Y, coin.R, 0, 2*Math.PI);
	ctx.fillStyle = "yellow";
	ctx.fill();
}

function Update()
{
	for (var i = 0; i < Clusters.length; ++i)
	{
		UpdateCluster(Clusters[i]);
	}
}

function UpdateCluster(cluster)
{
	cluster.Theta += ClusterRotationSpeed;
	cluster.X = ((CanvasWidth / 2) - ClusterMaxRadius) * Math.cos(cluster.Theta) + (CanvasWidth / 2);
	cluster.Y = ((CanvasHeight / 2) - ClusterMaxRadius) * Math.sin(cluster.Theta) + (CanvasHeight / 2);
	
	UpdateCoins(cluster, cluster.Coins);
	
	
	
	
	
	
	if(GridMode)
	{
		//RenderGrids();
		//DrawClusterRadius(clust);
		//DrawCenterCoinEnclosure(clust);
	}
	for (var i = 0; i < cluster.Coins.length; ++i)
	{
		//UpdateCoin(clust.Coins[i], clust.X, clust.Y, clust.R);
	}
}

function UpdateCoins(cluster, coins)
{
	for (var i = 0; i < coins.length; ++i)
	{
		UpdateCoin(cluster, coins[i]);
	}
}

function UpdateCoin(cluster, coin)
{
	coin.AnimationTheta += coin.AnimationThetaDelta;
	coin.AnimationX = coin.AnimationOffset * Math.cos(coin.AnimationTheta);
	coin.AnimationY = coin.AnimationOffset * Math.sin(coin.AnimationTheta); 
	
	coin.Theta += coin.DeltaTheta;
	//coin.Offset = offset;
	coin.X = cluster.X + coin.AnimationX + (coin.Offset * Math.cos(coin.Theta));
	coin.Y = cluster.Y + coin.AnimationY + (coin.Offset * Math.sin(coin.Theta));
}
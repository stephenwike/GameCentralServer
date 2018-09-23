var Clusters = [];
const MinClusters = 3; // Can have no users connected.
const MaxClusters = 8; // Maximum number of connected users possible (or at least that can display.
const ClusterMaxRadius = 150;
const ClusterMinRadius = 120;
const ClusterRotationSpeed = 0.002;

const CoinMaxRadius = 25;
const CoinMinRadius = 7;
const CoinMaxCount = 15;
const CoinMinCount = 12;
const CoinMinOffset = 2;
const CoinMaxDeltaTheta = 0.05;
const CoinExternalConnectionRatio = 0.01;
const CoinExternalMinConnections = 1;

const AnimationMaxRadius = 40;
const AnimationMinRadius = 20;
const AnimationMimOffset = 20;
const AnimationMaxThetaDelta = 0.01;
//const AnimationXMaxRadius = 20; //TODO: Use these!
//const AnimationXMinRadius = 5;
//const AnimationYMaxRadius = 10;
//const AnimationYMinRadius = 2;
//const AnimationAnchor = 1.87;

function Initialize()
{
	Resize();
	MakeClusters();
}

function MakeClusters()
{
	var NumberOfClusters = RandomRange(MinClusters, MaxClusters); // TODO: This will actually be the number of users connected...
	var RootClusterTheta = Math.random() * (2 * Math.PI) / NumberOfClusters;
	for (var i = 0; i < NumberOfClusters; ++i)
	{
		var theta = ((2 * Math.PI) * ((i) / NumberOfClusters)) + RootClusterTheta;
		var newCluster = {
			X: ((CanvasWidth / 2) - ClusterMaxRadius) * Math.cos(theta) + (CanvasWidth / 2),
			Y: ((CanvasHeight / 2) - ClusterMaxRadius) * Math.sin(theta) + (CanvasHeight / 2),
			R: RandomRange(ClusterMinRadius, ClusterMaxRadius),
			Theta: theta,
			Name: "Player " + i,
			Coins: []
		}
		newCluster.Coins = MakeCoins(newCluster);
		Clusters.push(newCluster);
	}
	console.log(Clusters);
}

function MakeCoins(cluster)
{
	var coins = [];
	try
	{
		var numberOfCoins = RandomRange(CoinMinCount, CoinMaxCount);
		for (var i = 0; i < numberOfCoins; ++i)
		{
			var animTheta = Math.random() * (2 * Math.PI);
			var animThetaDelta = ((Math.random() * (AnimationMaxThetaDelta * 2))) - AnimationMaxThetaDelta;
			var animRadius = RandomRange(AnimationMinRadius, AnimationMaxRadius);
			var animOffset = RandomRange(AnimationMimOffset, cluster.R - animRadius);
			var animX = animOffset * Math.cos(animTheta);
			var animY = animOffset * Math.sin(animTheta);
			
			var theta = Math.random() * (2 * Math.PI);
			var deltaTheta = ((Math.random() * (CoinMaxDeltaTheta * 2))) - CoinMaxDeltaTheta;
			var radius = RandomRange(CoinMinRadius, CoinMaxRadius);
			var offset = animRadius - radius;
			
			//var animationRegionX = RandomRange(0, (cluster.R * Math.cos(animTheta)) - animationRadius * Math.cos(animTheta));
			//var animationRegionY = RandomRange(0, (cluster.R * Math.sin(animTheta)) - animationRadius * Math.sin(animTheta));
			var newCoin = {
				AnimationTheta: animTheta,
				AnimationThetaDelta: animThetaDelta,
				AnimationRadius: animRadius,
				AnimationOffset: animOffset,
				AnimationX: animX,
				AnimationY: animY,
				
				Theta: theta,
				DeltaTheta: deltaTheta,
				R: radius,
				Offset: offset,
				X: cluster.X + animX,
				Y: cluster.Y + animY,
				
				ExtConnect: Math.floor(Math.random() + CoinExternalConnectionRatio)
			}
			if (i < CoinExternalMinConnections){
				newCoin.ExtConnect = 1;
			}
			coins.push(newCoin);
		}
	}
	catch(err)
	{
		console.log("MakeCoins(): " + err.Message);
	}
	return coins;
}

function MakeCoins_old()
{
	
	try
	{
		var NumberOfCoins = Math.round((Math.random() * (CoinMaxCount - CoinMinCount)) + CoinMinCount);
		for (var i = 0; i < NumberOfCoins; ++i)
		{
			var CoinTheta = Math.random() * (2 * Math.PI);
			var RadiusRatio = Math.random();
			var newCoin = {
				X: cluster.X + (cluster.R * Math.cos(CoinTheta)),
				Y: cluster.Y + (cluster.R * Math.sin(CoinTheta)),
				R: Math.round((Math.random() * (CoinMaxRadius - CoinMinRadius)) + CoinMinRadius),
				Theta: CoinTheta,
				Ratio: RadiusRatio,
				InternalX: RadiusRatio * Math.sin(CoinTheta) * (clust.R - CoinMaxRadius - AnimationMaxRadius),
				InternalY: RadiusRatio * Math.cos(CoinTheta) * (clust.R - CoinMaxRadius - AnimationMaxRadius),
				ExtConnect: Math.floor(Math.random() + CoinExternalConnectionRatio),
				step: Math.round(Math.random() * 2000),
				xOffset: 0,
				yOffset: 0,
				xC: Math.round(Math.random() * 40) + 10,
				yC: Math.round(Math.random() * 25) + 5,
				xScale: Math.round(Math.random() * 500) + 170,
				yScale: Math.round(Math.random() * 800) + 300
			};
			if (i < CoinExternalMinConnections){
				newCoin.ExtConnect = 1;
			}
			cluster.Coins.push(newCoin);
		}
	}
	catch(err)
	{
		console.log("MakeCoinsPerCluster(): " + err.Message);
	}
}

function RandomRange(min, max)
{
	return Math.round((Math.random() * (max - min)) + min);
}
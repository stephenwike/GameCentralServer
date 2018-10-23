var Tiles = {}

function InitTiles()
{
    Tiles = {};
    Tiles.types = ["desert","forest1","forest2","forest3","forest4","mountain1","mountain2","mountain3","pasture1","pasture2","pasture3","pasture4","field1","field2","field3","field4","hill1","hill2","hill3"];
    Tiles.number = [2,3,3,4,4,5,5,6,6,8,8,9,9,10,10,11,11,12];
    Tiles.robber = 0;
}

function ShuffleTilesAndNumbers()
{
    // Randomize tile types
    var tiletemp = [];
    for(var i = 0; i < Tiles.types.length;)
    {
	    var rand = Math.floor(Math.random()*Tiles.types.length);
	    tiletemp.push(Tiles.types[rand]);
	    Tiles.types.splice(rand,1);
    }
    Tiles.types = tiletemp;

    // Randomize tile numbers
    var numbtemp = [];
    for(var i = 0; i < Tiles.number.length;)
    {
        var rand = Math.floor(Math.random()*Tiles.number.length);
        numbtemp.push(Tiles.number[rand]);
        Tiles.number.splice(rand,1);
    }
    Tiles.number = numbtemp;
}

function GetRobberIndex()
{
    for (var i = 0; Tiles.types.length; ++i)
    {
        if(Tiles.types[i] === "desert")
        {
            Tiles.robber = i;
            Tiles.number.splice(i, 0, 0);
            break;
        }
    }
}

module.exports = {
    Init: function()
    {
        InitTiles();
    },
    Shuffle: function()
    {
        ShuffleTilesAndNumbers();
    },
    SetRobber: function()
    {
        GetRobberIndex();
    },
    GetTiles: function()
    {
        return Tiles;
    }
}
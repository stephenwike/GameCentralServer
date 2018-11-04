var Tiles = {};
var TileData = {};

function InitTiles()
{
    // set data
    GetTileData();

    // positioning
    var tiles = GetTilePositioning();
    CreateTileObjects(tiles);
}

function GetTileData(players = 3)
{
    TileData = {};
    if (players === 3 || players === 4)
	{
        TileData.types = 
        [
            "desert",
            "forest1","forest2","forest3","forest4",
            "mountain1","mountain2","mountain3",
            "pasture1","pasture2","pasture3","pasture4",
            "field1","field2","field3","field4",
            "hill1","hill2","hill3"
        ];
        TileData.numbers = 
        [
            2,3,3,4,4,5,5,6,6,8,8,9,9,10,10,11,11,12
        ]
        TileData.robber = 0;
    }
    else (players === 5 || players === 6)
    {
        //TODO: add logic for expansion version.
    }
}

function GetTilePositioning(players = 3)
{
    Tiles = {};
	var tiles = {};
	if (players === 3 || players === 4)
	{
		// For 3-4 player game
		tiles.tag = 
		[
			"1", "2", "3",
            "4", "5", "6", "7",
            "8", "9", "10", "11", "12",
            "13", "14", "15", "16",
            "17", "18", "19"
		];
		tiles.x = 
		[
			4, 6, 8,
			3, 5, 7, 9,
			2, 4, 6, 8, 10,
			3, 5, 7, 9,
			4, 6, 8
		];
		tiles.y = 
		[
			3, 3, 3,
            6, 6, 6, 6,
            9, 9, 9, 9, 9,
            12, 12, 12, 12,
            15, 15, 15
        ];
		tiles.ySections = 22;
		tiles.yRatio = 11 / ( 7 * Math.sqrt(3) ); 
		tiles.yPadding = (1 - tiles.yRatio) / 2;
		tiles.xSections = 14;
		tiles.xRatio = 1;
		tiles.xPadding = 0;
		tiles.HeightPercent = (((4 / 22) * tiles.yRatio) * 100);
		tiles.WidthPercent = (2 / 14) * 100; 
	}
	else if (players === 5 || players === 6)
	{
		// For 5-6 player game
		// (to be defined...)
	}
	return tiles;
}

function CreateTileObjects(tiles)
{
    for (var i = 0; i < tiles.tag.length; ++i)
	{
		var TileName = "tile_" + tiles.tag[i];
		Tiles[TileName] = {};
		Tiles[TileName].xPos = GetPos(tiles.x[i], tiles.xSections, tiles.xRatio, tiles.xPadding);
        Tiles[TileName].yPos = GetPos(tiles.y[i], tiles.ySections, tiles.yRatio, tiles.yPadding);
        Tiles[TileName].height = tiles.HeightPercent;
        Tiles[TileName].width = tiles.WidthPercent;
	}
}

function GetPos(section, sectioncount, ratio, padding)
{
	return (((section / sectioncount) * ratio) * 100) + (padding * 100);
}

function ShuffleTilesAndNumbers()
{
    // Randomize tile types
    var tiletypes = [];
    for(var i = 0; i < TileData.types.length;)
    {
	    var rand = Math.floor(Math.random()*TileData.types.length);
	    tiletypes.push(TileData.types[rand]);
	    TileData.types.splice(rand,1);
    }

    // Randomize tile numbers
    var tilenumbers = [];
    for(var i = 0; i < TileData.numbers.length;)
    {
        var rand = Math.floor(Math.random()*TileData.numbers.length);
        tilenumbers.push(TileData.numbers[rand]);
        TileData.numbers.splice(rand,1);
    }

    AddToTileObjects(tiletypes, tilenumbers);
}

function AddToTileObjects(types, numbers)
{
    var keys = Object.keys(Tiles);
    var desBuff = 0;
    for (var i = 0; i < keys.length; ++i)
	{
        var key = keys[i];
        Tiles[key].type = types[i];
        Tiles[key].number = (Tiles[key].type === "desert") ? desBuff-- : numbers[i + desBuff];
        Tiles[key].HasRobber = (Tiles[key].type === "desert");
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
    GetTiles: function()
    {
        return Tiles;
    }
}
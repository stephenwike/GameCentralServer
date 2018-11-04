var Cities = {}

function InitializeCities()
{	
	// Positioning data
	var cities = GetCityVertData();
	CreateCityObjects(cities);
}

function GetCityVertData(players = 3)
{
	Cities = {};
	var verts = {};
	if (players === 3 || players === 4)
	{
		// For 3-4 player game
		verts.tag = 
		[
			"l_1", "u_1", "1_2", "2", "2_3", "u_3", "l_3", 
			"4", "1_4", "1_4_5", "1_2_5", "2_5_6", "2_3_6", "3_6_7", "3_7", "7", 
			"u_8", "4_8", "4_8_9", "4_5_9", "5_9_10", "5_6_10", "6_10_11", "6_7_11", "7_11_12", "7_12", "u_12", 
			"l_8", "8_13", "8_9_13", "9_13_14", "9_10_14", "10_14_15", "10_11_15", "11_15_16", "11_12_16", "12_16", "l_12", 
			"13", "13_17", "13_14_17", "14_17_18", "14_15_18", "15_18_19", "15_16_19", "16_19", "16", 
			"u_17", "l_17", "17_18", "18", "18_19", "l_19", "u_19"
		];
		verts.x = 
		[
			4, 5, 6, 7, 8, 9, 10,
			3, 4, 5, 6, 7, 8, 9, 10, 11,
			2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
			2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
			3, 4, 5, 6, 7, 8, 9, 10, 11,
			4, 5, 6, 7, 8, 9, 10
		];
		verts.y = 
		[
			4, 3, 4, 3, 4, 3, 4,
			7, 6, 7, 6, 7, 6, 7, 6, 7,
			10, 9, 10, 9, 10, 9, 10, 9, 10, 9, 10,
			12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12,
			15, 16, 15, 16, 15, 16, 15, 16, 15,
			18, 19, 18, 19, 18, 19, 18
		];
		verts.ySections = 22;
		verts.yRatio = 11 / ( 7 * Math.sqrt(3) ); 
		verts.yPadding = (1 - verts.yRatio) / 2;
		verts.xSections = 14;
		verts.xRatio = 1;
		verts.xPadding = 0;
		verts.thickness = 5;
	}
	else if (players === 5 || players === 6)
	{
		// For 5-6 player game
		// (to be defined...)
	}
	return verts;
}

function CreateCityObjects(cities)
{
	for (var i = 0; i < cities.tag.length; ++i)
	{
		var CityName = "vert_" + cities.tag[i];
		Cities[CityName] = {};
		Cities[CityName].IsSettledBy = "empty";
		Cities[CityName].IsCity = false;
		Cities[CityName].xPos = GetPos(cities.x[i], cities.xSections, cities.xRatio, cities.xPadding, cities.thickness);
		Cities[CityName].yPos = GetPos(cities.y[i], cities.ySections, cities.yRatio, cities.yPadding, cities.thickness);
		Cities[CityName].width = cities.thickness;
		Cities[CityName].height = cities.thickness;
	}
}

function GetPos(section, sectioncount, ratio, padding, thickness)
{
    return (((section / sectioncount) * ratio) * 100) + (padding * 100) - (thickness / 2);
}

module.exports = {
    Init: function()
    {
		InitializeCities();
    },
    GetCities: function()
    {
        return Cities;
    }
}
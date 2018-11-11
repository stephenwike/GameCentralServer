var Roads = {};

function InitializeRoads()
{
    // Positioning data
	var roads = GetRoadEdgeData();
	CreateRoadObjects(roads);
}

function GetRoadEdgeData(players = 3)
{
    Roads = {};
	var edges = {};
	if (players === 3 || players === 4)
	{
		// For 3-4 player game
		edges.tag = 
		[
			"l_1_TO_u_1", "u_1_TO_1_2", "1_2_TO_2", "2_TO_2_3", "2_3_TO_u_3", "u_3_TO_l_3",
            "l_1_TO_1_4", "1_2_TO_1_2_5", "2_3_TO_2_3_6", "l_3_TO_3_7",
            "4_TO_1_4", "1_4_TO_1_4_5", "1_4_5_TO_1_2_5", "1_2_5_TO_2_5_6", "2_5_6_TO_2_3_6", "2_3_6_TO_3_6_7", "3_6_7_TO_3_7", "3_7_TO_7",
            "4_TO_4_8", "1_4_5_TO_4_5_9", "2_5_6_TO_5_6_10", "3_6_7_TO_6_7_11", "7_TO_7_11",
            "u_8_TO_4_8", "4_8_TO_4_8_9", "4_8_9_TO_4_5_9", "4_5_9_TO_5_9_10", "5_9_10_TO_5_6_10", "5_6_10_TO_6_10_11", "6_10_11_TO_6_7_11", "6_7_11_TO_7_11_12", "7_11_12_TO_7_12", "7_12_TO_u_12",
            "u_8_TO_l_8", "4_8_9_TO_8_9_13", "5_9_10_TO_9_10_14", "6_10_11_TO_10_11_15", "7_11_12_TO_11_12_16", "u_12_TO_l_12",
            "l_8_TO_8_13", "8_13_TO_8_9_13", "8_9_13_TO_9_13_14", "9_13_14_TO_9_10_14", "9_10_14_TO_10_14_15", "10_14_15_TO_10_11_15", "10_11_15_TO_11_15_16", "11_15_16_TO_11_12_16", "11_12_16_TO_12_16", "12_16_TO_l_12",
            "8_13_TO_13", "9_13_14_TO_13_14_17", "10_14_15_TO_14_15_18", "11_15_16_TO_15_16_19", "12_16_TO_16",
            "13_TO_13_17", "13_17_TO_13_14_17", "13_14_17_TO_14_17_18", "14_17_18_TO_14_15_18", "14_15_18_TO_15_18_19", "15_18_19_TO_15_16_19", "15_16_19_TO_16_19", "16_19_TO_16",
            "13_17_TO_u_17", "14_17_17_TO_17_18", "15_18_19_TO_18_19", "16_19_TO_u_19",
            "u_17_TO_l_17", "l_17_TO_17_18", "17_18_TO_18", "18_TO_18_19", "18_19_TO_l_19", "l_19_TO_u_19"
		];
		edges.x = 
		[
            4, 5, 6, 7, 8, 9,
            4, 6, 8, 10, 
            3, 4, 5, 6, 7, 8, 9, 10,
            3, 5, 7, 9, 11,
            2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
            2, 4, 6, 8, 10, 12,
            2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
            3, 5, 7, 9, 11,
            3, 4, 5, 6, 7, 8, 9, 10,
            4, 6, 8, 10,
			4, 5, 6, 7, 8, 9
		];
		edges.y = 
		[
            3, 3, 3, 3, 3, 3,
            4, 4, 4, 4,
            6, 6, 6, 6, 6, 6, 6, 6,
            7, 7, 7, 7, 7,
            9, 9, 9, 9, 9, 9, 9, 9, 9, 9,
            10, 10, 10, 10, 10, 10,
            12, 12, 12, 12, 12, 12, 12, 12, 12, 12,
            13, 13, 13, 13, 13,
            15, 15, 15, 15, 15, 15, 15, 15,
            16, 16, 16, 16,
            18, 18, 18, 18, 18, 18
        ];
        edges.rot = 
        [
            -30, 30, -30, 30, -30, 30,
            90, 90, 90, 90,
            -30, 30, -30, 30, -30, 30, -30, 30, 
            90, 90, 90, 90, 90,
            -30, 30, -30, 30, -30, 30, -30, 30, -30, 30,
            90, 90, 90, 90, 90, 90,
            30, -30, 30, -30, 30, -30, 30, -30, 30, -30,
            90, 90, 90, 90, 90,
            30, -30, 30, -30, 30, -30, 30, -30, 
            90, 90, 90, 90,
            30, -30, 30, -30, 30, -30
        ]
        edges.ySections = 22;
		edges.yRatio = 11 / ( 7 * Math.sqrt(3) ); 
		edges.yPadding = (1 - edges.yRatio) / 2;
		edges.xSections = 14;
		edges.xRatio = 1;
        edges.xPadding = 0;
        edges.thickness = 1.25;
    }
    return edges;
}

function CreateRoadObjects(roads)
{
    for (var i = 0; i < roads.tag.length; ++i)
	{
		var RoadName = "edge_" + roads.tag[i];
		Roads[RoadName] = {};
		Roads[RoadName].OwnedBy = "empty";
		Roads[RoadName].xPos = GetPos(roads.x[i], roads.xSections, roads.xRatio, roads.xPadding, roads.thickness);
        Roads[RoadName].yPos = GetPos(roads.y[i], roads.ySections, roads.yRatio, roads.yPadding, roads.thickness);
        Roads[RoadName].rot = roads.rot[i];
        Roads[RoadName].width = GetWidthPercent(roads.xSections, roads.rot[i], roads.thickness);
        Roads[RoadName].height = GetHeightPercent(roads.ySections, roads.yRatio, roads.rot[i], roads.thickness);
	}
}

function GetPos(section, sectioncount, ratio, padding, thickness)
{
    return (((section / sectioncount) * ratio) * 100) + (padding * 100) - (thickness / 2);
}

function GetWidthPercent(sectioncount, rot, thickness)
{
    switch(rot)
    {
        case -30:
        case 30:
            return ((1 / sectioncount) * 100) + thickness;
        case 90:
            return thickness;
    }
}

function GetHeightPercent(sectioncount, ratio, rot, thickness)
{
    switch(rot)
    {
        case -30:
        case 30:
            return (((1 / sectioncount) * ratio) * 100) + thickness;
        case 90:
            return (((2 / sectioncount) * ratio) * 100) + thickness;
    }
}

module.exports = {
    Init: function()
    {
        InitializeRoads();
    },
    GetRoads: function()
    {
        return Roads;
    },
    AddRoad: function(username, data)
    {
        console.log("Adding a road using data:");
        console.log(username);
        console.log(data);
        Roads[data.Id].OwnedBy = username;
        return true;
        //Roads[]
    }
}
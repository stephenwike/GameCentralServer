var socket = io.connect();
socket.on("configholding", function (args) { HoldingFunction(args); });

function HoldingFunction(args)
{
	console.log(args);
	var bod = document.body;
	var par = document.createElement('h1');
	var txt = document.createTextNode('THIS APPLICATION IS IN CONFIG HOLDING');
	par.appendChild(txt);
	bod.appendChild(par);
}
			
function AddUser()
{
	var val = document.getElementById('usernameInput').value

	socket.emit('addplayer', { "username" : val });
}

function SendConfig()
{
	var args = {};
	args.id = socket.id;
	args.Game = 'Catan';

	var configOption1 = {};
	configOption1.Title = "Number Of Players";
	configOption1.Description = "Description of config option 1 here. This should make it look like there is a much more in-depth description of what this configuration option is actuall trying to accomplish.";
	configOption1.SelectionType = "Dropdown";
	configOption1.Options = [ "1", "2", "3", "4" ];
	configOption1.Selected = 0;

	var configOption2 = {};
	configOption2.Title = "Option 2 Title";
	configOption2.Description = "Description of config option 2 here.";
	configOption2.SelectionType = "Checkbox";
	configOption2.Options = [ "1", "2", "3", "4" ];
	configOption2.Selected = 1;

	var configOption3 = {};
	configOption3.Title = "Option 3 Title";
	configOption3.Description = "Description of config option 3 here.";
	configOption3.SelectionType = "Dropdown";
	configOption3.Options = [ "1", "2", "3", "4" ];
	configOption3.Selected = 1;

	var configOption4 = {};
	configOption4.Title = "Option 4 Title";
	configOption4.Description = "Description of config option 4 here.";
	configOption4.SelectionType = "Checkbox";
	configOption4.Options = [ "1", "2", "3", "4" ];
	configOption4.Selected = 0;

	var configOptions = [ configOption1, configOption2, configOption3, configOption4 ];
	args.config = configOptions;

	socket.emit('loadconfig', args);
}

function LoadGame(data)
{
	socket.emit('loadgame', { "id": socket.id, "gameName" : "Catan" });
}

function AddSettlement(data)
{
	var args = {};
	args.id = socket.id;

	var changeItem1 = {};
	changeItem1.Type = "AddSettlement";
	changeItem1.Id = "vert_5_6_10";

	var changeItem2 = {};
	changeItem2.Type = "AddRoad";
	changeItem2.Id = "edge_1_4_5_TO_4_5_9";

	var changeItem3 = {};
	changeItem3.Type = "AddSettlement";
	changeItem3.Id = "vert_15_16_19";

	var changeItem4 = {};
	changeItem4.Type = "AddCity";
	changeItem4.Id = "vert_4_8_9"

	var changeItem5 = {};
	changeItem5.Type = "AddRoad";
	changeItem5.Id = "edge_10_11_15_TO_11_15_16";

	var changeItem6 = {};
	changeItem6.Type = "AddRoad";
	changeItem6.Id = "edge_15_18_19_TO_15_16_19";

	var changeLog = [ changeItem1, changeItem2, changeItem3, changeItem4, changeItem5, changeItem6 ];
	args.changes = changeLog;

	socket.emit('updategamedata', args);
}

function AddBadSettlement()
{
	var args = {};
	args.id = socket.id;

	var changeItem1 = {};
	changeItem1.Type = "AddSettlement";
	changeItem1.Id = "vert_5_6_10";

	var changeItem2 = {};
	changeItem2.Type = "AddRoad";
	changeItem2.Id = "edge_1_4_5_TO_4_5_9";

	var changeItem3 = {};
	changeItem3.Type = "AddSettlement";
	changeItem3.Id = "vert_15_16_19";

	var changeItem4 = {};
	changeItem4.Type = "AddCity";
	changeItem4.Id = "vert_4_8_9"

	var changeItem5 = {};
	changeItem5.Type = "AddRoad";
	changeItem5.Id = "edge_10_11_15_TO_11_15_16";

	var changeItem6 = {};
	changeItem6.Type = "AddRoad";
	changeItem6.Id = "edge_15_18_19_TO_15_16_19";

	var changeLog = [ changeItem1, changeItem2, changeItem3, changeItem4, changeItem5, changeItem6 ];
	args.changes = changeLog;

	socket.emit('updategamedata', args);
}
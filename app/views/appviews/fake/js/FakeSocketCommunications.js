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
	changeItem1.Id = "vert_Al";

	var changeItem2 = {};
	changeItem2.Type = "AddRoad";
	changeItem2.Id = "qrp";

	var changeItem3 = {};
	changeItem3.Type = "AddSettlement";
	changeItem3.Id = "vert_CEH";

	var changeLog = [ changeItem1, changeItem2, changeItem3 ];
	args.changes = changeLog;

	socket.emit('updategamedata', args);
}
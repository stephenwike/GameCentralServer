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

function SendConfigJSON()
{
	var args = {};
	args.id = 'fakeId';
	args.Game = 'Catan';

	var configOption1 = {};
	configOption1.Title = "Option 1 Title";
	configOption1.Description = "Description of config option 1 here. This should make it look like there is a much more in-depth description of what this configuration option is actuall trying to accomplish.";
	configOption1.SelectionType = "Dropdown";
	configOption1.Options = [ "1", "2", "3", "4" ];
	configOption1.Selected = 3;

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
	socket.emit('loadgame', { "gameName" : "catan" });
}
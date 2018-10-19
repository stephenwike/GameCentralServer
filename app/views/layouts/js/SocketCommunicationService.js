var RootLocation = document.location;
var connections = 0;
	
var socket = io.connect();
socket.on('connect', function(data) { ConnectionEntry(data); });
socket.on('updateconnectionslist', function(data) { UpdateConnectionsList(data); });
socket.on('loadconfig', function(data) { LoadConfig(data); });
socket.on('configresult', function(data) { LoadConfigResult(data); });
socket.on('loadgame', function(data) { LoadGame(data); });

function GetConnectionsList(data)
{
    socket.emit('getconnectionlist', {"id": socket.id});
}

function UpdateConnectionsList(data)
{
    console.log("Updating connected!");
    console.log(data);

    var usernames = Object.keys(data);
    connections = usernames.length;

    // If there are no connections, go back to home screen
	if (connections === 0)
	{
		document.location = "./";
    }

    // Start bubble animation
    StartBubbleAnimation(data);
}

function GetGameConfig(data)
{
    socket.emit('getgameconfig', {"id": socket.id});
    console.log(data);
}

function LoadConfig(data)
{
    console.log("loading Config");
	document.location = RootLocation + "config";
}

function LoadConfigResult(data)
{
    console.log("CONFIG RESULT: ");
    console.log(data);

    PopulateConfig(data)
}

function LoadGame(data)
{
	document.location = data.gameName;
}
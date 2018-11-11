var socket = io.connect();
socket.on('connect', function(data) { ConnectionEntry(data); });
socket.on('initgamedata', function(data) { InitializeGame(data); })
socket.on('updategamedataresult', function(data) { UpdateGameData(data); });
socket.on('updateturnresult', function(data) {UpdatePlayerRoster(data); });
socket.on('route', function(data) { document.location = data; });

function ConnectionEntry(data)
{
    socket.emit('getgamedata', {"id": socket.id});
}

function InitializeGame(data)
{
    RenderBoard(data);
}

function UpdateGameData(data)
{
    console.log("update arguments");
    console.log(data);
    ParseUpdateData(data);
}

function UpdatePlayerRoster(data)
{
    console.log("update player roster");
    console.log(data);
}
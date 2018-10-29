var socket = io.connect();
socket.on('connect', function(data) { ConnectionEntry(data); });
socket.on('initgamedata', function(data) { InitializeGame(data); })
socket.on('updategamedata', function(data) { UpdateGameData(data); });

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
    //UpdateGameData(data);
}
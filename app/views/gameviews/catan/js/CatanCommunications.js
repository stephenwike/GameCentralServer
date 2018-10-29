var socket = io.connect();
socket.on('connect', function(data) { ConnectionEntry(data); });
socket.on('updategamedata', function(data) { EnterGameData(data); });

function ConnectionEntry(data)
{
    socket.emit('getgamedata', {"id": socket.id});
}

function EnterGameData(data)
{
    InitializeGame(data);
}
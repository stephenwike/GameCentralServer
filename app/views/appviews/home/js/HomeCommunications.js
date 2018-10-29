var socket = io.connect();
socket.on('connect', function(data) { ConnectionEntry(data); });
socket.on('updateconnectionslist', function(data) { UpdateConnectionsList(data); });
socket.on('routeconfig', function() { document.location = "config"; });

function ConnectionEntry(data)
{
    socket.emit('getconnectionslist', {"id": socket.id});
}

function UpdateConnectionsList(data)
{
    console.log("Updating connected...");
    console.log(data);

    var usernames = Object.keys(data);
    connections = usernames.length;

    // Start bubble animation
    InitializeBubbleAnimation(data);
}
var Ports = {};
Ports.types = ["ore","wheat","lumber","brick","sheep","general","general","general","general"];

function ShufflePorts()
{
    var porttemp = [];
    for(var i = 0; i < Ports.types.length;){
        var rand = Math.floor(Math.random()*Ports.types.length);
        porttemp.push(Ports.types[rand]);
        Ports.types.splice(rand,1);
    }
    Ports.types = porttemp;
    return Ports;
}

module.exports = {
    Shuffle: function()
    {
        return ShufflePorts();
    }
}
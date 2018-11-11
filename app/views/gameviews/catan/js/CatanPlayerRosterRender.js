function BuildPlayerRoster(players)
{
    console.log(players);
    var loc = document.getElementById("playerroster");
    var div = document.createElement("DIV");
    div.id = "activeplayer";

    var para = document.createElement("P");
    var text = document.createTextNode(players.ActiveUser.Username);
    para.appendChild(text);
    div.appendChild(para);
    loc.appendChild(div);
}
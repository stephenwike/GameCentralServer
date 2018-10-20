var CitySpaces = {};
CitySpaces.yloc = ["-3","-3","7","7","7","7","17","17","17","17","17","17","27","27","27","27","27","27","37","37","37","37","37","37","47","47","47","47","47","47","57","57","57","57","57","57","67","67","67","67","67","67","77","77","77","77","77","77","87","87","87","87","97","97"];
CitySpaces.xloc = ["41.75","54.25","23","35.5","60.5","73","4.25","16.75","41.75","54.25","79.25","91.75","-2","23","35.5","60.5","73","98","4.25","16.75","41.75","54.25","79.25","91.75","-2","23","35.5","60.5","73","98","4.25","16.75","41.75","54.25","79.25","91.75","-2","23","35.5","60.5","73","98","4.25","16.75","41.75","54.25","79.25","91.75","23","35.5","60.5","73","41.75","54.25"];
CitySpaces.isActive = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
CitySpaces.isSettledby = ["empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty"];
CitySpaces.hasCity = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];

function SetCitySpaces()
{
    var loc = document.getElementById("pieces");
    var div = document.createElement("DIV");
    div.id = "citydiv";
    for(var i = 0; i < 54; i++){
        var img = document.createElement("IMG");
        img.src = "views/gameviews/catan/images/" + CitySpaces.isSettledby[i]+".png";
        img.classList.add("city");
	    img.setAttribute("style", "z-index:6;top:"+(CitySpaces.yloc[i])+"%;left:"+(CitySpaces.xloc[i])+"%;");
	    img.alt = [i];
        div.appendChild(img);
    }
    loc.appendChild(div);
}
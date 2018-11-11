function ParseUpdateData(data)
{
    console.log("parsing data...");
    console.log(data);

    for (var i = 0; i < data.changes.length; ++i)
    {
        switch(data.changes[i].Type)
        {
            case "AddSettlement":
                AddSettlement(data.user, data.changes[i].Id);
                break;
            case "AddCity":
                AddCity(data.user, data.changes[i].Id);
                break;
            case "AddRoad":
                AddRoad(data.user, data.changes[i].Id);
                break;
        }
    }
}
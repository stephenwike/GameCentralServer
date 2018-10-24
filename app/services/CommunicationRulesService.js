var LimitedList;
var isLimited = false;

module.exports = {
    LimitCommunicationsTo: function(list)
    {
        console.log("LimitConnetionsTo: ");
        console.log(list);
        LimitedList = list;
        isLimited = true;
    },
    CanCommunicate: function(id)
    {
        if (!isLimited) return true;
        console.log("List: Does it include id " + id + "?");
        console.log(LimitedList.includes(id));
        return LimitedList.includes(id);
    },
    CheckDisconnectedPlayer: function(id)
    {
        if (isLimited)
        {
            if (LimitedList.includes(id))
            {
                LimitedList = [];
                isLimited = false;
            }
        }
    }
}
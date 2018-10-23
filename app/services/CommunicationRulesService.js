var LimitedList;
var isLimited = false;

module.exports = {
    LimitCommunicationsTo: function(list)
    {
        LimitedList = list;
        isLimited = true;
    },
    CanCommunicate: function(id)
    {
        if (!isLimited) return true;
        console.log("Is does it include id " + id + "?");
        console.log(LimitedList.includes(id));
        return LimitedList.includes(id);
    }
}
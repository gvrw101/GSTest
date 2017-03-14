// ====================================================================================================
//
// Cloud Code for GS_HOURLY, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
var events = Spark.metaCollection('sales_events').find({ "status" : { $in : [ "ACTIVE", "INACTIVE" ] } }).toArray();
// Spark.getLog().debug(events)
for(var i = 0; i < events.length; i++){
    if(events[i].status === "INACTIVE"){ // check the date past the active date, and if so, activate it
        if(new Date() >  events[i].start_date){
            Spark.metaCollection('sales_events').update({ "_id" : { "$oid" : events[i]._id.$oid } }, {
                $set : {
                    "status" : "ACTIVE"
                }
            });
            Spark.getLog().debug("Activated "+events[i].event_name)
        }
    }else if(events[i].status === "ACTIVE"){

        if(new Date() >  events[i].end_date){
            Spark.metaCollection('sales_events').update({ "_id" : { "$oid" : events[i]._id.$oid } }, {
                $set : {
                    "status" : "EXPIRED"
                }
            });
            Spark.getLog().debug("Expired "+events[i].event_name)
        }
    }
}
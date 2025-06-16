db.users.updateOne(
    {"_id" : ObjectId("6406ad63fc13ae5a40000065")},
    {
        //  $set: {"interests" : [ "Coding", "Writing", "Reading" ],}
        //   $addToSet: {interests :  "Playing" }
        //   $addToSet: {interests : { $each : ["Playing" ,"reading"]} }
           $push: {interests : { $each : ["Playing" ,"reading"]} }
        
       })
 
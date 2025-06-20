db.task.updateOne({ languages :{$exists : true}} , {"_id" : ObjectId("6406ad63fc13ae5a40000065")}, 
{
    $addToSet: {
        languages : "Spanish"
    }
    
}
)
 
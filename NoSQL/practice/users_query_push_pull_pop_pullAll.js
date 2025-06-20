db.users.updateOne({"_id" : ObjectId("6406ad63fc13ae5a40000065")}, 
//   { $unset: { birthday : 1} }
// { $unset: [ "<field1>", "<field2>", ... ] }
// {$unset: {age: "" }}{ $pop: { <field>: <-1 | 1>, ... } }
// { $pop: { friends: 1} }
// { $pull: { interests :   {$in : ["Writing"]}} }
// { $pull: { name :  "Karim" } } // remove karim 

// { $pullAll:  { interests :  [ "Reading", "Writing" ]}}
{}
)

db.orders.aggregate([
    {$lookup: {
           from: "users", //connect other collection
           localField: "userId", //locally  field foriend id
           foreignField: "_id",//connect user _id
           as: "User"
         }}
    ])
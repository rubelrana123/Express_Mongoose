db.users.aggregate([
    // {$group: { _id: "$age", count : {$sum: 1}}},
    // {$group: { _id: "$address.country", count : {$sum: 1}}},
    // {$group: { _id: "$address.country",count : {$sum : 1}, name : {$push: "$name"}}},
    {$group: { _id: "$address.country",count : {$sum : 1}, fulldoc: {$push: "$$ROOT"}}},
    {$project: {"fulldoc.name" : 1 , "fulldoc.email" : 1}},
    ])
   
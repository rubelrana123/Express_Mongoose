// //explicit
// db.users.find({ $and: [ 
//     {age : {$ne : 22 }},
//     { age : {$gte: 18 }},
//     { age : {$lt: 25 }},
//     {gender : "Female"},
//     {interests : {$in :["Cooking","Gardening"]}}
    
//     ]} )
// .sort({age : 1}).limit(100)
//problem 6
db.getCollection("massive-data-collection").aggregate([
  {
    $group: {
      _id: "$company",
      totalBalance: { $sum: { $toDouble: { $substr: ["$balance", 1, -1] } } },
    },
  },
  {
    $sort: { totalBalance: -1 },
  },
  {
    $limit: 2,
  },
]);



// //problem 5
// db.getCollection("massive-data-collection").aggregate([
//   { $facet: {
        
//         "inTo30" : [
//          { $match: { age: { $lt: 30 } } },
//           { $bucket: {
//                   groupBy: "$age",
//                   boundaries: [ 20, 25, 30 ],
//                   default: "Other",
//                   output: {
//                     "count": { $sum: 1 },
//                     "names" : { $push: "$name" }
//                   }
//                 }}
//             ],
            
//          "above30" : [
//          { $match: { age: { $gte: 30 } } },
//           { $bucket: {
//                   groupBy: "$age",
//                   boundaries: [ 30, 35, 40 ],
//                   default: "Other",
//                   output: {
//                     "count": { $sum: 1 },
//                     "names" : { $push: "$name" }
//                   }
//                 }}
//             ]    
//     }}
//     ])

// //problem 4
// db.getCollection("massive-data-collection").aggregate([
//     {$unwind: "$friends"},
//     {$match: {"friends.name" : {$regex:"^W"}}},
//     {$group:
//     { _id: "$_id", uniqueFriends : {$addToSet: "$friends.name"}}},
 
    
//     ])
//problem 3
// db.getCollection("massive-data-collection").aggregate([
//     {$group:
//     { _id: "$favoriteFruit", count : {$sum : 1} , avgAge : {$avg: "$age"}}},
//     {$project: {avgAge : -1, count : 1}}
    
//     ])

//problem 1
// db.getCollection("massive-data-collection").aggregate([
//   { $match: { isActive: true } },
//   {
//     $group: {
//       _id: "$gender",
//       count: { $sum: 1 },
//     },
//   },
// ]);
// /./problem 2
// db.getCollection("massive-data-collection").aggregate([
//     //stage 1
//     {$match: {favoriteFruit : "banana", isActive : true}},
//     //stage 2
//     {$project : {name : 1, email : 1}}
//     ])


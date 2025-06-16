// //explict or
// db.users.find({
//     $or: [
//         {"skills.name" : "JAVASCRIPT"},
//         {"skills.name" : "PYTHON"},
        
//         ]
// }).sort({ age:-1 }).project({skills : 1})
//implict or
db.users.find({
    "skills.name": { $in : 
        ["JAVASCRIPT","PYTHON"],
    }
}).sort({ age:-1 }).project({skills : 1})
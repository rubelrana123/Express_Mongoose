db.users.aggregate([
    //stage1
    // {$match: {gender : "Male" , age : {$lt : 30}}},
    // {$match: {gender : "Male"}},
    //stage 2
    // {$match: {age : {$lt : 30}}},
    //stage 2 
    {$addFields: {course : "Full Stack WEb Developement"}},
    //stage2
    // {$project: {name : 1, age : 1, gender : 1, course : 1}},
    //stage 4 
    {$merge: "users"},
    
    ])
    
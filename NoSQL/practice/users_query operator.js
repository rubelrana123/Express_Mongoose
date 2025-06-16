db.users.find(
    {
        gender : "Female",age : {$in: [18,20,22,24,26,29]},
         interests : {$in : ["Cooking"]}
         
    }, 
   
    {gender : 1, age : 1, interests : 1}, )
    .sort({ age:-1 })

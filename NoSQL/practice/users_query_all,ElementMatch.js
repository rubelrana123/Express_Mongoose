db.users.find(
        //   {friends : "Mir Hussain"}
        // {"friends.0" : "Mir Hussain"}
        //  {friends : [ "Mir Hussain", "Abdur Rakib", "Najmus Sakib", "Rasel Ahmed"]}
    //  {friends : { $all :[ "Mir Hussain", "Abdur Rakib", "Najmus Sakib", "Rasel Ahmed"]}}
    //  {"skills.name" : "JAVASCRIPT","skills.level" : "Intermidiate"}   no valid
    
    // {skills : {
    //     name : "JAVASCRIPT",
    //     level : "Intermidiate",
    //     isLearning : false
    // }}// output exact file similar
    {skills : {$elemMatch: {  name : "JAVASCRIPT",  level : "Intermidiate"}}}
    
)
    .projection({skills : 1})
    .sort({})
    .limit(0)
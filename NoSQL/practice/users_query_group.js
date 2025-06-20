db.users.aggregate([
    {$group: {
        _id: null,
        totalSalary : {$sum : "$salary"},
        maxSalary : {$max : "$salary"},
        minSalary : {$min: "$salary"},
        avgSalary : {$avg :   "$salary"},
        
        
      }
    },
      {$project: {
          totalSalary : 1,
          maxSalary : 1,
          averageSalary : "$avgSalary",
          betwenSalary : {$subtract: [ "$maxSalary", "$minSalary" ]}
          
      }}
    ])
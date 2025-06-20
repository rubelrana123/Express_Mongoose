// db.getCollection("massive-data-collection").createIndex({email : 1})

// db.getCollection("massive-data-collection").createIndex({about :"text"})
db.getCollection("massive-data-collection").find({$text : {$search :"dolor"}})

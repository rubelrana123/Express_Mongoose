 const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://mongodb:mongodb@cluster0.7tuwn6n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// const uri = "mongodb://localhost:27017/";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
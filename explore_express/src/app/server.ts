import { client } from "../config/mongodb";
import app from "./app";
 

let server;
const port = 5000

const bootstrap = async () => {
    await client.connect();
    console.log("Connected to MongoDB");
    server = app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
}

bootstrap()
/* 
  
import app from "./app";
let server;
const port = 5000
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://mongodb:mongodb@cluster0.7tuwn6n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

if (!uri) throw new Error("MongoDB URI not provided in environment variables.");

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

 
const bootstrap = async () => {
    await client.connect();
     const db =  await client.db("todosDB")
   const collection = await db.collection("todos").insertOne({
     title: "html",
    body: "learning basic node",
   })
   console.log("collection", collection)
    console.log("Connected to MongoDB");
    server = app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
}

bootstrap() */

 
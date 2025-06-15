"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("../config/mongodb");
const app_1 = __importDefault(require("./app"));
let server;
const port = 5000;
const bootstrap = () => __awaiter(void 0, void 0, void 0, function* () {
    yield mongodb_1.client.connect();
    console.log("Connected to MongoDB");
    server = app_1.default.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
});
bootstrap();
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

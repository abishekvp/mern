var MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://0.0.0.0:27017/";

// import { MongoClient } from "mongodb";

// Replace the uri string with your MongoDB deployment's connection string.
// const uri = "<connection string uri>";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db("insertDB");
    const haiku = database.collection("haiku");
    // create a document to insert
    const doc = {
      summa: "Record of a Datum",
      content: "No bytes, no problem. Just insert a document, in MongoDB",
    }
    const result = await haiku.insertOne(doc);

    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

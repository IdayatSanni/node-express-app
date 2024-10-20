const { MongoClient, ObjectId } = require("mongodb"); //get the MongoClient class from mongodb

//MONGODB CLIENT SETUP
const dbUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWDA}@${process.env.DB_ATLAS}`;
const client = new MongoClient(dbUrl); //create a new client by passing in the connection string

//MONGODB FUNCTIONS
async function connection() {
  db = client.db("testdb");
  return db;
}
async function getLinks() {
  db = await connection();
  let results = db.collection("menuLinks").find({}); //find all so no query ({})
  //find() returns an object of type FindCursor, so we need to run .toArray() to convert to a JSON array we can use
  return await results.toArray(); //return the array of data
}

module.exports = {
  getLinks,
};

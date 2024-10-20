const { MongoClient, ObjectId } = require("mongodb"); //get the MongoClient class from mongodb

//MONGODB CLIENT SETUP
const dbUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWDA}@${process.env.DB_ATLAS}`;
const client = new MongoClient(dbUrl);

//MONGODB FUNCTIONS
async function connection() {
  db = client.db("testdb"); //select the "testdb" database
  return db;
}
async function getPublications() {
  db = await connection();
  let results = db.collection("publications").find({});
  return await results.toArray(); //return the array of data
}
async function addPublication(publicationToAdd) {
  db = await connection();
  await db.collection("publications").insertOne(publicationToAdd);
}

// also get menu link
async function getLinks() {
  db = await connection();
  let results = db.collection("menuLinks").find({});
  return await results.toArray(); //return the array of data
}
module.exports = {
  getPublications,
  addPublication,
  getLinks,
};

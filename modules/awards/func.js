const { MongoClient, ObjectId } = require("mongodb"); //get the MongoClient class from mongodb

//MONGODB CLIENT SETUP
const dbUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWDA}@${process.env.DB_ATLAS}`;
const client = new MongoClient(dbUrl);

//MONGODB FUNCTIONS
async function connection() {
  db = client.db("testdb"); //select the "testdb" database
  return db;
}
async function getAwards() {
  db = await connection();
  let results = db.collection("awards").find({});
  return await results.toArray(); //return the array of data
}
async function addAward(awardToAdd) {
  db = await connection();
  await db.collection("awards").insertOne(awardToAdd);
}

// also get menu link
async function getLinks() {
  db = await connection();
  let results = db.collection("menuLinks").find({});
  return await results.toArray(); //return the array of data
}
module.exports = {
  getAwards,
  addAward,
  getLinks,
};

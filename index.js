// Import required modules
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors"); // For API paths to work when deployed

// Page routes
const publicationRouter = require("./modules/publications/router");
const menuRouter = require("./modules/menuLinks/router");
const awardsRouter = require("./modules/awards/router");
const adminRouter = require("./modules/admin/router");
const apiAwardRouter = require("./modules/awards/apiRouter");
const apiPublicationRouter = require("./modules/publications/apiRouter");

// Set up Express object and port
const app = express();
const port = process.env.PORT || "8888";

// Set up CORS (allow all origins)
app.use(cors());  // This allows requests from all origins

// Set up route handlers
app.use("/", publicationRouter);
app.use("/", menuRouter);
app.use("/", awardsRouter);
app.use("/", adminRouter);
app.use("/", apiAwardRouter);
app.use("/", apiPublicationRouter);

// Set up views and static files
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));

// Set up server listening
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});

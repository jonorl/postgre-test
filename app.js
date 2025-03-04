// Load .env with path, API keys and other secrets
require("dotenv").config();


// Load Express and path
const express = require("express");
const app = express();
const path = require("node:path");

// Load Routers
const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");
const messageRouter = require("./routes/messageRouter");

// Add this code to make it possible to render .ejs files
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


// Add this code to make it possible to load css
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// Add this code to parse data to POST requests
app.use(express.urlencoded({ extended: true }));

// Set port to whatever is on .env otherwise use 3000
const PORT = process.env.PORT || 3000;

// Array of objects with a couple of samples

const messages = [
  {
    text: "Hi there!",
    user: "Armando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

// Add this code to pass messages as prop
app.use((req, res, next) => {
  req.messages = messages;
  next(); 
});

app.use("/", indexRouter);

app.use("/new", newRouter);

app.use("/message", messageRouter);

// Message in the console to confirm that the server launched correctly
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});

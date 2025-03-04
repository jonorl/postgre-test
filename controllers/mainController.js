// controllers/mainController.js

const db = require("../db/queries");

// exports.indexGet = (req, res) => {
//   res.render("index", {
//     title: "Index",
//   });
//   console.log("usernames will be logged here - wip");
// };

// exports.newGet = (req, res) => {
//   res.render("form", {
//     title: "New form",
//   });
// };

// exports.newPost = (req, res) => {
//   console.log("username to be saved: ", req.body.username);
//   res.redirect("/");
// };

async function getUsernames(req, res) {
  console.log("Request received")
  const usernames = await db.getAllUsernames();
  console.log("Usernames: ", usernames);
  res.send("Usernames: " + usernames.map(user => user.username).join(", "));
}

async function createUsernameGet(req, res) {
  // render the form
}

async function createUsernamePost(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
}

module.exports = {
  getUsernames,
  createUsernameGet,
  createUsernamePost
};
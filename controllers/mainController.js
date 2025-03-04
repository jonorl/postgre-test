// controllers/mainController.js

exports.indexGet = (req, res) => {
  res.render("index", {
    title: "Index",
  });
  console.log("usernames will be logged here - wip")
};

exports.newGet = (req, res) => {
    res.render("form", {
      title: "New form",
    });
  };

  exports.newPost = (req, res) => {
    console.log("username to be saved: ", req.body.username)
    res.redirect("/");
  };
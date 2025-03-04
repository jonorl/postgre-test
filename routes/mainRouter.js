// Load Router

const { Router } = require("express");
const mainController = require("../controllers/mainController");

const mainRouter = Router();

mainRouter.get("/", mainController.getUsernames);
console.log("Route defined")

mainRouter.get("/new", mainController.createUsernameGet);

mainRouter.post("/new", mainController.createUsernamePost);

// Always export back to app.js at the end

module.exports = mainRouter;

// Load Router

const { Router } = require("express");
const mainController = require("../controllers/mainController");

const mainRouter = Router();

mainRouter.get("/", mainController.indexGet);

mainRouter.get("/new", mainController.newGet);

mainRouter.post("/new", mainController.newPost);

// Always export back to app.js at the end

module.exports = mainRouter;

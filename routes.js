"use strict";

const express = require("express");
const router = express.Router();

const dashboard = require("./controllers/dashboard.js");
const about = require("./controllers/about.js");

router.get("/", dashboard.index);
router.get("/dashboard", dashboard.index);
router.get("/about", about.index);

router.post("/dashboard/addtodo", dashboard.addTodo);
module.exports = router;

const express = require("express");
const homeRoute = express.Router();

homeRoute.get("/", (req, res) => {
  res.send("WELCOME TO THE HOME ROUTE.WE WISH YOU A VERY HAPPY STAY");
});
module.exports = homeRoute;

require("dotenv").config();
const Joi = require("joi");
const config = require("config");
const helmet = require("helmet");
const courseRoute = require("./routes/courseRoute");
const homeRoute = require("./routes/homeRoute");
// const morgan = require("morgan");
const express = require("express");

// INITIALISE THE APP
const app = express();
// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(helmet());
app.use("/api/courses", courseRoute);
app.get("/", homeRoute);
// app.use(logger.auth);
// if (app.get("env") === "development") {
//   app.use(morgan("tiny"));
// }

// SIMULATE DB

// ROUTES

app.listen(process.env.PORT || 4000, () => {
  console.log("app listening on port 4000,press CRL c to break out");
});

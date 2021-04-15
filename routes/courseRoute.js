const express = require("express");
const logger = require("../middlewares/logger");
const courseRoute = express.Router();
const helper = require("../helperFuns/helper");

// simulate // DEBUG:
let courses = [
  {
    name: "course#1",
    id: 1,
  },
  {
    name: "course#2",
    id: 2,
  },
  {
    name: "course#3",
    id: 3,
  },
  {
    name: "course#4",
    id: 4,
  },
];
// routes
courseRoute.get("/", (req, res) => {
  res.status(200).json(courses);
});

courseRoute.get("/:id", logger.auth, (req, res) => {
  const index = req.params.id;
  const course = courses.find((course) => course.id === parseInt(index));
  if (course) res.status(200).json(course);
  else res.status(404).send("no such course exist on our repository");
});

courseRoute.post("/", (req, res) => {
  const schema = {
    name: Joi.string().min(3).required(),
  };
  const { error } = helper.validate(req.body, schema);

  const course = {
    name: req.body.name,
    id: courses.length + 1,
  };

  if (error) {
    return res.status(400).send(error.details[0].message);
  } else {
    courses.push(course);
    res.status(200).send(course);
  }
});

courseRoute.put("/:id", (req, res) => {
  const schema = {
    name: Joi.string().min(3).required(),
  };
  const { error } = helper.validate(req.body, schema);

  const index = req.params.id;
  if (!error) {
    const course = courses.find((course) => course.id === parseInt(index));
    course.name = req.body.name;
    res.send(course);
  } else {
    res.status(400).send(error.details[0].message);
  }
});

courseRoute.delete("/:id", (req, res) => {
  const index = req.params.id;
  const course = courses.find((course) => course.id === parseInt(index));

  // const schema = {
  // 	name: Joi.string().min(3).required(),

  // };
  // const result = Joi.validate(req.body, schema);
  // const { error } = result;

  courses.pop(course);
  res.send(`you have just deleted course : ${course.name}`);
});

module.exports = courseRoute;

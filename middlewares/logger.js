module.exports.log = function (req, res, next) {
  console.log("i am the middleware");
  next();
};
module.exports.auth = function (req, res, next) {
  const courseId = req.params.id;
  // simulate a db search

  console.log(
    `request to  course with id of ${courseId} is being processed by the middleware`
  );
  next();
};

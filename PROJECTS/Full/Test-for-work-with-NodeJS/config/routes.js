const router = require("../routes/");

module.exports = (app) => {
  app.use("/api/policies", router.policy);
  app.use("/api/objects", router.object);
  app.use("/api/reminders", router.reminder);
  app.use("*", (req, res, next) =>
    res.send("<h1> Something went wrong. Try again. :thumbsup: </h1>")
  );
};

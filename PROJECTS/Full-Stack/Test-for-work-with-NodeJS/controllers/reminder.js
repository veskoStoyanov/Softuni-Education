const models = require("../models");

module.exports = {
  getAll: async (req, res, next) => {
    try {
      let reminders = await models.Reminder.find();
      res.send(reminders);
    } catch (e) {
      console.log(e);
    }
  },

  post: async (req, res, next) => {
    const { reminderData, type, enType } = req.body;

    try {
      let reminder = await models.Reminder.create({
        reminderData,
        type,
        enType,
      });

      res.send({ reminder });
    } catch (e) {
      console.log(e);
    }
  },
};

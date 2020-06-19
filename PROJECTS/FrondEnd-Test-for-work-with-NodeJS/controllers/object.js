const models = require("../models");

module.exports = {
  getAll: async (req, res, next) => {
    try {
      let objects = await models.Object.find();
      res.send(objects);
    } catch (e) {
      console.log(e);
    }
  },

  increase: async (req, res, next) => {
    const id = req.params.id;
    try {
      let object = await models.Object.findById(id);
      object.count += 1;
      await object.save();
      res.send(object);
    } catch (e) {
      console.log(e);
    }
  },
  decrease: async (req, res, next) => {
    const id = req.params.id;
    try {
      let object = await models.Object.findById(id);
      if (object.count > 0) {
        object.count -= 1;
        await object.save();
        res.send(object);
      }
    } catch (e) {
      console.log(e);
    }
  },
};

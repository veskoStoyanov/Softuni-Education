const models = require("../models");

module.exports = {
  get: {
    getAll: async (req, res, next) => {
      try {
        let policies = await models.Policy.find();
        res.send(policies);
      } catch (e) {
        console.log(e);
      }
    },

    getOne: async (req, res, next) => {
      const id = req.params.id;

      try {
        let policy = await models.Policy.findById(id);
        res.send(policy);
      } catch (e) {
        console.log(e);
      }
    },
  },

  post: async (req, res, next) => {
    const { company, type, enType, object, start, end } = req.body;
    try {
      let policy = await models.Policy.create({
        company,
        type,
        enType,
        object,
        start,
        end,
      });
      res.send({ policy });
    } catch (e) {
      console.log(e);
    }
  },

  put: {
    edit: async (req, res, next) => {
      const id = req.params.id;
      const { type, object, enType } = req.body;
      console.log(enType);

      try {
        let policy = await models.Policy.findById(id);
        policy.type = type;
        policy.object = object;
        policy.enType = enType;

        await policy.save();
        res.send({ policy });
      } catch (e) {
        console.log(e);
      }
    },
  },

  delete: async (req, res, next) => {
    const id = req.params.id;

    try {
      let policy = await models.Policy.deleteOne({ _id: id });
      res.send({ policy });
    } catch (e) {
      console.log(e);
    }
  },
};
